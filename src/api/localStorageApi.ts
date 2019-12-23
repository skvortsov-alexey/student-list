import { Api } from './types'
import { Student } from 'features/students/types'

interface StudentsStorage {
  [id: string]: Student
}

class LocalStorageApi implements Api {
  protected STUDENTS_STORAGE = 'students' 

  protected getStudentsStorage(): StudentsStorage {
    const json = localStorage.getItem(this.STUDENTS_STORAGE)    
    return json ? JSON.parse(json) : {}
  }

  protected setStudentsStorage(storage: StudentsStorage) {
    localStorage.setItem(this.STUDENTS_STORAGE, JSON.stringify(storage))
  }

  addStudent(student: Student): void {
    const storage = this.getStudentsStorage()
    storage[student.id] = student
    this.setStudentsStorage(storage)
  }

  deleteStudent(student: Student): void {
    const storage = this.getStudentsStorage()
    delete storage[student.id]
    this.setStudentsStorage(storage)
  }

  fetchStudent(id: string): Student {
    const storage = this.getStudentsStorage()
    return storage[id]
  }
  
  fetchAllStudents(): Student[] {
    const storage = this.getStudentsStorage()
    return Object.values(storage)
  }

  updateStudent(student: Student): void {
    const storage = this.getStudentsStorage()
    storage[student.id] = student
    this.setStudentsStorage(storage)
  }
}

export default LocalStorageApi