import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ActionButton } from 'app/components/Form/SurveyJS/ActionButton';
import { createRenderer } from 'react-test-renderer/shallow';

const renderer = createRenderer();

describe('ActionButton', () => {
  it('should render the button and call onClick when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <ActionButton text="Start" onClick={onClickMock} canRender={true} />,
    );

    const button = getByText('Start');
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should not render the button when canRender is false', () => {
    const { queryByText } = render(
      <ActionButton text="Start" onClick={() => {}} canRender={false} />,
    );

    const button = queryByText('Start');
    expect(button).toBeNull();
  });

  it('should render and match the snapshot', () => {
    renderer.render(
      <ActionButton text="text" onClick={() => {}} canRender={true} />,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
