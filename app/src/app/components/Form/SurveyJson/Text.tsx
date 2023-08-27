import React, { ReactElement } from 'react';
import { ReactQuestionFactory } from 'survey-react-ui';
import TextField from '../../TextField';

/* style Overload */
import '../../scss/sassForm/_Text.scss';

interface TextProps {
  isDisplayMode: boolean;
  question: {
    inputId: string;
    getControlClass: () => string;
    displayValue: string;
    optionsCaption: string;
    inputType: string;
    name: string;
    title: string;
    variant: string;
    isRequired: boolean;
    defaultValue: string;
    description: string;
    value: string;
    disabled: boolean;
  };
}

export default function Text(props: TextProps): ReactElement {
  return (
    <div>
      {props.isDisplayMode ? (
        /* replace original component with theme surveyJs */
        <div
          id={props.question.inputId}
          className={props.question.getControlClass()}
          // disabled
        >
          {props.question.displayValue || props.question.optionsCaption}
        </div>
      ) : (
        /* construct (overloard) all components (ex : material ui) */
        <div>
          <TextField
            fullWidth={true}
            multiline={props.question.inputType === 'comment' ? true : false}
            type={props.question.inputType}
            id={props.question.name}
            name={props.question.name}
            label={props.question.title}
            variant={props.question.variant}
            required={props.question.isRequired}
            defaultValue={props.question.defaultValue}
            description={props.question.description}
            icon={{
              left: 'fa fa-id-card',
              //right: "fab fa-audible"
            }}
            onChange={value => {
              props.question.value = value;
            }}
            helpTitle={props.question.title}
            helpText={
              "Je suis le text d'aide pour le champ : " +
              props.question.name.toUpperCase()
            }
          />
          {/*<pre>{JSON.stringify(props.question, null, 2)}</pre>*/}
        </div>
      )}
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion('text', props => {
  return React.createElement(Text);
});
