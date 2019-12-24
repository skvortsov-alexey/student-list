import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import v4 from 'uuid/v4'

import { AppThunk } from 'app/store'
import { Student, StudentDraft, StudentsState } from './types'

const initialStudentsState: StudentsState = {}

const studentsSlice = createSlice({
	name: 'students',
	initialState: initialStudentsState,
	reducers: {
    add: (state, action: PayloadAction<StudentDraft>) => {},
    addSuccess: (state, action: PayloadAction<Student>) => {
      state[action.payload.id] = action.payload
    },
    addFailure: (state, action: PayloadAction<string>) => {},


    delete: (state, action: PayloadAction<string>) => {},
    deleteSuccess: (state, action: PayloadAction<string>) => {
      delete state[action.payload]
    },
    deleteFailure: (state, action: PayloadAction<string>) => {},


    fetchAll: (state, action: PayloadAction<void>) => {},
    fetchAllSuccess: (state, action: PayloadAction<Student[]>) => {
      return action.payload.reduce((newState: StudentsState, student) => {
        newState[student.id] = student
        return newState
      }, {})
    },
    fetchAllFailure: (state, action: PayloadAction<string>) => {},


    update: (state, action: PayloadAction<Student>) => {},
    updateSuccess: (state, action: PayloadAction<Student>) => {
      state[action.payload.id] = action.payload
    },
    updateFailure: (state, action: PayloadAction<string>) => {},
	}
})

const { actions } = studentsSlice

export const addStudent = (studentDraft: StudentDraft): AppThunk => async (dispatch, getState, Api) => {
  try {
    dispatch(actions.add(studentDraft))
    const student = { id: v4(), ...studentDraft }
    Api.addStudent(student)
    dispatch(actions.addSuccess(student))
  } catch (err) {
    dispatch(actions.addFailure(err.toString()))
  }
}

export const deleteStudent = (id: string): AppThunk => async (dispatch, getState, Api) => {
  try {
    dispatch(actions.delete(id))
    Api.deleteStudent(id)
    dispatch(actions.deleteSuccess(id))
  } catch (err) {
    dispatch(actions.deleteFailure(err.toString()))
  }
}

export const fetchAllStudents = (): AppThunk => async (dispatch, getState, Api) => {
  try {
    dispatch(actions.fetchAll())
    const students = Api.fetchAllStudents()
    dispatch(actions.fetchAllSuccess(students))
  } catch (err) {
    dispatch(actions.fetchAllFailure(err.toString()))
  }
}

export const updateStudent = (student: Student): AppThunk => async (dispatch, getState, Api) => {
  try {
    dispatch(actions.update(student))
    Api.updateStudent(student)
    dispatch(actions.updateSuccess(student))
  } catch (err) {
    dispatch(actions.updateFailure(err.toString()))
  }
}

export default studentsSlice.reducer