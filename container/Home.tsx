"use client";
import EmployeeCard from '@/src/components/EmployeeCard';
import { User } from '@/src/ts/types';
import React, { useEffect, useState } from 'react'

type Props = {
  data: User[]
}

export default function HomeContainer({ data }: Props) {
  const [employees, setEmployees] = useState(data)

  useEffect(() => {
    setEmployees(employees.sort((a, b) => {
      return b.count - a.count;
    }))
  }, [employees])

  return (
    <div className=' flex flex-col gap-5'>
      {employees?.map(employee => (<EmployeeCard  key={employee.id} {...employee} setEmployees={setEmployees} employees={employees} />))}
    </div>
  )
}