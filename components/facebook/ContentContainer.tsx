import FBPost from './FBPost'
import OnMind from './OnMind'
import StorySection from './StorySection'

export default function ContentContainer() {
  return (
    <div className="fb-content-container">
      <StorySection />
      <OnMind />
      <FBPost
        username={'Ada'}
        text={`Have you heard about that awesome web dev Ronald Barnhart?`}
      />
      <FBPost text={"OMG yes he's freaking good"} username={'Leon'} />
      <FBPost text={'I heard he copies from SO'} username={'Jill'} />
      <FBPost
        text={"@Jill Everyone does, what's your point?"}
        username={'Ellie'}
      />
      <FBPost
        text={
          'Is it true he made his portfolio site in the style of 2+ different major websites?'
        }
        username={'Chris'}
      />
      <FBPost
        text={
          "@Chris yeah and he's built some cool projects. One of his mobile apps went viral on TikTok. I think it got like 5 million views...something like that"
        }
        username={'Claire'}
      />
      <FBPost
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
        username={'Rebecca'}
      />
      <FBPost text={'@Rebecca bot?'} username={'Albert'} />
      <FBPost
        text={'Just now hearing about this ron guy...'}
        username={'H.U.N.K'}
      />
    </div>
  )
}
