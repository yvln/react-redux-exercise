import { connect } from 'react-redux';
import ExerciseZero from '../components/ExerciseZero';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        value: state.exercise3.value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (event) => {
            dispatch(actions.submittedValue(event));
        },
    };
};

const IntelligentExerciseZero = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ExerciseZero);

export default IntelligentExerciseZero;
