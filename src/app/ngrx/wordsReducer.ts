import { Word } from '../types';

export function wordsReducer(state = [], action): Word[] {
    if (action.type === 'SET_WORDS') return action.words;
    if (action.type === 'ADD_WORD') return [action.word, ...state];
    if (action.type === 'REMOVE_WORD') return state.filter(w => w._id !== action._id);
    if (action.type === 'TOGGLE_WORD') return state.map(w => {
        if (w._id !== action._id) return w;
        return { ...w, isMemorized: !w.isMemorized };
    });
    return state;
}
