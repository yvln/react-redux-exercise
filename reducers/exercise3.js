import actionTypes from '../actions/actionTypes';

const initialState = {
    value: '',
    allValues: [],
};

const submittedValue = (state, action) => { 
    return Object.assign({}, state, {
        value: action.payload.selectedValue,
        allValues: [...state.allValues, action.payload.selectedValue]
    });
};

const exercise3 = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.SUBMITTED_FORM:
      return submittedValue(state, action);
    default:
        return state;
    }
};

export default exercise3;
