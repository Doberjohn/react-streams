import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    // renderInput normally takes a formProps object as a parameter.
    // This should normally be renderInput(formProps) {
    // Here we are destructuring the input object out of the formProps object.
    // In essence we are doing something like var { input } = formProps.
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            // Here we are assigning all properties of formProps.input (destructured input)
            // to the input that is being returned. This properties contain value, onChange, onBlur handlers
            // and various other useful stuff for the input.
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" label="Enter title" component={this.renderInput} />
                <Field name="description" label="Enter description" component={this.renderInput} />

                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);