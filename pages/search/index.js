import React from 'react'
import Head from 'next/head'
import Nav from '../../components/nav'
import styled from 'styled-components'

const NewText = styled.h1`
  text-align: center;
  color: red;
  background-color: blue;
`

const Layout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`

const Column = styled.div`
  margin: 6px;
  padding: 16px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  color: white;
  box-sizing:border-box;
`

const Home = () => (
  <Layout>
    <Column>
      <h1>{"Search for a Developer"}</h1>
    </Column>
    <Column>
      <h1>{"Devs"}</h1>
    </Column>
  </Layout>
)

export default Home