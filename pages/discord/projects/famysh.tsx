import Discord from '../../../components/discord/Discord'

export default function ProjectOne() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Discord project={1} />
      </div>
    </>
  )
}
