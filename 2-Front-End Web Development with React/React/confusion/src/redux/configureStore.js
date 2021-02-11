import {createStore } from 'redux';
import { Reducer, initialState, initalState } from './reducer';

export const ConfigureStore = () =>{
    const store =  createStore(
        Reducer,
        initalState
    );

    return store;
}