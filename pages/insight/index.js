import React from 'react'
import Head from 'next/head'
import UserCard from '../../components/userCard'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <UserCard />

  </div>
)

export default Home