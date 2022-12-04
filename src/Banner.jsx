import React from 'react'

function Banner() {
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://i.guim.co.uk/img/media/3dc4c4a74fc8d14db65ff38c7c4b37c48a056c29/111_0_3334_2000/master/3334.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=56b28ce41f141e1818a3a439db8c4dca")`,
        backgroundPosition: "center center",
    }}>
        <div className="banner__contents">
            <h1 className="banner__title">
                The Sopranos
            </h1>
            <div className="banner__buttons">
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className="banner__description">
                This is a test description.
            </h1>
        </div>
        <div className="banner--fadebottom" />
        
    </header>
  )
}

export default Banner