export const patientService = {
    getAllPatients,
    addNewPatient,
    deletePatient,
    editPatient
}

async function getAllPatients() {
    let config = {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    };
    console.log(process.env);

    return await fetch(process.env.REACT_APP_BACKEND_API_URL + "/patients", config);
}

async function addNewPatient(payload) {

    let config = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(payload)
    };
    return await fetch(process.env.REACT_APP_BACKEND_API_URL + "/patients", config);
}

async function deletePatient(id) {
    let config = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: "same-origin"
    };
    return fetch(process.env.REACT_APP_BACKEND_API_URL + "/patients/" + id, config);
}

async function editPatient(payload) {
    let config = {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(payload)
    };
    return await fetch(process.env.REACT_APP_BACKEND_API_URL + "/patients/" + payload.id, config);
}

