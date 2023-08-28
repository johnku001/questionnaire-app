import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Serializer } from 'survey-core';
import { ReactSurveyElement, ReactElementFactory } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { themeJson } from 'app/components/Form/theme';

Serializer.addProperty('survey', 'progressTitle');

export class PercentageProgressBar extends ReactSurveyElement {
  theme = createTheme({
    palette: {
      primary: {
        main: themeJson.cssVariables['--sjs-primary-backcolor'],
      },
    },
  });
  render(): JSX.Element {
    return (
      <ThemeProvider theme={this.theme}>
        <Box className={`flex items-center `}>
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
      </ThemeProvider>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  'sv-progressbar-percentage',
  (props: any) => {
    return React.createElement(PercentageProgressBar, props);
  },
);
