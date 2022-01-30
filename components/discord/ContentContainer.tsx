import dynamic from 'next/dynamic'
import { BsPlusCircleFill } from 'react-icons/bs'

const DynamicTopNav = dynamic(() => import('./TopNav'), {
  ssr: false,
})

export default function ContentContainer() {
  return (
    <div className="content-container">
      <DynamicTopNav />
      <div className="content-list">
        <Post
          name="Ada"
          timestamp="one week ago"
          text={`Have you heard about that awesome web dev Ronald Barnhart?`}
        />
        <Post
          name="Leon"
          timestamp="one week ago"
          text={`OMG yes he's freaking good`}
        />
        <Post
          name="Jill"
          timestamp="one week ago"
          text={`I heard he copies from SO`}
        />
        <Post
          name="Ellie"
          timestamp="one week ago"
          text={`@Jill Everyone does, what's your point?`}
        />
        <Post
          name="Chris"
          timestamp="one week ago"
          text={`Is it true he made his portfolio site in the style of 2+ different major websites?`}
        />
        <Post
          name="Claire"
          timestamp="one week ago"
          text={`@Chris yeah and he's built some cool projects. One of his mobile apps went viral on TikTok. I think it got like 5 million views...something like that`}
        />
        <Post
          name="Rebecca"
          timestamp="one week ago"
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
        />
        <Post name="Albert" timestamp="one week ago" text={`@Rebecca bot?`} />
        <Post
          name="H.U.N.K"
          timestamp="Just now"
          text={`Just now hearing about this ron guy...`}
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
        <p className="post-text">{text}</p>
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
