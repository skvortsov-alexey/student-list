import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from 'app/reducer'

import { actions } from 'features/students/slice'
import StudentList from './StudentList'

function StudentListContainer() {
  const studentsState = useTypedSelector((state) => state.students)
  const students = Object.values(studentsState)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchAll())
  })

  return (
    <StudentList 
      students={students}
      onDelete={(id: string) => dispatch(actions.delete(id))}
    />
  )
}

export default StudentListContainer