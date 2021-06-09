import React from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import styled from "styled-components"

const Song = ({ id, songName, artist, link, remove }) => (
  <CardColor>
    <Card as={Transparent}>
      <Card.Content>
        <Card.Header>{songName}</Card.Header>
        <Card.Meta>By: {artist}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            animated
            color="green"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button.Content visible>Play</Button.Content>
            <Button.Content hidden>
              <Icon name="play circle" />
            </Button.Content>
          </Button>

          <Button animated color="red" onClick={() => remove(id)}>
            <Button.Content visible>DELETE</Button.Content>
            <Button.Content hidden>
              <Icon name="trash alternate" />
            </Button.Content>
          </Button>
        </div>
      </Card.Content>
    </Card>
  </CardColor>
);

const CardColor = styled.div`
  background: linear-gradient(to right, #ff6cab, #7366ff);
`;
const Transparent = styled.div`
  background: transparent !important;
`;
export default Song