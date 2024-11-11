import React from 'react';

type Props = {
  message: string; 
  name: String;
};

const SingleUserData = ({ message, name }: Props) => {  // Destructuring ke through message prop ko directly le liya
  return (
    <div>
      <h1>User Data</h1>
      <h2>{name}</h2>
      <p>{message}</p>  {/* props.message ko render kar rahe hain */}
    </div>
  );
};

 

//This page is call into the Documentation.


// ------------------------------

type User = {
    user: {
        name: String,
        age: number,
        email: String
    }
}

const UserData = ({user}:User)=>{
    return(
        <div>
            <h1>User Data is Showing Below.</h1>

            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.age}</li>
        </div>
    );
}
export  {UserData, SingleUserData}