import _ from 'lodash'
import {
    READ_GROUPS
} from '../actions'

export default ( groups = {}, action) => {
    switch (action.type) {
        case READ_GROUPS:
            return _.mapKeys(action.response.data, 'id')
        default:
            return groups
    }
}