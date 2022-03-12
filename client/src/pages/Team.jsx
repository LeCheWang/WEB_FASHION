import React from 'react'
import Header from 'components/Header/Header'
import NewBanner from 'components/Banner/NewBanner/NewBanner'
import team from '../assets/images/the-team.jpg'
import TheTeam from 'components/Team/TheTeam/TheTeam'
import New from 'layout/Newsletter/New'
import Footer from 'layout/Footer/Footer'

export default function Team() {
    return (
        <div className="Team">
            <Header/>
            <NewBanner backgroundImg={team} title="The Team"/>
            <TheTeam/>
            <New/>
            <Footer/>
        </div>
    )
}
