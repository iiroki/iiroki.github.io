import React from 'react'
import {
  GithubFilled,
  LinkedinFilled,
  FacebookFilled,
  InstagramFilled
} from '@ant-design/icons'
import { Social } from '../interfaces/Social'

interface SocialBarProps {
  readonly social: Social
}

const SocialBar: React.FC<SocialBarProps> = ({ social }) => (
  <div className='social-bar'>
    {
      social.gitHub && (
        <a
          href={social.gitHub}
          target='_blank'
          rel='noopener noreferrer'
        >
          <GithubFilled className='contact-icon' />
        </a>
      )
    }
    {
      social.linkedIn && (
        <a
          href={social.linkedIn}
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedinFilled className='contact-icon' />
        </a>
      )
    }
    {
      social.facebook && (
        <a
          href={social.facebook}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FacebookFilled className='contact-icon' />
        </a>
      )
    }
    {
      social.instagram && (
        <a
          href={social.instagram}
          target='_blank'
          rel='noopener noreferrer'
        >
          <InstagramFilled className='contact-icon' />
        </a>
      )
    }
  </div>
)

export default SocialBar
