import {useRef} from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import LandingPageData from "../json/landingPage.json"
import MostPicked from '../parts/MostPicked'
import Categories from '../parts/Categories'

export default function LandingPage() {

  const mostPickedSection = useRef()

  return (
    <>
        <Header />
        <Hero data={LandingPageData.hero} refMostPicked={mostPickedSection} />
        <MostPicked data={LandingPageData.mostPicked} mostPickedSection={mostPickedSection}/>
        <Categories data={LandingPageData.categories}/>
    </>
  )
}
