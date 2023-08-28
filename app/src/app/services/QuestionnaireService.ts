import Axios from '.';
import * as SurveyCore from 'survey-core';

export const getQuestionnaire = async () => {
  const { data } = await Axios.get('/questions');
  return data;
};

export type CreateNewQuestionnaireResponseParams = SurveyCore.SurveyModel;
export const createNewQuestionnaireResponse = async (
  params: CreateNewQuestionnaireResponseParams,
) => {
  const { data } = await Axios.post('/questions', params);
  return data;
};
