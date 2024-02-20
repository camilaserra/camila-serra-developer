import { Icon } from '@iconify/react'
import React from 'react'

export default function MediasButtons() {
  return (
    <div className="media-button-wrapper">
      <div className="flex flex-col gap-1">
        <a
          href="https://www.linkedin.com/in/camilaserradeveloper/"
          rel="noreferrer"
          target="_blank"
        >
          <button className="card1 group">
            <Icon
              icon="ri:linkedin-fill"
              className="text-2xl text-[#0e76a8] group-hover:text-white mt-[5px] ml-[5px]"
            />
          </button>
        </a>
      </div>
      <div className="flex flex-row gap-1">
        <a
          href="https://github.com/camilaserra"
          rel="noreferrer"
          target="_blank"
        >
          <button className="card2 group">
            <Icon
              icon="mdi:github"
              className="text-2xl text-black group-hover:text-white mb-[5px] ml-[8px]"
            />
          </button>
        </a>
      </div>
    </div>
  )
}
