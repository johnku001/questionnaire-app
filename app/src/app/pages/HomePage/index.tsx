import * as React from 'react';
import { useEffect } from 'react';

import SurveyJS from 'app/components/Form/SurveyJS';
import axios from 'axios';

import { Helmet } from 'react-helmet-async';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import CircularProgress from '@mui/material/CircularProgress';

export function HomePage() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    axios.get('http://localhost:3001/questions').then(res => res.data),
  );

  // if (error && typeof error === 'object' && 'message' in error) {
  //   return 'An error has occurred: ' + error.message;
  // }
  useEffect(() => {
    if (error && typeof error === 'object' && 'message' in error) {
      toast.error('Cannot load the api', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }, [error]);
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <CircularProgress size="3rem" />
        </div>
      ) : (
        <SurveyJS surveyJson={data} />
      )}
    </>
  );
}
