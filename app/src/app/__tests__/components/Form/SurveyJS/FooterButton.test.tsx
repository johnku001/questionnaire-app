import React from 'react';
import { render } from '@testing-library/react';
import { FooterButtons } from 'app/components/Form/SurveyJS/FooterButtons';

describe('FooterButtons', () => {
  it('renders without crashing', () => {
    const mockModel = {
      start: jest.fn(),
      prevPage: jest.fn(),
      nextPage: jest.fn(),
      completeLastPage: jest.fn(),
      isShowStartingPage: true,
      isShowPrevButton: true,
      isShowNextButton: true,
      isLastPage: true,
    };

    const { container } = render(<FooterButtons model={mockModel} />);
    expect(container).toBeInTheDocument();
  });

  // Add more test cases as needed
});
