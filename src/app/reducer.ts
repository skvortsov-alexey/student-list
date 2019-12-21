import { combineReducers } from 'redux'

import students from 'features/students/slice'

const rootReducer = combineReducers({
  students
})

export default rootReducer