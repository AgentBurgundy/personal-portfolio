import useDarkMode from '../../hooks/useDarkMode'
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa'

export default function TopNav({ titleValue }: any) {
  if (!titleValue) titleValue = 'cool-web-devs'

  return (
    <div className="top-navigation">
      <HashtagIcon />
      <Title titleValue={titleValue} />
      <ThemeIcon />
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  )
}

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const handleMode = () => setDarkTheme(!darkTheme)
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  )
}

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..." />
    <FaSearch size="18" className="text-secondary my-auto" />
  </div>
)
const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />
const UserCircle = () => (
  <FaUserCircle size="24" className="top-navigation-icon" />
)
const HashtagIcon = () => <FaHashtag size="20" className="title-hashtag" />
const Title = ({ titleValue }: any) => {
  return <h5 className="title-text">{titleValue}</h5>
}
