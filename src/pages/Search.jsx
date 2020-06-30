import React from 'react'
import CardElement,{CardElementShows} from '../components/CardElement'
import { Container } from '@material-ui/core'

export default function Search(props) {
    return (
        <div>
            <Container style={{ textAlign: "center" }}>
                <h1 style={{textAlign:"left",margin:40}}>Movies</h1>
                {props.movies.map(item => (
                    <CardElement item={item} key={item.id} />
                ))}
                <h1 style={{textAlign:"left",margin:40}}>TV-Shows</h1>
                {props.shows.map(item => (
                    <CardElementShows item={item} key={item.id} />
                ))}
            </Container>
        </div>
    )
}
