import React from 'react'
import { Image } from 'antd'
import PageBase from './PageBase'
import picture from '../assets/iiro_kiviluoma.jpg'

const GeneralPage: React.FC = () => (
  <PageBase>
    <Image src={picture} />
    <h1>
      Iiro Kiviluoma
    </h1>
    <p>
      Opiskelen tietotekniikan DI-opintoja Tampereen yliopistossa...
    </p>
  </PageBase>
)

export default GeneralPage
