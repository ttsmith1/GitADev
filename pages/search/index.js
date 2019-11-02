import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../../components/nav'
import { getUsers } from './getUsers'
import UserCard, { userCard } from '../../components/userCard'
import styled from 'styled-components'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import SimpleMenu from '../../components/dropdown'
import Button from "@material-ui/core/button"

const CardScrollContainer = styled.div`
  display: flex;
  overflow: hidden;
  height: 100vh;
  margin-top: -100px;
  padding-top: 100px;
  position: relative;
  width: 100%;
  backface-visibility: hidden;
  will-change: overflow;
`

const Layout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`

const ScrollSection = styled.div`
  overflow: auto;
  height: auto;
  padding: .5rem;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
`

const Column = styled.div`
  margin: 6px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  box-sizing:border-box;
  max-height: 90vh;
`
const StyledSelect = styled.div`
padding-top: 12px;
`

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { language: '', location: '', experience: 0, users: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const results = await getUsers(this.state.location, this.state.location)
    this.setState({ users: results })
  }

  handleChange = field => event => {
    this.setState({ [field]: event.target.value });
  }

  handleSelect = event => {
    console.log('selector')
    this.setState({ experience: event.target.value })
  }

  render() {
    return (
      <Layout>
        <Column>
          <h1>{"Search for a Developer"}</h1>
          <TextField name="language" label="Programing Language" value={this.state.value} onChange={this.handleChange('language')}></TextField>
          <TextField name="location" label="Location" value={this.state.value} onChange={this.handleChange('location')}></TextField>
          <StyledSelect>
            <InputLabel id="demo-simple-select-label" value={this.state.value} onChange={this.handleChange}>Experience</InputLabel>
          </StyledSelect>

          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={this.state.experience}
            onChange={this.handleSelect}
          >
            <MenuItem value="All">
              {'All'}
            </MenuItem>
            <MenuItem value={1}>{'Beginner'}</MenuItem>
            <MenuItem value={2}>{'Intermediate'}</MenuItem>
            <MenuItem value={3}>{'Advanced'}</MenuItem>
          </Select>
          <Button label="Submit" type="submit" onClick={this.handleSubmit} >Submit</Button>
        </Column>
        <Column>
          <h1>{"Devs"}</h1>
          <CardScrollContainer>
            <ScrollSection>
              {this.state.users.map((user, index) => (
                <UserCard {...this.state.users[index]} />
              ))}
            </ScrollSection>
          </CardScrollContainer>
        </Column>
      </Layout>
    )
  }
}

export default Home