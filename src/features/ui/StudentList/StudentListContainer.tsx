import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'app/reducer'
import { actions } from 'features/students/slice'
import StudentList from './StudentList'

function StudentListContainer() {
  const studentsState = useSelector((state: RootState) => state.students)
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