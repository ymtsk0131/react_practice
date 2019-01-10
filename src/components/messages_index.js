import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
// import { Link } from 'react-router-dom'

import { readMessages } from '../actions'
import { readGroup } from '../actions'

class MessagesIndex extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    if (id) {
      this.props.readMessages(id)
      this.props.readGroup(id)
    }
  }

  renderUsers() {
    return _.map(this.props.group.users, user => (
      <span key={user.id}>
        { user.name }
      </span>
    ))
  }

  renderMessages() {
    return _.map(this.props.messages, message => (
      <li key={message.id}>
        {message.name} > {message.content} ({message.created_at})
      </li>
    ))
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <div>グループ名： { this.props.group.name }</div>
            <div>メンバー： { this.renderUsers()}</div>
          </div>
        </div>
        <ul>
          { this.renderMessages() }
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ messages: state.messages, group: state.groups })
const mapDispatchToProps = ({ readMessages, readGroup })

export default connect(mapStateToProps, mapDispatchToProps)(MessagesIndex)