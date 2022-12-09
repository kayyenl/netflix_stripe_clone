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
        isLargeRow
     />
     <Row
        title='ACTION'
        fetchUrl={requests.fetchActionMovies}
     />
     <Row 
        title='COMEDY'
        fetchUrl={requests.fetchComedyMovies}
     />
     <Row 
        title='DOCUMENTARIES'
        fetchUrl={requests.fetchDocumentaries}
     />
    </div>
  )
}

export default HomeScreen