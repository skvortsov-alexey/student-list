import { Api } from './types'
import { Student } from 'features/students/types'

class LocalStorageApi implements Api {
  addStudent(student: Student): Promise<void> {
    return new Promise<void>((resolve, reject) => {})
  }

  deleteStudent(student: Student): Promise<void> {
    return new Promise<void>((resolve, reject) => {})
  }

  fetchStudent(): Promise<Student> {
    return new Promise<Student>((resolve, reject) => { })
  }
  
  fetchAllStudents(): Promise<Student[]> {
    return new Promise<Student[]>((resolve, reject) => {})
  }

  updateStudent(student: Student): Promise<void> {
    return new Promise<void>((resolve, reject) => {})
  }
}

export default LocalStorageApi