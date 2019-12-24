import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppThunk } from 'app/store'
import { Student, StudentsState } from './types'

const initialStudentsState: StudentsState = {}

const studentsSlice = createSlice({
	name: 'students',
	initialState: initialStudentsState,
	reducers: {
    add: (state, action: PayloadAction<Student>) => {
      state[action.payload.id] = action.payload
    },

    delete: (state, action: PayloadAction<string>) => {
      delete state[action.payload]
    },

    fetch: (state, action: PayloadAction<void>) => {},
    fetchSuccess: (state, action: PayloadAction<Student>) => {
      state[action.payload.id] = action.payload
    },
    fetchFailure: (state, action: PayloadAction<string>) => {},

    fetchAllSuccess: (state, action: PayloadAction<Student[]>) => {
      return action.payload.reduce((newState: StudentsState, student) => {
        newState[student.id] = student
        return newState
      }, {})
    },
    fetchAllFailure: (state, action: PayloadAction<string>) => {},

    update: (state, action: PayloadAction<Student>) => {
      state[action.payload.id] = action.payload
    }
	}
})

const { fetchAllSuccess, fetchAllFailure } = studentsSlice.actions

export const fetchAll = (): AppThunk => async (dispatch, getState, Api) => {
  try {
    const students = Api.fetchAllStudents()
    dispatch(fetchAllSuccess(students))
  } catch (err) {
    dispatch(fetchAllFailure(err.toString()))
  }
}

export const actions = { ...studentsSlice.actions, fetchAll }

export default studentsSlice.reducer