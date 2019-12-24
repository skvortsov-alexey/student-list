import v4 from 'uuid/v4'

import { Student, Grade } from 'features/students/types'
import { StudentsStorage } from './types'

const mockStudents: Student[] = [
  {
    id: v4(),
    fullName: 'James Smith',
    birthDate: new Date(2002, 1, 2),
    grade: Grade.Satisfactory
  },
  {
    id: v4(),
    fullName: 'Maria Garcia',
    birthDate: new Date(2001, 4, 3),
    grade: Grade.Good
  },
  {
    id: v4(),
    fullName: 'Osmond Hawarde',
    birthDate: new Date(2002, 6, 2),
    grade: Grade.Excellent
  },
  {
    id: v4(),
    fullName: 'Robert Johnson',
    birthDate: new Date(2000, 9, 11),
    grade: Grade.Unsatisfactory
  },
  {
    id: v4(),
    fullName: 'Bob Taylor',
    birthDate: new Date(2003, 3, 4),
    grade: Grade.Good
  },
  {
    id: v4(),
    fullName: 'Linda Turner',
    birthDate: new Date(2002, 5, 2),
    grade: Grade.Excellent
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