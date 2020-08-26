import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import { StateContext } from './Context';

export function Artist(props) {

    const [state, setState] = useContext(StateContext);

    return (
        <>
            <div>{props.name}</div>
            <div>Rating: {props.rating}</div>
            <Button color='primary' onClick={addStar} >+</Button>
            <Button color='primary' onClick={removeStar} >-</Button>
        </>
    );

    function addStar() {
        const newState = [...state];
        newState[props.index].rating = newState[props.index].rating + 1;
        setState(newState);
    }

    function removeStar() {
        const newState = [...state];
        newState[props.index].rating = newState[props.index].rating - 1;
        setState(newState);
    }
}