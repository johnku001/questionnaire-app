import React from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import * as SurveyCore from 'survey-core';
// eslint-disable-next-line
import noUiSlider from 'nouislider';
import { nouislider } from 'surveyjs-widgets';
import 'nouislider/dist/nouislider.min.css';
import 'survey-core/defaultV2.min.css';
import { inputmask } from 'surveyjs-widgets';
import { themeJson } from './theme';

import './SurveyJS/index';

interface SurveyJSProps {
  surveyJson: unknown;
  onSubmit: (
    sender: SurveyCore.SurveyModel,
    options: SurveyCore.CompleteEvent,
  ) => void;
}
nouislider(SurveyCore);
inputmask(SurveyCore);

export default function SurveyJS({ surveyJson, onSubmit }: SurveyJSProps) {
  const survey = new Model(surveyJson);
  survey.focusFirstQuestion();
  survey.progressBarType = 'questions';
  survey.showProgressBar = 'top';
  survey.applyTheme(themeJson);
  survey.onComplete.add(onSubmit);

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
