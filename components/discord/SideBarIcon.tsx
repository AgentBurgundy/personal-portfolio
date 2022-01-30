import Link from 'next/link'

export default function SideBarIcon({
  icon,
  url = null,
  text = 'tooltip 💡',
}: any) {
  return (
    <>
      {url && (
        <Link href={url}>
          <a>
            <div className="sidebar-icon group">
              {icon}
              <span className="sidebar-tooltip group-hover:scale-100">
                {text}
              </span>
            </div>
          </a>
        </Link>
      )}
      {!url && (
        <div className="sidebar-icon group">
          {icon}
          <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
        </div>
      )}
    </>
  )
}
