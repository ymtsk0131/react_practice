import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
// import { Link } from 'react-router-dom'

import { readMessages } from '../actions'

class MessagesIndex extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.readMessages(id)
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          { _.map(this.props.messages, message => (
            <li key={message.id}>
              {message.name} > {message.content} ({message.created_at})
            </li>
          )) }
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ messages: state.messages })
const mapDispatchToProps = ({ readMessages })

export default connect(mapStateToProps, mapDispatchToProps)(MessagesIndex)