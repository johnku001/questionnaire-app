import * as React from 'react';
import { useEffect } from 'react';

import * as SurveyCore from 'survey-core';
import SurveyJS from 'app/components/Form/SurveyJS';

import { Helmet } from 'react-helmet-async';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import {
  getQuestionnaire,
  createNewQuestionnaireResponse,
} from 'app/services/QuestionnaireService';

import CircularProgress from '@mui/material/CircularProgress';

export function HomePage() {
  const { isLoading, error, data } = useQuery('repoData', getQuestionnaire);

  useEffect(() => {
    if (error && typeof error === 'object' && 'message' in error) {
      toast.error('Cannot load the api', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }, [error]);
  const onSubmit = (
    survey: SurveyCore.SurveyModel,
    options: SurveyCore.CompleteEvent,
  ) => {
    survey.showCompletedPage = false;
    submitResponse(survey, options);
  };

  const submitResponse = async (
    survey: SurveyCore.SurveyModel,
    options?: SurveyCore.CompleteEvent,
  ) => {
    try {
      const data = await createNewQuestionnaireResponse(survey.data);
      console.log(data);
      window.location.href = '/finished';
    } catch (err) {
      console.error(err);
      console.log(options);
      toast.error('Cannot save the api, please do it again', {
        position: 'top-right',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      survey.showCompletedPage = false;
      survey.clear(true);
      survey.focusFirstQuestion();
    }
  };

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <CircularProgress size="3rem" />
        </div>
      ) : (
        <SurveyJS surveyJson={data} onSubmit={onSubmit} />
      )}
    </>
  );
}
