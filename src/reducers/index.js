import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

// sotreで使うためexport
export default combineReducers({ events, form })