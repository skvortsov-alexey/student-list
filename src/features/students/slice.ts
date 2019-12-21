import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

    fetchAll: (state, action: PayloadAction<void>) => {},
    fetchAllSuccess: (state, action: PayloadAction<Student[]>) => {
      state = action.payload.reduce((newState: StudentsState, student: Student) => {
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

export const { actions } = studentsSlice

export default studentsSlice.reducer