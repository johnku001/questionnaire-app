import React from 'react';
import { Serializer } from 'survey-core';
import { ReactSurveyElement, ReactElementFactory } from 'survey-react-ui';
import { ActionButton } from './ActionButton';

Serializer.addProperty('survey', 'progressTitle');

export class FooterButtons extends ReactSurveyElement {
  render(): JSX.Element {
    return (
      <div className="flex mx-6 p-6 items-center gap-4 justify-between">
        <ActionButton
          text="Start"
          onClick={() => this.props.model.start()}
          canRender={this.props.model.isShowStartingPage}
        />
        <ActionButton
          text="Previous"
          onClick={() => this.props.model.prevPage()}
          canRender={this.props.model.isShowPrevButton}
        />
        <ActionButton
          text="Next"
          onClick={() => this.props.model.nextPage()}
          canRender={this.props.model.isShowNextButton}
        />
        <ActionButton
          text="Complete"
          onClick={() => this.props.model.completeLastPage()}
          canRender={this.props.model.isLastPage}
        />
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement('custom-footer', (props: any) => {
  return React.createElement(FooterButtons, props);
});
