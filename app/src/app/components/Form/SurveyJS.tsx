import React, { useState, useEffect } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

interface SurveyJSProps {
  surveyJson: unknown;
}

function PageSelector({
  pageNo,
  setPageNo,
  pageCount,
}: {
  pageNo: number;
  setPageNo: Function;
  pageCount: number;
}) {
  const getPageSelectorOptions = (): JSX.Element[] => {
    const content: JSX.Element[] = [];
    for (let i = 0; i < pageCount; i++) {
      content.push(
        <option key={i} value={i}>
          Page {i + 1}
        </option>,
      );
    }
    return content;
  };

  return (
    <select
      className="flex-basis-240 sd-input sd-dropdown"
      value={pageNo}
      onChange={evt => {
        setPageNo(JSON.parse(evt.target.value));
      }}
    >
      {getPageSelectorOptions()}
    </select>
  );
}

function ActionButton({
  text,
  onClick,
  canRender,
}: {
  text: string;
  onClick: () => void;
  canRender: boolean;
}) {
  if (!canRender) return null;

  return (
    <button
      className="focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:bg-teal-600 hover:shadow-md transition duration-300 ease-in-out text-base px-8 py-3 rounded-md shadow-md bg-teal-500 text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default function SurveyJS({ surveyJson }: SurveyJSProps) {
  const survey = new Model(surveyJson);
  survey.focusFirstQuestion();
  const [pageNo, setPageNo] = useState<number>(survey.currentPageNo);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    const handlePageChange = (_, options) => {
      setPageNo(options.newCurrentPage.visibleIndex);
    };

    const handleSurveyStart = () => {
      setIsRunning(true);
    };

    const handleSurveyComplete = () => {
      setIsRunning(false);
    };

    survey.onCurrentPageChanged.add(handlePageChange);
    survey.onStarted.add(handleSurveyStart);
    survey.onComplete.add(handleSurveyComplete);

    return () => {
      survey.onCurrentPageChanged.remove(handlePageChange);
      survey.onStarted.remove(handleSurveyStart);
      survey.onComplete.remove(handleSurveyComplete);
    };
  }, [survey]);

  const decrementPageNo = () => setPageNo(pageNo - 1);
  const incrementPageNo = () => setPageNo(pageNo + 1);
  const endSurvey = () => survey.completeLastPage();

  const pageCount = survey.visiblePages.length;

  return (
    <>
      {isRunning && (
        <div className="flex p-6 items-center gap-4 justify-between bg-white">
          <PageSelector
            pageNo={pageNo}
            setPageNo={setPageNo}
            pageCount={pageCount}
          />
          <div className="flex flex-col items-end">
            <div className="flex gap-2">
              <ActionButton
                text="Previous Page"
                onClick={decrementPageNo}
                canRender={pageNo !== 0}
              />
              <ActionButton
                text="Next Page"
                onClick={incrementPageNo}
                canRender={pageNo !== pageCount - 1}
              />
              <ActionButton
                text="Complete"
                onClick={endSurvey}
                canRender={pageNo === pageCount - 1}
              />
            </div>
            <div className="relative w-full">
              <span className="navigation-text absolute right-0 top-2 font-open-sans font-normal text-xs text-gray-400">
                Page {pageNo + 1} of {pageCount}
              </span>
            </div>
          </div>
        </div>
      )}
      <Survey currentPageNo={pageNo} model={survey} />
    </>
  );
}
