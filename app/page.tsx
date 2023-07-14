/* eslint-disable react-hooks/rules-of-hooks */
import HomeContainer from '@/container/Home';
import { client } from '@/src/utils/apolleClient';
import { gql } from '@apollo/client';

const getEmployees = async () => {
  const { data } = await client.query({
    query: gql`
    query {
      Users{ 
        id,
        avatar,
        name,
        age, 
        gender,
        birthday,
        email,
        count,
       }
      }
    `
  });

  return data;
};

export default async function Home({ }) {
  const employees = await getEmployees();

  return (
    <main className='flex flex-col gap-5 p-20 justify-center items-center w-full'>
      <HomeContainer data={employees.Users} />
    </main>
  )
}
