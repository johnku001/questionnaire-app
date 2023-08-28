import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PercentageProgressBar } from 'app/components/Form/SurveyJS/PercentageProgressBar'; // Adjust the import path

describe('PercentageProgressBar', () => {
  beforeEach(() => {
    Object.defineProperty(globalThis, 'getComputedStyle', {
      value: jest.fn().mockReturnValue({
        getPropertyValue: jest.fn(propertyName => {
          if (propertyName === '--sd-base-padding') {
            return '20px';
          } else if (propertyName === '--sv-element-add-padding-left') {
            return '10px';
          } else if (propertyName === '--sv-element-add-padding-right') {
            return '10px';
          } else if (propertyName === '--sjs-base-unit') {
            return '8px';
          }
          return '';
        }),
      }),
    });
  });

  it('renders without errors', () => {
    render(<PercentageProgressBar model={{ progressValue: 50 }} />);
    // Assert that the component renders without errors
  });

  it('displays the progress value', () => {
    const progressValue = 75;
    render(<PercentageProgressBar model={{ progressValue }} />);

    const progressText = screen.getByText(`${progressValue}%`);
    expect(progressText).toBeInTheDocument();
  });

  it('displays the progress bar and percentage text', () => {
    const progressValue = 25;
    render(<PercentageProgressBar model={{ progressValue }} />);

    const progressBar = screen.getByRole('progressbar');
    const progressText = screen.getByText(`${progressValue}%`);

    expect(progressBar).toBeInTheDocument();
    expect(progressText).toBeInTheDocument();
  });
});
