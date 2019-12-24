export enum Grade {
  Unsatisfactory = 1,
  Satisfactory,
  Good,
  Excellent,
}

export interface Student {
  id: string
  fullName: string
  birthDate: Date
  grade: Grade
}

export type StudentDraft = Omit<Student, 'id'>

export interface StudentsState {
  [id: string]: Student
}