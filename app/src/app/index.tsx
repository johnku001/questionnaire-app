/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { FinishQuestionnairePage } from './pages/FinishQuestionnairePage/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Navigate to="/questionnaire" />} />
        <Route path="/questionnaire" element={<HomePage />} />
        <Route path="/finished" element={<FinishQuestionnairePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
