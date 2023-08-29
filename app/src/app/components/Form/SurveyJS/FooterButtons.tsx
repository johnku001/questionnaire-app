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
          textColor={themeJson.cssVariables['--sjs-general-backcolor']}
          backgroundColor={
            themeJson.cssVariables['--sjs-primary-backcolor-dark']
          }
        />
        <ActionButton
          text="Back"
          onClick={() => this.props.model.prevPage()}
          canRender={this.props.model.isShowPrevButton}
          textColor={themeJson.cssVariables['--sjs-primary-backcolor-dark']}
          backgroundColor={themeJson.cssVariables['--sjs-general-backcolor']}
        />

        <ActionButton
          text="Next"
          onClick={() => this.props.model.nextPage()}
          canRender={this.props.model.isShowNextButton}
          className="ml-auto"
          textColor={themeJson.cssVariables['--sjs-primary-backcolor-dark']}
          backgroundColor={themeJson.cssVariables['--sjs-general-backcolor']}
        />
        <ActionButton
          text="Preview"
          onClick={() => this.props.model.showPreview()}
          canRender={
            this.props.model.isLastPage && this.props.model.state !== 'preview'
          }
          className="ml-auto"
          textColor={themeJson.cssVariables['--sjs-primary-backcolor-dark']}
          backgroundColor={themeJson.cssVariables['--sjs-general-backcolor']}
        />
        <ActionButton
          text="Complete"
          onClick={() => this.props.model.completeLastPage()}
          canRender={
            this.props.model.isLastPage && this.props.model.state === 'preview'
          }
          className="ml-auto"
          textColor={themeJson.cssVariables['--sjs-general-backcolor']}
          backgroundColor={
            themeJson.cssVariables['--sjs-primary-backcolor-dark']
          }
        />
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement('custom-footer', (props: any) => {
  return React.createElement(FooterButtons, props);
});
