import React, { useState, useContext } from 'react';
import { Input, Label, Button } from 'reactstrap';
import { StateContext } from './Context';


export function AddArtist() {

    const [artistInput, setArtistInput] = useState(null);
    const [state, setState] = useContext(StateContext);

    return (
        <>
            <h1>ARTIST RANKER</h1>
            <Label for='artist-input'>Artist Input</Label>
            <Input name='artist-input' placeholder='Enter artist name' value={artistInput} onChange={e => setArtistInput(e.currentTarget.value)} />
            <Button color='primary' onClick={handleClick} >Add Artist</Button>
        </>
    );

    function handleClick() {
        const newArtist = {
            name: artistInput,
            rating: 1,
        };
        setState(state => [...state, newArtist]);
        setArtistInput('');
    }
}


// {artists.map((artist, index) => (
//     <div className="box">
//         <button className="button" onClick={() => playTrack(index)}>
//             {currentTrackName === artist.name && isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
//         </button>
//         <div className="song-title">
//             {artist.name}
//         </div>
//     </div>
// ))}