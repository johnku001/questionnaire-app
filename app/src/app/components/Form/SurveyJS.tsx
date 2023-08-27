import React from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import './SurveyJS/index';

interface SurveyJSProps {
  surveyJson: unknown;
}

export default function SurveyJS({ surveyJson }: SurveyJSProps) {
  const survey = new Model(surveyJson);
  survey.focusFirstQuestion();
  survey.progressBarType = 'questions';
  survey.showProgressBar = 'top';

  survey.addLayoutElement({
    id: 'progressbar-percentage',
    component: 'sv-progressbar-percentage',
    container: 'contentBottom',
    data: survey,
  });

  survey.addLayoutElement({
    id: 'navigationbuttons',
    component: 'custom-footer',
    container: 'footer',
    data: survey,
  });

  return (
    <>
      <Survey model={survey} />
    </>
  );
}
