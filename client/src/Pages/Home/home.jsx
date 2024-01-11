import React from 'react'
import { Helmet } from 'react-helmet-async'
import Floral from '../../Components/Floral/floral'
import Ourmis from '../../Components/OurMission/ourmis'
import Devoted from '../../Components/Devoted/devoted'
import Ourteam from '../../Components/OurTeam/ourteam'

function Home() {
    return (
        <>
        <Helmet>
            <title>
                Home Page
            </title>
        </Helmet>
            <div>
                <Floral/>
                <Ourmis/>
                <Devoted/>
                <Ourteam/>
            </div>
        </>
    )
}

export default Home