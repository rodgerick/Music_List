import React from "react"
import { Grid } from "semantic-ui-react"
import Song from './Song'

const Songs = ({ songs, remove }) => (
  <Grid.Column columns='three'>
      {songs.map( song => ( <Song key={song.id} {...song} remove={remove} /> ))}
  </Grid.Column >
);

export default Songs