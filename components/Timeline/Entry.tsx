import { ReactChild, ElementType } from 'react'

interface TimelineEntryProps {
  children?: ReactChild | ReactChild[]
  title: string
  timestamp?: string
  Icon: ElementType
  tint?: string
  divider?: boolean
}

export const TimelineEntry = ({
  children = null,
  title,
  timestamp,
  Icon,
  tint = 'gray',
  divider = true,
}: TimelineEntryProps) => {
  // TODO: I don't think timeline-item doesa anything
  return (
    <div className="flex mb-12 timeline-item">
      {/* Icon & divider */}
      <div className="flex flex-col items-center">
        <div
          className={`flex justify-center p-3 rounded-full align-center border-4 border-gray-50 dark:border-gray-1000 ${getTint(
            tint
          )}`}
        >
          <Icon size={16} />
        </div>
        {/* TODO: unused class timeline stroke */}
        {divider && (
          <div className="flex-1 w-px -mb-12 bg-gray-200 md:-mb-12 dark:bg-gray-800 timeline-stroke" />
        )}
      </div>
      <div className="flex flex-col ml-4 flex-1 space-y-4">
        <div className="flex flex-col pt-1 content-center">
          <span className="font-medium text-primary">{title}</span>
          {timestamp && (
            <span className="text-sm text-tertiary">{timestamp}</span>
          )}
        </div>
        <div className="flex flex-col space-y-4 timeline-full-width">
          {children}
        </div>
      </div>
    </div>
  )
}

interface DateEntryProps {
  title: string
}

export const DateEntry = ({ title }: DateEntryProps) => (
  <div className="flex items-center mb-8 timeline-item">
    {/* Blank padding */}
    <div className="w-12 mr-4 timeline-stroke" />
    {/* Center title */}
    {/* <div className="w-12 mr-4 bg-gray-200 dark:bg-gray-800 timeline-stroke flex-1 h-px" /> */}
    <p className="text-lg font-bold">{title}</p>
    <div className="flex-1 h-px ml-4 bg-gray-200 dark:bg-gray-800 timeline-stroke" />
  </div>
)

export const Notes = ({ children }) => (
  <div className="-mt-2 prose timeline-inset prose-md">{children}</div>
)

export const ButtonSet = ({ children }) => (
  <div className="flex flex-wrap space-y-3 md:space-y-0 md:space-x-3 timeline-inset">
    {children}
  </div>
)

const getTint = (color: string) => {
  switch (color) {
    case 'red':
      return 'text-red-800 dark:text-red-200 bg-red-500 bg-opacity-20'
    case 'blue':
      return 'text-blue-800 dark:text-blue-200 bg-blue-500 bg-opacity-20'
    case 'green':
      return 'text-green-800 dark:text-green-200 bg-green-500 bg-opacity-20'
    case 'purple':
      return 'text-purple-800 dark:text-purple-200 bg-purple-500 bg-opacity-20'
    case 'indigo':
      return 'text-indigo-800 dark:text-indigo-200 bg-indigo-500 bg-opacity-20'
    case 'pink':
      return 'text-pink-800 dark:text-pink-200 bg-pink-500 bg-opacity-20'
    case 'yellow':
      return 'text-yellow-800 dark:text-yellow-200 bg-yellow-500 bg-opacity-20'
    case 'gray':
    default:
      return 'text-primary bg-gray-200 dark:bg-gray-800'
  }
}
