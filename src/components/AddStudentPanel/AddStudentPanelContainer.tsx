import React from 'react'
import { useDispatch } from 'react-redux'

import { addStudent } from 'features/students/slice'
import AddStudentPanel from './AddStudentPanel'

interface AddStudentPanelContainerProps {
  onClose: () => void
}

function AddStudentPanelContainer({ onClose }: AddStudentPanelContainerProps) {
  const dispatch = useDispatch()

  return (
    <AddStudentPanel      
      onAdd={studentDraft => dispatch(addStudent(studentDraft))}
      onClose={onClose}
    />
  )
}

export default AddStudentPanelContainer