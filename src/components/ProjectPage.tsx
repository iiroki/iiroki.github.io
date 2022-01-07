import React from 'react'
import { Card } from 'antd'
import PageBase from './PageBase'
import rasputin from '../assets/rasputin.png'

const ProjectPage: React.FC = () => (
  <PageBase>
    <Card
      title='Rasputin'
      cover={<img src={rasputin} alt='Rasputin-teekkarilaulukirja'/>}
      hoverable
      style={{ width: 240 }}
    >
      Rasputin-teekkarilaulukirja...
    </Card>
  </PageBase>
)

export default ProjectPage
