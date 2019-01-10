import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'
import groups from './groups'
import messages from './messages'

export default combineReducers({ events, groups, messages, form })