import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRootSelector } from 'app/store'

import { deleteStudent, fetchAllStudents, updateStudent } from 'features/students/slice'
import StudentList from './StudentList'

function StudentListContainer() {
  const studentsState = useRootSelector((state) => state.students)
  const students = Object.values(studentsState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllStudents())
  }, [dispatch])

  return (
    <StudentList 
      students={students}
      onDelete={(id) => dispatch(deleteStudent(id))}
      onUpdate={(student) => dispatch(updateStudent(student))}
    />
  )
}

export default StudentListContainer