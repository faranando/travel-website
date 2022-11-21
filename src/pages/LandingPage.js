import React from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import LandingPageData from "../json/landingPage.json"
import MostPicked from '../parts/MostPicked'

export default function LandingPage() {
  return (
    <>
        <Header />
        <Hero data={LandingPageData.hero} refMostPicked="" />
        <MostPicked data={LandingPageData.mostPicked} />
    </>
  )
}
