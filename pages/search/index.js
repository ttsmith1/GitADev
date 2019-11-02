import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../../components/nav'
import { getUsers } from './getUsers'
import styled from 'styled-components'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import SimpleMenu from '../../components/dropdown'
import Button from "@material-ui/core/button"

const Layout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
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
`

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { language: '', location: '', experience: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    getUsers()
    e.preventDefault();
  }

  handleChange = field => event => {
    this.setState({ [field]: event.target.value });
  }

  render() {
    return (
      <Layout>
        <Column>
          <h1>{"Search for a Developer"}</h1>
          <TextField name="language" label="Programing Language" value={this.state.value} onChange={this.handleChange('language')}></TextField>
          <TextField name="location" label="Location" value={this.state.value} onChange={this.handleChange('location')}></TextField>
          <InputLabel id="demo-simple-select-label" value={this.state.value} onChange={this.handleChange}>Experience</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={''}
            onChange={'handleChange'}
          >
            {/* <MenuItem value="dsfgdfg">
          <em>None</em>
        </MenuItem> */}
            <MenuItem>{'Beginner'}</MenuItem>
            <MenuItem>{'Intermediate'}</MenuItem>
            <MenuItem>{'Advanced'}</MenuItem>
          </Select>
          <Button label="Submit" type="submit" onClick={this.handleSubmit} >Submit</Button>
        </Column>
        <Column>
          <h1>{"Devs"}</h1>
        </Column>
      </Layout>
    )
  }
}

export default Home