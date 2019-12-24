import { Student } from 'features/students/types'
import { Api, StudentsStorage } from './types'
import { getMockStudentsStorage, studentReviver } from './utils'

class LocalStorageApi implements Api {
  protected STUDENTS_STORAGE = 'students' 

  constructor() {
    if ( this.studentStorageIsUndefined() ) {
      this.setStudentsStorage( getMockStudentsStorage() )
    }
  }

  protected studentStorageIsUndefined(): boolean {
    return Object.keys(localStorage).indexOf(this.STUDENTS_STORAGE) === -1
  }

  protected getStudentsStorage(): StudentsStorage {
    const json = localStorage.getItem(this.STUDENTS_STORAGE)    
    return json ? JSON.parse(json, studentReviver) : {}
  }

  protected setStudentsStorage(storage: StudentsStorage) {
    localStorage.setItem(this.STUDENTS_STORAGE, JSON.stringify(storage))
  }

  public addStudent(student: Student): void {
    const storage = this.getStudentsStorage()
    storage[student.id] = student
    this.setStudentsStorage(storage)
  }

  public deleteStudent(student: Student): void {
    const storage = this.getStudentsStorage()
    delete storage[student.id]
    this.setStudentsStorage(storage)
  }

  public fetchStudent(id: string): Student {
    const storage = this.getStudentsStorage()
    return storage[id]
  }
  
  public fetchAllStudents(): Student[] {
    const storage = this.getStudentsStorage()
    return Object.values(storage)
  }

  public updateStudent(student: Student): void {
    const storage = this.getStudentsStorage()
    storage[student.id] = student
    this.setStudentsStorage(storage)
  }
}

const api = new LocalStorageApi()

export default api