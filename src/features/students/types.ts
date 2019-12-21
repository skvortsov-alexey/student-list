export enum AcademicPerformance {
  Unsatisfactory = 2,
  Satisfactory = 3,
  Good = 4,
  Excellent = 5
}

export interface Student {
  id: string
  fullName: string
  birthDate: Date
  academicPerformance: AcademicPerformance
}

export interface StudentsState {
  [id: string]: Student
}