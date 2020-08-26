import React, { useContext } from 'react';
import { Artist } from './Artist';
import { StateContext } from './Context';

export function DisplayArtists() {

    const [state, setState] = useContext(StateContext);

    return (
        <>
            <h2>RANKING LIST</h2>
            {
                state.sort((artistA, artistB) => artistB.rating - artistA.rating).map((artist, index) => {
                    return (
                        <>
                            <Artist name={artist.name} rating={artist.rating} index={index} />
                        </>
                    )
                })
            }
        </>
    );
}