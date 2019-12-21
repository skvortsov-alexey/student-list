import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Student, StudentsListState } from './types'

const initialStudentsListState: StudentsListState = {}

const studentsSlice = createSlice({
	name: 'students',
	initialState: initialStudentsListState,
	reducers: {
    addStudent: (state, action: PayloadAction<Student>) => {
      state[action.payload.id] = action.payload
    },
    updateStudent: (state, action: PayloadAction<Student>) => {
      state[action.payload.id] = action.payload
    },
    removeStudent: (state, action: PayloadAction<string>) => {
      delete state[action.payload]
    }
	}
})

export const { actions } = studentsSlice

export default studentsSlice.reducer