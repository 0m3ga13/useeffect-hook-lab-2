import { useEffect, useState } from 'react'
import Form from '../Components/Form/Form'
import UserCard from '../Components/UserCard/UserCard'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [userName, setUserName] = useState('')
  const [data, setData] = useState('')
  const fetchUserData = () => {
    return fetch(`https://api.github.com/users/${userName}`)
      .then(res => res.json())
      .then(data => {
        setUserName(data.login)
        setData(data)
      });
  };
  
  useEffect(() => {
    fetchUserData();
    console.log(userName)
  }, [userName]);
  return (
    <div className="card">
      <Form setUserName={setUserName}/>
      <UserCard data={data}/>
    </div>
  );
}

