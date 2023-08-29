import * as React from 'react';

import * as SurveyCore from 'survey-core';
import SurveyJS from 'app/components/Form/SurveyJS';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery, useMutation } from 'react-query';
import { toast } from 'react-toastify';
import {
  getQuestionnaire,
  createNewQuestionnaireResponse,
} from 'app/services/QuestionnaireService';

import CircularProgress from '@mui/material/CircularProgress';

export function HomePage() {
  let navigate = useNavigate();
  const { isLoading, error, data } = useQuery('repoData', getQuestionnaire);

  const postQuestionnaireResult = useMutation({
    mutationFn: ({
      survey,
      options,
    }: {
      survey: SurveyCore.SurveyModel;
      options: SurveyCore.CompleteEvent;
    }) => {
      survey.showCompletedPage = false;
      return createNewQuestionnaireResponse(survey.data);
    },
    onSuccess: () => {
      navigate('/finished');
    },
    onError: (err, variables) => {
      console.error(err);
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
      variables.survey.showCompletedPage = false;
      variables.survey.clear(true);
      variables.survey.focusFirstQuestion();
    },
  });

  const onSubmit = (
    survey: SurveyCore.SurveyModel,
    options: SurveyCore.CompleteEvent,
  ) => {
    postQuestionnaireResult.mutate({ survey, options });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress size="3rem" />
      </div>
    );
  }

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

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <SurveyJS surveyJson={data} onSubmit={onSubmit} />
    </>
  );
}
