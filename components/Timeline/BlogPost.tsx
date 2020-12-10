import Link from 'next/link'
import { ButtonSet, Notes, TimelineEntry } from './Entry'
import { Edit2, Twitter } from 'react-feather'

interface Props {
  slug: string
  title: string
  description: string
  timestamp: string
  divider?: boolean
}

export const BlogPost = ({
  slug,
  title,
  description,
  timestamp,
  divider = true,
}: Props) => (
  <TimelineEntry
    title="Published new post"
    Icon={Edit2}
    timestamp={timestamp}
    divider={divider}
  >
    <Link passHref href={'/posts/' + slug}>
      <a className="px-4 py-3 transition-shadow bg-white rounded-md shadow dark:bg-gray-900 hover:shadow-md">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <p className="font-semibold">{title}</p>
            <p className="font-normal text-tertiary">{description}</p>
          </div>
        </div>
      </a>
    </Link>
  </TimelineEntry>
)
