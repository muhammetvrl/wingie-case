import { client } from '@/src/utils/apolleClient';
import { gql } from '@apollo/client';
import React from 'react'

type Props = {
  employee: {
    id: number,
    name: string,
    age: number,
    gender: string,
    avatar: string,
    birthday: string,
    email: string,
  }
}

const getEmployeesDetail = async () => {
  const { data } = await client.query({
    query: gql`
    query {
      User { 
        id,
        avatar,
        name,
        age, 
        gender,
        birthday,
        email,
        count,
        phone
        address {
          street
          number
          city
          state
          country
        }
       }
      }
    `
  });

  return data;
};

export default async function Detail() {
  const { User } = await getEmployeesDetail();
  
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="text-white w-[600px] py-4 border  rounded-lg shadow bg-gray-800 border-gray-700 cursor-pointer flex flex-col items-center">
        <img width={500} className="p-8 rounded-full" src={User.avatar} alt="product image" />
        <div className="px-5 pb-5 w-full text-center">
          <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{User.name}</h5>
          <ul className='text-white mt-3'>
            <li><b>Age</b> : {User.age}</li>
            <li><b>Gender</b> : {User.gender}</li>
            <li><b>Birthday</b> : {User.birthday}</li>
            <li><b>Email</b> : {User.email}</li>
            <li><b>Birthday</b> : {User.birthday}</li>
            <li><b>Phone</b> : {User.phone}</li>
          </ul>

          <div className='border border-cyan-800 w-auto rounded-md mt-5'>
            <ul>
              <li>Street : {User.address.street}</li>
              <li>number : {User.address.number}</li>
              <li>city : {User.address.city}</li>
              <li>state : {User.address.state}</li>
              <li>country : {User.address.country}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}