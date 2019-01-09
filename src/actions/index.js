import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREATE_EVENT = 'CREATE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const READ_GROUPS = 'READ_GROUPS'
export const READ_MESSAGES = 'READ_MESSAGES'
export const READ_GROUP = 'READ_GROUP'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

const ROOT_URL2 = 'http://localhost:3100/api'

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch({type: READ_EVENTS, response })
}

export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    dispatch({type: CREATE_EVENT, response })
}

export const putEvent = values => async dispatch => {
    const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
    dispatch({type: UPDATE_EVENT, response })
}

export const getEvent = id => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({ type: READ_EVENT, response })
}

export const deleteEvent = id => async dispatch => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({type: DELETE_EVENT, id })
}

export const readGroups = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL2}/groups${QUERYSTRING}`)
    dispatch({type: READ_GROUPS, response })
}

export const readMessages = id => async dispatch => {
    const response = await axios.get(`${ROOT_URL2}/groups/${id}/messages${QUERYSTRING}`)
    dispatch({ type: READ_MESSAGES, response })
}

export const readGroup = id => async dispatch => {
    const response = await axios.get(`${ROOT_URL2}/groups/${id}${QUERYSTRING}`)
    dispatch({ type: READ_GROUP, response })
}