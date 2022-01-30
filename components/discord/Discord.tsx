import ChannelBar from './ChannelBar'
import ContentContainer from './ContentContainer'
import ProjectOneContainer from './ProjectOneContainer'
import SideBar from './SideBar'

export default function Discord({ project }: any) {
  return (
    <>
      <div className="flex w-screen">
        <SideBar />
        <ChannelBar />
        {!project && <ContentContainer />}
        {project == 1 && <ProjectOneContainer />}
      </div>
    </>
  )
}
