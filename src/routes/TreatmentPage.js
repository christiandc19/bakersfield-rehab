import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Treatment from '../components/treatment/Treatment'
import Footer from '../components/footer/Footer'
// import TopBar from '../components/topBar/TopBar'

const TreatmentPage = () => {
    return (
        <>
            {/* <TopBar /> */}
           <Navbar /> 
           <Treatment />
           <Footer />
        </>
    )
}

export default TreatmentPage
