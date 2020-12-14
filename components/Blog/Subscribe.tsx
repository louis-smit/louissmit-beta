import { Input } from 'components/Input'

export const BlogSubscribeBox = () => {
  return (
    <div className="flex flex-col p-4 space-y-3 bg-gray-100 rounded-lg dark:bg-gray-900">
      <h5 className="flex items-center">
        <FollowIcon />
        Follow along
      </h5>
      <p>
        If you want to know about new posts, add your email below.
        Alternatively, you can{' '}
        <a
          href="https://overthought.ghost.io/rss/"
          target="_blank"
          rel="noopener noreferrer"
        >
          subscribe with RSS
        </a>
        .
      </p>
      {/* {status === 'succeeded' ? (
        <p className="p-3 text-center text-white bg-green-500 rounded">
          Thanks for subscribing!
        </p>
      ) */}

      <form className="flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0">
        <label className="flex flex-1">
          <span className="sr-only">Email address</span>
          <Input
            value=""
            disabled={false}
            onChange={() => null}
            placeholder="Email address"
            id="subscribe-email"
            type="email"
            name="email"
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Subscribe
        </button>
      </form>

      {/* {status === 'error' && (
        <p className="p-3 text-center text-white bg-red-500 rounded">
          Error message will go here
        </p>
      )} */}
    </div>
  )
}

const FollowIcon = () => (
  <svg
    className="flex items-center text-gray-900 dark:text-white w-5 mr-3"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)
