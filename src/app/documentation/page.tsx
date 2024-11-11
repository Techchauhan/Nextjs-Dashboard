import { SingleUserData, UserData } from '@/components/UserData/page'
import React from 'react'

type Props = {}
const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
  };
export default function Dcoumentation({}: Props) {
  return (
    <div>
        <SingleUserData message='This is the Message' name='Rishab chauhan'></SingleUserData>

        <UserData user={user}></UserData>
    </div>
  )
}