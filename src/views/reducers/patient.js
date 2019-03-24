import { ACTIONS } from '../actions/patient';

const patients = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_ALL_PATIENTS:
            return { ...state, patients: action.patients }
        default:
            return state;
    }
}

export default patients;