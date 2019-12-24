import v4 from 'uuid/v4'

import { Student, AcademicPerformance } from 'features/students/types'
import { StudentsStorage } from './types'

const mockStudents: Student[] = [
  {
    id: v4(),
    fullName: 'James Smith',
    birthDate: new Date(2002, 1, 2),
    academicPerformance: AcademicPerformance.Satisfactory
  },
  {
    id: v4(),
    fullName: 'Maria Garcia',
    birthDate: new Date(2001, 4, 3),
    academicPerformance: AcademicPerformance.Good
  },
  {
    id: v4(),
    fullName: 'Osmond Hawarde',
    birthDate: new Date(2002, 6, 2),
    academicPerformance: AcademicPerformance.Excellent
  },
  {
    id: v4(),
    fullName: 'Robert Johnson',
    birthDate: new Date(2000, 9, 11),
    academicPerformance: AcademicPerformance.Unsatisfactory
  }
]

export const getMockStudentsStorage = (): StudentsStorage => {
  return mockStudents.reduce((storage: StudentsStorage, student) => {
    storage[student.id] = student
    return storage
  }, {})
}

export function studentReviver (key: string, value: any) {
  if (key === 'birthDate') {
    return new Date(value)
  }
  return value
}