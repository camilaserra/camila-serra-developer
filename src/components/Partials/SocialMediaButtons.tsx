import { Icon } from '@iconify/react'
import React from 'react'

export default function SocialMediaButtons() {
  return (
    <div className="fixed bottom-32 md:bottom-12 right-12 z-50">
      <a
        href="https://www.linkedin.com/in/camilaserradeveloper/"
        rel="noreferrer"
        target="_blank"
      >
        <Icon
          icon="ri:linkedin-fill"
          className="text-5xl text-brand-purple-50 mb-4"
        />
      </a>
      <a href="https://github.com/camilaserra" rel="noreferrer" target="_blank">
        <Icon
          icon="mdi:github"
          className="text-5xl text-brand-purple-50 mb-4"
        />
      </a>
      <a
        href="https://www.behance.net/camilaserra2"
        rel="noreferrer"
        target="_blank"
      >
        <Icon
          icon="ri:behance-fill"
          className="text-5xl text-brand-purple-50"
        />
      </a>
    </div>
  )
}
