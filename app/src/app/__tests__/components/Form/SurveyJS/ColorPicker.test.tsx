import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect'; // for more readable assertions
import {
  SurveyQuestionColorPicker,
  QuestionColorPickerModel,
} from 'app/components/Form/SurveyJS/ColorPicker';

describe('SurveyQuestionColorPicker', () => {
  let container: HTMLDivElement | null = null;
  const mockQuestion = {
    value: '#FF0000',
    colorPickerType: 'Slider',
    disableAlpha: false,
  };

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container) {
      act(() => {
        if (container) {
          unmountComponentAtNode(container);
          container.remove();
          container = null;
        }
      });
    }
  });

  it('renders with default props', () => {
    // act(() => {
    //   render(<SurveyQuestionColorPicker question={mockQuestion} />, container);
    // });
  });
});
