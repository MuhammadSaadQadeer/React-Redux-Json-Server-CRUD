import { patientService } from "../../services/patientService";

export const ACTIONS = {
    FETCH_ALL_PATIENTS: 'FETCH_ALL_PATIENTS',
    ADD_PATIENT: 'ADD_PATIENT',
    UPDATE_PATIENT: 'UPDATE_PATIENT',
    DELETE_PATIENT: 'DELETE_PATIENT'
}

function allPatients(payload) {
    return {
        type: ACTIONS.FETCH_ALL_PATIENTS,
        patients: payload
    }
}
export function fetchAllPatients() {
    return (dispatch) => {
        patientService.getAllPatients().then((response) => {
            if (response.ok) {
                response.json().then((patients) => {
                    dispatch(allPatients(patients))
                })
            }
        })
    }
}

export function addPatient(payload) {
    return (dispatch) => {
        patientService.addNewPatient(payload).then((response) => {
            if (response.ok) {
                response.json().then((result) => {

                    dispatch(fetchAllPatients());
                })
            }
        })
    }
}


export function deletePatient(id) {
    return (dispatch) => {
        patientService.deletePatient(id).then((response) => {
            if (response.ok) {
                response.json().then((result) => {

                    dispatch(fetchAllPatients());
                })
            }
        })
    }
}

export function editPatient(payload) {
    return (dispatch) => {
        patientService.editPatient(payload).then((response) => {
            if (response.ok) {
                response.json().then((result) => {

                    dispatch(fetchAllPatients());
                })
            }
        })
    }
}