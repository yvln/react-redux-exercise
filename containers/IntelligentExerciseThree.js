import { connect } from 'react-redux';
import ExerciseThree from '../components/ExerciseThree';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        selectedValue: state.exercise3.value,
        allValues: state.exercise3.allValues,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submittedValue: (event) => {
            dispatch(actions.submittedValue(event));
        },
    };
};

const IntelligentExerciseThree = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ExerciseThree);

export default IntelligentExerciseThree;
