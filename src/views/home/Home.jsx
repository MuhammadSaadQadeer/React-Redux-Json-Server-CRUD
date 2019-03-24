import React from 'react';
import { Grid, Paper, Button, IconButton } from '@material-ui/core';
import { DeleteOutlineOutlined, EditOutlined } from '@material-ui/icons';
import Header from '../header/Header';
import CustomDialog from '../../components/CustomDialog';
import { fetchAllPatients, addPatient, deletePatient, editPatient } from '../actions/patient';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TableCustom from '../../components/TableCustom';
import AddPatientForm from '../patients/AddPatientForm';
import ConfirmationDialog from '../../components/ConfirmationDialog';
class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            openAddPatient: false,
            openDeletePatient: false,
            patient: ''
        }

        //Modals functions
        this.viewAddPatientModal = this.viewAddPatientModal.bind(this);
        this.viewDeletePatientModal = this.viewDeletePatientModal.bind(this);
        this.viewEditPatientModal = this.viewEditPatientModal.bind(this);
        //API calls
        this.submitPatientData = this.submitPatientData.bind(this);
        this.deletePatientData = this.deletePatientData.bind(this);
        // this.editPatientData = this.editPatientData.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchAllPatients())
    }
    submitPatientData(values) {
        if (this.state.editPatientModal) {
            this.props.dispatch(editPatient(values))
            this.viewEditPatientModal();
        } else {
            this.props.dispatch(addPatient(values));
            this.viewAddPatientModal();
        }

    }
    deletePatientData() {
        this.props.dispatch(deletePatient(this.state.patient.id))
        this.viewDeletePatientModal();
    }

    viewDeletePatientModal(patient) {
        this.setState({
            openDeletePatient: !this.state.openDeletePatient,
            patient: patient ? patient : ''
        })
    }

    viewEditPatientModal(patient) {
        this.setState({
            openAddPatient: !this.state.openAddPatient,
            editPatientModal: !this.state.editPatientModal,
            patient: patient ? patient : ''
        })
    }


    viewAddPatientModal() {
        this.setState({
            openAddPatient: !this.state.openAddPatient
        })
    }

    getData() {
        let data = []
        for (let i in this.props.patients) {
            let patient = this.props.patients[i]
            let deleteButton = <IconButton aria-label="Delete" onClick={() => this.viewDeletePatientModal(patient)}>
                <DeleteOutlineOutlined />
            </IconButton>
            let editButton = <IconButton aria-label="Edit" onClick={() => this.viewEditPatientModal(patient)}>
                <EditOutlined />
            </IconButton>
            let actions = (<div>
                {editButton}
                {deleteButton}
            </div>)
            data.push([patient.name, patient.age, patient.gender, patient.phone, patient.address, actions])
        }
        return data;
    }
    render() {
        return (
            <Grid>
                <Header />
                <Paper>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem', padding: 5 }}>
                        <Button onClick={this.viewAddPatientModal} variant="contained" color="primary">Add Patients </Button>
                    </div>
                    <TableCustom
                        tableHead={["Name", "Age", "Gender", "Phone", "Address", "Actions"]}
                        tableData={
                            this.getData()
                        }
                        plain
                        grayRow
                        pagination
                    />
                </Paper>
                {/* Adding Patient Dialog */}
                <CustomDialog
                    maxWidth={"lg"}
                    handleClose={this.viewAddPatientModal}
                    title={this.state.editPatientModal ? "Update Patient" : "Add Patient"}
                    content={<AddPatientForm initialValues={this.state.patient} onSubmit={this.submitPatientData} />}
                    open={this.state.openAddPatient}
                />
                {/* Delet patient modal */}
                <ConfirmationDialog
                    open={this.state.openDeletePatient}
                    dialogTitle={"Delete Patient"}
                    dialogContent={"Are you sure you want to delete " + this.state.patient.name + "'s record ?"}
                    handleFinalApproval={this.deletePatientData}
                    required={false}
                    buttonOneTitle={"Delete"}
                    buttonTwoTitle={"Cancel"}
                    handleClose={this.viewDeletePatientModal}
                />


            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        patients: state.patients.patients
    }
}

export default withRouter(connect(mapStateToProps)(Home))
