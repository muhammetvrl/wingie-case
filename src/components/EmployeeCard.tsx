/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { User } from '../ts/types';

export interface IProps {
  id: number,
  avatar: string,
  name: string,
  age: number,
  gender: string,
  birthday: string,
  email: string,
  count: number,
  setEmployees: (data: User[]) => void;
  employees: User[]
}

function EmployeeCard({ avatar, name, gender, age, birthday, email, count, id, employees, setEmployees }: IProps) {
  const router = useRouter();


  const decrement = (id: number) => {
    const index: number = employees.findIndex(employee => employee.id === id)
    const temp = [...employees]
    temp[index].count -= 1

    if (temp[index].count !== -1) {
      if (index !== -1) {
        setEmployees(temp.sort((a, b) => {
          return b.count - a.count;
        }))
      }
    } else {
      temp[index].count = 0
    }
  }

  const increment = (id: number) => {
    const index: number = employees.findIndex(employee => employee.id === id)
    const temp = [...employees]
    temp[index].count += 1

    if (index !== -1) {
      setEmployees(temp.sort((a, b) => {
        return b.count - a.count;
      }))
    }
  }

  return (
    <div className="w-[600px] py-4 border  rounded-lg shadow bg-gray-800 border-gray-700 flex justify-between">
      <img width={200} className="p-8 rounded-full" src={avatar} alt="product image" />
      <div className="px-5 pb-5 w-[60%]">
        <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white cursor-pointer underline" onClick={() => router.push("/detail")}>{name}</h5>
        <ul className='text-white mt-3'>
          <li><b>Age</b> : {age}</li>
          <li><b>Gender</b> : {gender}</li>
          <li><b>Birthday</b> : {birthday}</li>
          <li><b>Email</b> : {email}</li>
        </ul>
        <div className="w-32 mt-5">
          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button onClick={() => decrement(id)} data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700" name="custom-input-number" value={count}></input>
            <button onClick={() => increment(id)} data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard