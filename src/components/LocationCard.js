import React from 'react'
import { Card } from 'semantic-ui-react'; 

export default function LocationCard ({ name, type, dimension, residents }) {
  return (
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>

          <Card.Description>
          {type} - {dimension}
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          {residents.length} residents
        </Card.Content>
    </Card>
  )
}
