export function filterStatusReducer(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_FILTER_STATUS') return action.filterStatus;
    return state;
}
