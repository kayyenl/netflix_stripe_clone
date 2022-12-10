import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import requests from './request'
import Row from './Row'

function HomeScreen() {
  return (
    <div className='homescreen'>

     <Nav />
     <Banner />

     <Row 
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge = {true}
     />
     <Row
        title='Action'
        fetchUrl={requests.fetchActionMovies}
     />
     <Row 
        title='Comedy'
        fetchUrl={requests.fetchComedyMovies}
     />
     <Row 
        title='Documentaries'
        fetchUrl={requests.fetchDocumentaries}
     />
    </div>
  )
}

export default HomeScreen