import React from 'react';
import { AddArtist } from './components/AddArtist';
import { DisplayArtists } from './components/DisplayArtists';
import { Container } from 'reactstrap';
import { StateContextProvider } from './components/Context';
import './App.css';

function App() {

  return (
    <Container>
      <StateContextProvider>
        <div>
          <AddArtist />
          <DisplayArtists />
        </div>
      </StateContextProvider>
    </Container>
  );
}

export default App;
