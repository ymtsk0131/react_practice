import _ from 'lodash'
import {
    READ_GROUPS,
    READ_GROUP
} from '../actions'

export default ( groups = {}, action) => {
    switch (action.type) {
        case READ_GROUPS:
            return _.mapKeys(action.response.data, 'id')
        case READ_GROUP:
            return action.response.data
        default:
            return groups
    }
}