import { useState } from 'react'
import { BsHash } from 'react-icons/bs'
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa'
import Link from 'next/link'
import { AiFillLock } from 'react-icons/ai'

const topics = [{ name: 'cool-web-devs', url: '/discord', locked: false }]
const random = [
  { name: 'hire-me?', url: '', locked: true },
  { name: 'please', url: '', locked: true },
]
const projects = [
  { name: 'famysh', url: '/discord/projects/famysh', locked: false },
]

export default function ChannelBar() {
  return (
    <div className="channel-bar shadow-lg">
      <ChannelBlock />
      <div className="channel-container">
        <Dropdown header="Topics" selections={topics} />
        <Dropdown header="Random" selections={random} />
        <Dropdown header="Projects" selections={projects} />
      </div>
    </div>
  )
}

const Dropdown = ({ header, selections }: any) => {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="dropdown">
      <div onClick={() => setExpanded(!expanded)} className="dropdown-header">
        <ChevronIcon expanded={expanded} />
        <h5
          className={
            expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'
          }
        >
          {header}
        </h5>
        <FaPlus
          size="12"
          className="text-accent my-auto ml-auto text-opacity-80"
        />
      </div>
      {expanded &&
        selections &&
        selections.map((selection: any) => (
          <TopicSelection selection={selection} />
        ))}
    </div>
  )
}

const ChevronIcon = ({ expanded }: any) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1'
  return expanded ? (
    <FaChevronDown size="14" className={chevClass} />
  ) : (
    <FaChevronRight size="14" className={chevClass} />
  )
}

const TopicSelection = ({ selection }: any) => (
  <Link href={selection.url}>
    <a>
      <div className="dropdown-selection">
        <BsHash size="24" className="text-gray-400" />
        <h5 className="dropdown-selection-text">{selection.name}</h5>
        {selection.locked && (
          <AiFillLock size={12} style={{ color: '#686e7c' }} />
        )}
      </div>
    </a>
  </Link>
)

const ChannelBlock = () => (
  <div className="channel-block">
    <h5 className="channel-block-text">Channels</h5>
  </div>
)
