import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function FinishQuestionnairePage() {
  return (
    <>
      <Helmet>
        <title>Finished Questionnaire</title>
        <meta name="description" content="Questionnaire finished" />
      </Helmet>
      <Wrapper>
        <Title className="animate-bounce">
          <span role="img" aria-label="Smile Face">
            😆
          </span>
        </Title>
        <p className="text-black text-xl my-10">
          Congratulations! You have completed the questionnaire.
        </p>
        <Link className="text-sm text-blue-600/50 " to="/questionnaire">
          Go back to questionnaire
        </Link>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: black;
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;
