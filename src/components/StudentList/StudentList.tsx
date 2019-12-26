import React from 'react'

import { Student } from 'features/students/types'
import StudentListItem from './StudentListItem'

interface StudentListProps {
  students: Student[],
  onDelete: (id: string) => void
  onUpdate: (student: Student) => void
}

const StudentList: React.FC<StudentListProps> = ({
  students,
  onDelete,
  onUpdate
}) => (
  <React.Fragment>    
  {
    students.map(student => 
      <StudentListItem 
        key={student.id}
        onDelete={onDelete}
        onUpdate={onUpdate}
        student={student}        
      />
    )
  }
  </React.Fragment>
)

export default StudentList