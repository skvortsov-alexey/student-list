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
    dispatch(actions.loadAll())
  })

  return (
    <StudentList 
      students={students}
      onRemove={(id: string) => dispatch(actions.remove(id))}
    />
  )
}

export default StudentListContainer