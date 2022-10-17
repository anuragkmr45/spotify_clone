import React from 'react'

import './Home.css'

import Navbar from '../../Components/Navbar/Navbar'
// import Carousel from '../../Components/Carousel/Carousel'

function Home() {
    return (
        <>
            <section>
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <Navbar />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
