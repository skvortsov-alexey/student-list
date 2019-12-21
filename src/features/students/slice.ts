import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Student, StudentsState } from './types'

const initialStudentsListState: StudentsState = {}

const studentsSlice = createSlice({
	name: 'students',
	initialState: initialStudentsListState,
	reducers: {
    add: (state, action: PayloadAction<Student>) => {
      state[action.payload.id] = action.payload
    },

    load: (state, action: PayloadAction<void>) => {},
    loadSuccess: (state, action: PayloadAction<Student>) => {
      state[action.payload.id] = action.payload
    },
    loadFailure: (state, action: PayloadAction<string>) => {},

    loadAll: (state, action: PayloadAction<void>) => {},
    loadAllSuccess: (state, action: PayloadAction<Student[]>) => {
      state = action.payload.reduce((newState: StudentsState, student: Student) => {
        newState[student.id] = student
        return newState
      }, {})
    },
    loadAllFailure: (state, action: PayloadAction<string>) => {},
    
    
    remove: (state, action: PayloadAction<string>) => {
      delete state[action.payload]
    },
    update: (state, action: PayloadAction<Student>) => {
      state[action.payload.id] = action.payload
    }
	}
})

export const { actions } = studentsSlice

export default studentsSlice.reducer