import React from 'react'
import { Tabs } from 'antd'
import ParticlesBg from 'particles-bg'
import GeneralPage from './components/GeneralPage'
import ExperiencePage from './components/ExperiencePage'
import EducationPage from './components/EducationPage'
import ProjectPage from './components/ProjectPage'
import ContactPage from './components/ContactPage'
import 'antd/dist/antd.css'
import './App.css'

enum Page {
  GENERAL = 'genneral',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}

const App: React.FC = () => {
  const [page, setPage] = React.useState<Page>(Page.GENERAL)

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
        tabBarStyle={{ backgroundColor: 'white' }}
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
        num={200}
        color='#000000'
        bg
      />
    </>
  )
}

export default App