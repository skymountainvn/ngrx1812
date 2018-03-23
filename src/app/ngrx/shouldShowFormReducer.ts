export function shouldShowFormReducer(state = false, action) {
    if (action.type === 'SHOW_FORM') return true;
    if (action.type === 'HIDE_FORM') return false;
    if (action.type === 'ADD_WORD') return false;
    return state;
}
