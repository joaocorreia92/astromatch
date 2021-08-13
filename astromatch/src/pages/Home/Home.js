import React, { useState, useEffect } from 'react'
import {Container} from './styled.js'
import {ProfileImage} from './styled.js'
import axios from 'axios'


function Home(props) {

  const choosePerson = async (choice) => {

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-correia-lovelace/choose-person"
    
    const body = {
      id: props.profile.id,
      choice,
    }

    const headers = {
      headers: {
        ContentType: 'application/json',
      },
    }

    try {
      await axios.post(url, body, { headers })
      props.getProfile()

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Container>
      <button onClick={props.changePage}>Go Match</button>
      <h1>Let's the game begin</h1>
      <ProfileImage src={props.profile.photo}/>
      <h2>{props.profile.name}, {props.profile.age}</h2>
      <p>{props.profile.bio}</p>
      <div>
        <button onClick={() => choosePerson(true)}>Yess</button>
        <button onClick={() => choosePerson(false)}>Nooo</button>
      </div>
    </Container>
  )
}

export default Home