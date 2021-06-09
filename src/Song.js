import React from "react";
import { Button, Table } from "semantic-ui-react";

const Song = ({ id, songName, artist, link, remove }) => (
  <Table.Row>
    <Table.Cell>{songName}</Table.Cell>
    <Table.Cell>{artist}</Table.Cell>
      <Table.Cell>
        <Button>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Play
          </a>
        </Button>
        <Button color="red" onClick={() => remove(id)}>Delete</Button>
      </Table.Cell>
    </Table.Row>
)
export default Song