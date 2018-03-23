import { Word } from '../types';

const defaultWords: Word[] = [
    { en: 'One', vn: 'Mot', isMemorized: true, _id: 'abcd1' },
    { en: 'Two', vn: 'Hai', isMemorized: false, _id: 'abcd2' },
    { en: 'Three', vn: 'Ba', isMemorized: false, _id: 'abcd3' },
    { en: 'Four', vn: 'Bon', isMemorized: true, _id: 'abcd4' }
]

export function wordsReducer(state = defaultWords, action): Word[] {
    if (action.type === 'ADD_WORD') return [action.word, ...state];
    if (action.type === 'REMOVE_WORD') return state.filter(w => w._id !== action._id);
    if (action.type === 'TOGGLE_WORD') return state.map(w => {
        if (w._id !== action._id) return w;
        return { ...w, isMemorized: !w.isMemorized };
    });
    return state;
}
