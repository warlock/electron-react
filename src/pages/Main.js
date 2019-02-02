import React, { Component } from 'react'
import { Box, Text, TextInput, Button } from 'react-desktop/macOs'
import { Link } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <div class="Main">
        Main
        <Box label="Setup your connection" padding="10px 30px" margin="20px">
          <Text>Setup your first server!</Text>
          <TextInput
            label="Hostname:"
            placeholder="Write your server hostname"
            defaultValue=""
            onChange={e => {
              console.log(e.target.value)
            }}
          />
          <TextInput
            label="Port:"
            placeholder="Port server"
            defaultValue=""
            onChange={e => {
              console.log(e.target.value)
            }}
          />
          <Link to="/about">
            <Button>About</Button>
          </Link>
        </Box>
      </div>
    )
  }
}
