import { TimelineEntry } from './Entry'
import { Year2020 } from './2020'
import { Coffee } from 'react-feather'

export * from './Entry'
export * from './BlogPost'

export const Timeline = () => {
  // TODO: I don't think timeline container does anything
  return (
    <div className="flex flex-col w-full timeline-container">
      <Year2020 />
      <TimelineEntry
        title="Work in progress"
        timestamp="More timeline entries coming soon"
        Icon={Coffee}
        divider={false}
      />
    </div>
  )
}
