import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux";
import {createStore} from "redux";


const initionalState = {
    counter: {
        value: 0
    }
};

const reducer = (state = initionalState, action) => {
    switch (action.type) {
        case "INC" : {
            return {
                ...state,
                counter: {
                    value: state.counter.value + 1
                }
            }
        }
        default:
            return state;
    };
};

const store = createStore(reducer);

const INCREMENT_ACTION = {
    type: "INC",
};

store.dispatch(INCREMENT_ACTION)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
