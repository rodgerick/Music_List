import React, { Component } from "react";
import "./App.css";
import { Container, Header, Button, Icon, Segment } from "semantic-ui-react";
import Songs from "./Songs";
import SongForm from "./SongForm"
class App extends Component {
  state = {
    songs: [
      {
        id: 1,
        songName: "Daddy",
        artist: "Tiny Meat Gang",
        link: "https://www.youtube.com/watch?v=CdiNxmWO4Dw",
      },
      {
        id: 2,
        songName: "Piano Man",
        artist: "Billy Joel",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        id: 3,
        songName: "Sunflower",
        artist: "Post Malone, Swae Lee",
        link: "https://www.youtube.com/watch?v=ApXoWvfEYVU",
      },
      {
        id: 4,
        songName: "That One Cat song",
        artist: "2011 Internet",
        link: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
      },
      {
        id: 5,
        songName: "The Most Annoying Sound in The World",
        artist: "Unknown",
        link: "https://www.youtube.com/watch?v=0cVlTeIATBs",
      },
    ], showForm: true,
  };

  toggleForm = () => this.setState({ showForm: !this.state.showForm})

  getId = () => {
    return Math.floor((1 + Math.random()) * 1000)
  }
  
  addSong = (songData) => {
    let song = { id: this.getId(), ...songData, }
    this.setState({ songs: [song, ...this.state.songs], })
  }
  removeSong = (id) => {
    const songs = this.state.songs.filter(song => {
      if (song.id !== id)
        return song
    })
    this.setState({ songs: [...songs], })
  }

  render() {
    return (
      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1"> Music List </Header>
        <br />
        <Segment basic>
          <Button icon color="black" onClick={this.toggleForm}>
            <Icon name={this.state.showForm ? 'angle double up' : 'angle double down'} />
          </Button>
          {this.state.showForm ? <SongForm add={this.addSong} /> : null}
        </Segment>
        <br />
        <Songs songs={this.state.songs} remove={this.removeSong} />
      </Container>
    );
  }
}

export default App;
