import React from 'react'
import { Form, Button, Icon } from "semantic-ui-react"

class SongForm extends React.Component {
  state = { songName: "", artist: "", link: "" };
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state)
    this.setState({ songName: "", artist: "", link: "", })
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Song Name"
            placeholder="Song Name"
            songName="songName"
            value={this.state.songName}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label="Artist"
            placeholder="Artist"
            artist="artist"
            value={this.state.artist}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label="Link"
            placeholder="Paste Link Here"
            link="link"
            value={this.state.link}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button animated color="green">
          <Button.Content visible>Add</Button.Content>
          <Button.Content hidden>
            <Icon name="plus" />
          </Button.Content>
        </Form.Button>
      </Form>
    );
  }
}

export default SongForm
