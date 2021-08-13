import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from './styled'

function Matches(props) {

  const [matches, setMatches] = useState([])

  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-barros-lovelace/matches"

  const getMatches = async () => {
    try {
      const response = await axios.get(url)
      setMatches(response.data.matches)
      console.log(matches)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {getMatches()}, [])

  const renderMatches = matches.map((match) => {
    return (
      <li key={match.id}>
        <img src={match.photo} alt={match.name} />
        <p>{match.name}</p>
      </li>
    )
  })

  return (
    <Container>
      <button onClick={props.changePage}>Go Home</button>
      <h1>MatchesPage</h1>
      {renderMatches}
    </Container>
  )
}

export default Matches