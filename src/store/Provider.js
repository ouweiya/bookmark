import React, { useReducer } from 'react';
export const Context = React.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'filtxt':
      return { ...state, filtxt: action.filtxt };
    case 'two':
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
};

const initState = {
  filtxt: ''
};

const Provider = props => {
  const [state, dispatch] = useReducer(reducer, initState);

  return <Context.Provider value={[state, dispatch]}>{props.children}</Context.Provider>;
};

export default Provider;
