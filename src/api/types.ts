import { Student } from 'features/students/types'

export interface Api {
  addStudent: (student: Student) => Promise<void>
  deleteStudent: (student: Student) => Promise<void>
  fetchStudent: () => Promise<Student>
  fetchAllStudents: () => Promise<Student[]>
  updateStudent: (student: Student) => Promise<void>
}