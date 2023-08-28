import React from 'react';
import { Serializer } from 'survey-core';
import { ReactSurveyElement, ReactElementFactory } from 'survey-react-ui';
import { ActionButton } from 'app/components/Form/SurveyJS/ActionButton';
import { themeJson } from 'app/components/Form/theme';

Serializer.addProperty('survey', 'progressTitle');

export class FooterButtons extends ReactSurveyElement {
  render(): JSX.Element {
    return (
      <div className={`flex items-center gap-4 justify-between `}>
        <ActionButton
          text="Start"
          onClick={() => this.props.model.start()}
          canRender={this.props.model.isShowStartingPage}
          color={themeJson.cssVariables['--sjs-primary-backcolor']}
          darkColor={themeJson.cssVariables['--sjs-primary-backcolor-dark']}
        />
        <ActionButton
          text="Previous"
          onClick={() => this.props.model.prevPage()}
          canRender={this.props.model.isShowPrevButton}
          color={themeJson.cssVariables['--sjs-primary-backcolor']}
          darkColor={themeJson.cssVariables['--sjs-primary-backcolor-dark']}
        />
        <ActionButton
          text="Next"
          onClick={() => this.props.model.nextPage()}
          canRender={this.props.model.isShowNextButton}
          className="ml-auto"
          color={themeJson.cssVariables['--sjs-primary-backcolor']}
          darkColor={themeJson.cssVariables['--sjs-primary-backcolor-dark']}
        />
        <ActionButton
          text="Complete"
          onClick={() => this.props.model.completeLastPage()}
          canRender={this.props.model.isLastPage}
          color={themeJson.cssVariables['--sjs-primary-backcolor']}
          darkColor={themeJson.cssVariables['--sjs-primary-backcolor-dark']}
        />
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement('custom-footer', (props: any) => {
  return React.createElement(FooterButtons, props);
});
