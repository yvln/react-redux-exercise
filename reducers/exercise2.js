import actionTypes from '../actions/actionTypes';

const initialState = {
    hasTickedBox: false,
};

const toggleCheck = (state, action) => { 
    return Object.assign({}, state, {
        checked: action.payload.hasTickedBox,
    });
};

const exercise2 = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.BOX_TICKED:
      return toggleCheck(state, action);
    default:
        return state;
    }
};

export default exercise2;
