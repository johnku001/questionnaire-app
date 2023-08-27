import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Serializer } from 'survey-core';
import { ReactSurveyElement, ReactElementFactory } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';

Serializer.addProperty('survey', 'progressTitle');

export class PercentageProgressBar extends ReactSurveyElement {
  baseUnit =
    getComputedStyle(document.documentElement).getPropertyValue(
      '--sjs-base-unit',
    ) || '8px';
  calculatedValue = `calc(5 * ${this.baseUnit})`;
  render(): JSX.Element {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingX: this.calculatedValue,
        }}
      >
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={this.props.model.progressValue}
            {...this.props}
          />
        </Box>
        <Box sx={{ minWidth: 37, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            this.props.model.progressValue,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  'sv-progressbar-percentage',
  (props: any) => {
    return React.createElement(PercentageProgressBar, props);
  },
);
