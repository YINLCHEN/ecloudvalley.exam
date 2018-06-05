const initialState = {
    pageIndex: 'inbox'
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'CLICK':
            return Object.assign({}, {
                pageIndex: action.pageIndex
            });
        default:
            return state;
    }
}