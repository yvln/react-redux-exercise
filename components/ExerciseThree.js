import React, { Component, PropTypes } from 'react';

const propTypes = {
    selectedValue: PropTypes.string.isRequired,
    submittedValue: PropTypes.func.isRequired,
    allValues: PropTypes.array,
};

// This component should stay "dumb" (i.e. stateless)
// It should not have it's own state and should only use props
const ExerciseThree = ({ selectedValue, submittedValue, allValues }) => {
  
  const displayAllValues = () => {
    return allValues.map(e => {
      return(
        <li>{e}</li>
      )
    });
  }
  
  return(
    <div>
        <h1>Exercise 3</h1>
        <div style={{ marginBottom: '10px' }}>
            <i>
                Build me from scratch!<br />
                I need to be a select field which will display the new selected value<br />
                BONUS POINT: and the previous selected value ;)
            </i>
        </div>
        <div style={{ marginBottom: '5px' }}>
            {`You clicked on: ${selectedValue}`}
        </div>
        <div style={{ marginBottom: '5px' }}>
            This is the history of your choices:
            <ul>
             {displayAllValues()}
            </ul>
        </div>
        <div>
          <form>
            <select onChange={ submittedValue } name="cars">
              <option value="Volvo XC90">Volvo XC90</option>
              <option value="Saab 95">Saab 95</option>
              <option value="Mercedes SLK">Mercedes SLK</option>
              <option value="Audi TT">Audi TT</option>
            </select>
          </form>
        </div>
    </div>
  )
  
};

ExerciseThree.propTypes = propTypes;

export default ExerciseThree;
