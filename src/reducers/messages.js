import _ from 'lodash'
import {
    READ_MESSAGES
} from '../actions'

export default ( messages = {}, action ) => {
    switch (action.type) {
        case READ_MESSAGES:
            return action.response.data
        default:
            return messages
    }
}