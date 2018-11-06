import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

// import { postEvent } from '../actions'

class EventsNew extends Component {
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  render() {
    return (
      <form>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <div>
          <input type="submit" value="submit" disabled={false} />
          <Link to="/">Cancel</Link>
        </div>
      </form>
      )
  }
}

const validate = values => {
  const errors = {}

  if(!values.title) errors.title = "Enter a title, please!"
  if(!values.body) errors.body = "Enter a body, please!"
  return errors
}

// const mapDispatchToProps = ({ postEvents })

export default connect(null, null)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
