

import React from 'react';
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import { outLinedTextField, renderRadioGroup } from '../../components/ReduxForm';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

const validate = (values) => {

    let errors = {}
    const requiredFields = [
        'name',
        'age',
        'gender',
        'phone',
        'address'
    ]

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'is required'
        }
    })
    return errors
}

class AddPatientForm extends React.Component {



    render() {
        const { classes, handleSubmit, initialValues } = this.props;
        return (
            <form onSubmit={handleSubmit} className={classes.form}>
                <Field
                    name="name"
                    type="text"
                    component={outLinedTextField}
                    label="Paitent Name"
                    fullWidth
                    required={false}

                />


                <Field
                    name="age"
                    type="number"
                    component={outLinedTextField}
                    label="Age"
                    fullWidth
                    required={false}

                />



                <Field
                    name="gender"
                    type="text"
                    component={renderRadioGroup}
                    label="Gender"
                    fullWidth
                    required={false}

                />


                <Field
                    name="phone"
                    type="number"
                    component={outLinedTextField}
                    label="Phone"
                    fullWidth
                    required={false}

                />


                <Field
                    name="address"
                    type="text"
                    component={outLinedTextField}
                    label="Address"
                    fullWidth
                    required={false}

                />


                <Button
                    type="submit"
                    variant="contained"
                    color="primary"

                    className={classes.submit}
                >
                    {initialValues ? 'Update' : 'Submit'}
                </Button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'AddPatientForm', // a unique identifier for this form
    validate,
    enableReinitialize: true,
    destroyOnUnmount: true
})(withStyles(styles)(AddPatientForm));