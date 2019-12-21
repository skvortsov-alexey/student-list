export enum AcademicPerformance {
  Unsatisfactory,
  Satisfactory,
  Good,
  Excellent
}

export interface Student {
  id: string
  fullName: string
  birthDate: Date
  academicPerformance: AcademicPerformance
}

export interface StudentsListState {
  [id: string]: Student
}