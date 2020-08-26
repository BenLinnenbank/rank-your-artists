import React, { useState } from 'react';

const StateContext = React.createContext([{}, () => { }]);

function StateContextProvider(props) {
    const [state, setState] = useState([]);

    return (
        <StateContext.Provider value={[state, setState]}>
            {props.children}
        </StateContext.Provider>
    );
}

export { StateContext, StateContextProvider };
