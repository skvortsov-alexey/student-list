import { Student } from 'features/students/types'

export interface Api {
  addStudent: (student: Student) => void
  deleteStudent: (id: string) => void
  fetchStudent: (id: string) => Student
  fetchAllStudents: () => Student[]
  updateStudent: (student: Student) => void
}

export interface StudentsStorage {
  [id: string]: Student
}