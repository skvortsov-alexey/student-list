import { combineReducers } from 'redux'

import students from 'features/students/slice'

const rootReducer = combineReducers({
  students
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer