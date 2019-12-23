import { combineReducers } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import students from 'features/students/slice'

const rootReducer = combineReducers({
  students
})

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default rootReducer