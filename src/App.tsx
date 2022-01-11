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
  PROJECTS = 'projects',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  CONTACT = 'contact'
}

const SWIPEABLE_ID = 'swipeable'

const App: React.FC = () => {
  const [page, setPage] = React.useState<Page>(Page.GENERAL)

  // Swipe navigation
  React.useEffect(() => {
    const handleSwipeNext = () => {
      if (page !== Page.CONTACT) {
        setPage(Object.values(Page)[Object.values(Page).indexOf(page) + 1])
      }
    }

    const handleSwipePrev = () => {
      if (page !== Page.GENERAL) {
        setPage(Object.values(Page)[Object.values(Page).indexOf(page) - 1])
      }
    }

    const swipeable = document.getElementById(SWIPEABLE_ID)
    if (swipeable) {
      swipeable.addEventListener('swiped-left', handleSwipeNext)
      swipeable.addEventListener('swiped-right', handleSwipePrev)
      return () => {
        swipeable.removeEventListener('swiped-left', handleSwipeNext)
        swipeable.removeEventListener('swiped-right', handleSwipePrev)
      }
    }
  }, [page])

  // App height
  const setAppHeight = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
  window.addEventListener('resize', setAppHeight)
  setAppHeight()

  const getPageComponent = () => {
    switch (page) {
      case Page.GENERAL:
        return <GeneralPage />
      case Page.PROJECTS:
        return <ProjectPage />
      case Page.EXPERIENCE:
        return <ExperiencePage />
      case Page.EDUCATION:
        return <EducationPage />
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
        <Tabs.TabPane key={Page.PROJECTS} tab='Projektit' />
        <Tabs.TabPane key={Page.EXPERIENCE} tab='Kokemus' />
        <Tabs.TabPane key={Page.EDUCATION} tab='Koulutus' />
        <Tabs.TabPane key={Page.CONTACT} tab='Yhteystiedot' />
      </Tabs>

      <div id={SWIPEABLE_ID}>
        {getPageComponent()}
      </div>

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
