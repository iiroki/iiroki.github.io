import React from 'react'
import { Tabs } from 'antd'
import ParticlesBg from 'particles-bg'
import 'swiped-events/dist/swiped-events.min.js'
import GeneralPage from './components/GeneralPage'
import ExperiencePage from './components/ExperiencePage'
import EducationPage from './components/EducationPage'
import ProjectPage from './components/ProjectPage'
import ContactPage from './components/ContactPage'
import 'antd/dist/antd.css'
import './App.css'

enum Page {
  GENERAL = 'general',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}

enum Localization {
  FI = 'fi',
  EN = 'en'
}

enum SwipeDirection {
  RIGHT,
  LEFT
}

const pages = Object.values(Page)

const App: React.FC = () => {
  const [page, setPage] = React.useState<Page>(Page.GENERAL)
  const [localication, setLocalization] = React.useState<Localization>(Localization.FI) // TODO

  const handleSwipe = (direction: SwipeDirection) => {
    const currentPageIndex = pages.indexOf(page)
    const newPageIndex = currentPageIndex + (direction === SwipeDirection.LEFT ? 1 : -1)
    if (newPageIndex >= 0 && newPageIndex <= pages.length - 1) {
      setPage(pages[newPageIndex])
    }
  }
  
  const setAppHeight = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
  setAppHeight()

  window.addEventListener('swiped-left', () => handleSwipe(SwipeDirection.LEFT))
  window.addEventListener('swiped-right', () => handleSwipe(SwipeDirection.RIGHT))
  window.addEventListener('resize', setAppHeight)

  const getPageComponent = () => {
    switch (page) {
      case Page.GENERAL:
        return <GeneralPage />
      case Page.EXPERIENCE:
        return <ExperiencePage />
      case Page.EDUCATION:
        return <EducationPage />
      case Page.PROJECTS:
        return <ProjectPage />
      case Page.CONTACT:
        return <ContactPage />
      default:
        return null
    }
  }

  return (
    <>
      <Tabs
        size='large'
        centered
        animated
        activeKey={page}
        onChange={key => setPage(key as Page)}
        tabBarStyle={{ backgroundColor: '#1a2f43', color: '#ffffff', height: 50 }}
      >
        <Tabs.TabPane key={Page.GENERAL} tab='Yleistä' />
        <Tabs.TabPane key={Page.EXPERIENCE} tab='Työkokemus' />
        <Tabs.TabPane key={Page.EDUCATION} tab='Koulutus' />
        <Tabs.TabPane key={Page.PROJECTS} tab='Projektit' />
        <Tabs.TabPane key={Page.CONTACT} tab='Yhteystiedot' />
      </Tabs>

      {getPageComponent()}

      <ParticlesBg
        type='cobweb'
        num={50}
        color='#3a668b'
        bg
      />
    </>
  )
}

export default App
