import { BsGearFill } from 'react-icons/bs'
import { FaDiscord, FaFacebook } from 'react-icons/fa'
import SideBarIcon from './SideBarIcon'

export default function SideBar() {
  return (
    <div
      className="fixed top-0 left-0 flex h-screen w-16 flex-col
  bg-white shadow-lg dark:bg-gray-900"
    >
      <SideBarIcon
        icon={<FaDiscord size="28" />}
        text={`This is not the tooltip you're looking for`}
      />
      <Divider />
      <SideBarIcon
        icon={<FaFacebook size="32" />}
        text={'Navigate to the Facebook Version'}
        url={'/facebook'}
      />
      <Divider />
      <SideBarIcon
        icon={<BsGearFill size="22" />}
        text={`This is not the tooltip you're looking for`}
      />
    </div>
  )
}

const Divider = () => <hr className="sidebar-hr" />
