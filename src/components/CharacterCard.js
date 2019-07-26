import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'; 

export default function CharacterCard ({character}) {
  return (
    <Card>
      <Image src={character.image} wrapped ui={false} />

      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>{character.species} {character.status}</Card.Meta>
        <Card.Description>
          Location: {character.location.name}{"\n"}
          Origin: {character.origin.name}
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
          <Icon name='user'/>
          Episodes 
      </Card.Content>
  </Card>
  )
}
