import dynamic from 'next/dynamic'
import Image from 'next/image'
import projectOneImage from '../../assets/projectone.png'
import { BsPlusCircleFill } from 'react-icons/bs'

const DynamicTopNav = dynamic(() => import('./TopNav'), {
  ssr: false,
})

export default function ContentContainer() {
  return (
    <div className="content-container">
      <DynamicTopNav titleValue="famysh" />
      <div className="content-list">
        <Post
          name="Ron's-Adoring-Fan-8675309"
          timestamp="three months ago"
          text={`Have you heard about Ron's project Famysh? It started off as a web app that went viral on TikTok. After getting 5 million views and 100,000s of users, he made it a mobile app.\n\nIt was made with React Native, React and Firebase! It also uses the Yelp API and the Edamam API to get restuarants and recipes! You can find it here`}
        />
      </div>
      <BottomBar />
    </div>
  )
}

const BottomBar = () => (
  <div className="bottom-bar">
    <PlusIcon />
    <input
      type="text"
      placeholder="Enter message..."
      className="bottom-bar-input"
    />
  </div>
)

const Post = ({ name, timestamp, text }: any) => {
  const seed = Math.round(Math.random() * 100)
  return (
    <div className={'post'}>
      <div className="avatar-wrapper">
        <img
          src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}
          alt=""
          className="avatar"
        />
      </div>

      <div className="post-content">
        <p className="post-owner">
          {name}
          <small className="timestamp">{timestamp}</small>
        </p>
        <p className="post-image">
          <Image src={projectOneImage} height={500} width={500} />
        </p>
        <p className="post-text" style={{ whiteSpace: 'pre-wrap' }}>
          {text}
        </p>
        <p className="post-text">
          <a target="_blank" href="https://famysh.com">
            https://famysh.com
          </a>
        </p>
      </div>
    </div>
  )
}

const PlusIcon = () => (
  <BsPlusCircleFill
    size="22"
    className="dark:text-primary mx-2 text-green-500 dark:shadow-lg"
  />
)
