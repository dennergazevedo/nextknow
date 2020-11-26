/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */

import React from "react"

// STYLED COMPONENTS
import {
  Container
} from './styles';

// COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Destaque from '../components/Destaque';

// STYLES GLOBAL
import { GlobalStyle } from '../styles/global';

import api from '../menu/api.json';

export default function Home() {

  return (
    <Container>
      <GlobalStyle />
      <Navbar />
        {
          [...api.keys()].map(id => (
              <Destaque key={id} id={id} />
          ))
        }
      <Footer />
    </Container>
  )
}
