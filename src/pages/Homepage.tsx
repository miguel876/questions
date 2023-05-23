import React from 'react'
import Questions from './Questions';
import { useRoutes, useLocation } from 'react-router-dom';
import Question from './Question';
import { Container } from '@mui/material';

type Props = {}

const Homepage = (props: Props) => {
    const location = useLocation()
    const routes = useRoutes([
        {
          path: '/',
          element: <Questions />,
        },
        {
          path: 'questions',
          element: <Questions />,
        },
        {
          path: 'question/:id',
          element: <Question />,
        },
      ], location);

  return (
    <Container>{routes}</Container>
  )
}

export default Homepage