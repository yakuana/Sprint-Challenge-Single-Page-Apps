import React from 'react'
import { Card, Icon } from 'semantic-ui-react'; 

export default function EpisodeCard ({episode}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{episode.name}</Card.Header>
        <Card.Meta>{episode.episode}</Card.Meta>
        <Card.Description>
        Air Date: {episode.air_date}
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
          <Icon name='user'/>
          {episode.characters.length} characters
      </Card.Content>
  </Card>
  )
}