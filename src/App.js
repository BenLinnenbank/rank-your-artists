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


// const initialInputState = { player: "", score: "" };
//   const [eachEntry, setEachEntry] = useState(initialInputState);
//   const [leaderboard, setLeaderboard] = useState([]);
//   const { player, score } = eachEntry;
//   const handleInputChange = e => {
//     setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
//   };
//   const updateLeaderboardArray = eachEntry => {
//     setLeaderboard([...leaderboard, eachEntry]);
//   };
//   const handleFinalSubmit = e => {
//     updateLeaderboardArray(eachEntry);
//   };

{/* <div className="container mt-4">
      <div>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
            <h2>Leaderboard</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Form>
              <FormGroup>
                <Label for="player">Player</Label>
                <Input name="player"
                  placeholder="Ex: Player 1"
                  onChange={handleInputChange}
                  value={player}></Input>
              </FormGroup>
              <FormGroup>
                <Label for="score">Score</Label>
                <Input name="score"
                  placeholder="Ex: 32342"
                  onChange={handleInputChange}
                  value={score}></Input>
              </FormGroup>
              <Button onClick={handleFinalSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
      <div>
        OutputForm
      </div>
    </div> */}