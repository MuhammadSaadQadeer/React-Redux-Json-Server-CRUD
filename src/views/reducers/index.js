import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import patients from './patient';


const reducers = combineReducers({
    form: formReducer,
    patients: patients
})

const rootReducer = (state, action) => {
    return reducers(state, action)
}

export default rootReducer