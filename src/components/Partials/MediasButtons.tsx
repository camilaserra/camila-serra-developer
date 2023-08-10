import { Icon } from '@iconify/react'
import React from 'react'

export default function MediasButtons() {
  return (
    <div className="media-button-wrapper">
      <div className="flex flex-row gap-1">
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
        <button className="card2 group">
          <a
            href="https://www.linkedin.com/in/camilaserradeveloper/"
            rel="noreferrer"
            target="_blank"
          >
            <Icon
              icon="ic:baseline-whatsapp"
              className="text-2xl text-[#34af23] group-hover:text-white mt-[5px] mr-[8px]"
            />
          </a>
        </button>
      </div>
      <div className="flex flex-row gap-1">
        <a
          href="https://github.com/camilaserra"
          rel="noreferrer"
          target="_blank"
        >
          <button className="card3 group">
            <Icon
              icon="mdi:github"
              className="text-2xl text-black group-hover:text-white mb-[5px] ml-[8px]"
            />
          </button>
        </a>
        <a
          href="https://www.behance.net/camilaserra2"
          rel="noreferrer"
          target="_blank"
        >
          <button className="card4 group">
            <Icon
              icon="ri:behance-fill"
              className="text-2xl text-[#0054f7] group-hover:text-white mb-[5px] mr-[8px]"
            />
          </button>
        </a>
      </div>
    </div>
  )
}
