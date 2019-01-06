import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { readGroups } from '../actions'

class GroupsIndex extends Component {
  componentDidMount() {
    this.props.readGroups()
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          { _.map(this.props.groups, group => (
            <li key={group.id}>
              <Link to={`/groups/${group.id}/messages`}>
                {group.name}
              </Link>
            </li>
          )) }
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ groups: state.groups })
const mapDispatchToProps = ({ readGroups })

export default connect(mapStateToProps, mapDispatchToProps)(GroupsIndex)