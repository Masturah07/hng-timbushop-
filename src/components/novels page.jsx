import React from 'react';
import NovelsNavbar from '../components/novels nav';
import AppHeader from '../components/header';

import { Container } from 'react-bootstrap';

const NovelsPage = () => {
  return (
    <Container>
      <AppHeader />
      
      <NovelsNavbar />
    </Container>
  );
};

export default NovelsPage;
