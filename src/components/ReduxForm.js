import TextField from '@material-ui/core/TextField';
import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControlLabel, Radio } from '@material-ui/core';

const style = {
    fontSize: '11px',
    color: 'red',
    textAlign: 'left',
    marginTop: 0,
    marginBottom: 0,
    position: 'relative',

}
export const outLinedTextField = ({
    input,
    label,
    value,
    meta: { touched, error },
    ...custom
}) => (
        <div className="fieldWrapper">
            <TextField
                variant="outlined"
                label={label}
                error={touched && error}
                required={true}
                defaultValue={value}
                style={{ marginBottom: '18px' }}
                {...input}
                {...custom}
            />
            {touched && ((error &&
                <p style={style}>{label} {error}</p>))}
        </div>

    )



export const renderRadioGroup = ({
    input,
    label,
    value,
    id,
    htmlFor,
    name,
    meta: { touched, error },
    children,
    ...custom
}) => (

        <RadioGroup

            value={value}
            error={touched && error}
            {...input}
            onChange={(event, value) => input.onChange(event.target.value)}
            children={children}
            {...custom}
        >
            <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
                labelPlacement="end"
            />
            <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
                labelPlacement="end"
            />
            <FormControlLabel
                value="other"
                control={<Radio color="primary" />}
                label="Other"
                labelPlacement="end"
            />
        </RadioGroup >

    );