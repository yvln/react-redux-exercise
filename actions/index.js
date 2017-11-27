// Ok, let's say the user started typing something in the input of ExerciseZero
// The onClick function is triggered.
// This one comes from IntelligentExerciseZero
// and it dispatches an action
// This action (changeValue) is defined here
// Meet me in ../reducers/exercise0.js once you've understood this file
import actionTypes from './actionTypes';

// This is a function that creates an action
// it get some data (here an event)
// and then returns an object with a type (mandatory)
// and some other params which will be used inside the reducer
// It's following the FSA convention: https://github.com/acdlite/flux-standard-action#flux-standard-action
export const changeValue = (event) => {
    return {
        type: actionTypes.CHANGE_VALUE,
        payload: {
            newValue: event.target.value,
        },
    };
};

// TODO: IMPLEMENT ME
// I work with /reducers/exercise1.js
export const buttonClicked = (event) => {
  return {
      type: actionTypes.BUTTON_CLICKED,
      payload: {
          buttonWhoGotClickedName: event.target.name,
      },
  };
};

// exercise 2
export const boxTicked = (event) => {
    return {
        type: actionTypes.BOX_TICKED,
        payload: {
            hasTickedBox: event.target.checked,
        },
    };
};

// exercise 3
export const submittedValue = (event) => {
    console.log(event.target.value);
    return {
        type: actionTypes.SUBMITTED_FORM,
        payload: {
            selectedValue: event.target.value,
        },
    };
};
