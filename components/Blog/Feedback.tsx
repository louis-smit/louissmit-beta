import { Input, Textarea } from 'components/Input'

export const Feedback = () => {
  return (
    <div className="flex flex-col p-4 space-y-2 bg-gray-100 rounded-lg dark:bg-gray-900">
      <h5>
        <FeedbackIcon />
        Feedback
      </h5>
      <p>
        Was anything I wrote confusing, outdated, or incorrect? Please let me
        know! Just write a few words below and I’ll be sure to amend this post
        with your suggestions.
      </p>

      <form className="grid grid-cols-1 space-y-3">
        <input
          type="hidden"
          value={`New comment on Post Title`}
          id="post title"
          name="_subject"
          readOnly
        />
        <label>
          <span className="sr-only">Message</span>
          <Textarea
            // onChange={onChange}
            // value={message}
            id="message"
            name="message"
            placeholder="What should I know?"
          />
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label>
            <span className="sr-only">Email</span>

            <Input
              id="feedback-email"
              name="email"
              placeholder="(Optional) Email"
              type="email"
            />
          </label>
          <label>
            <span className="sr-only">(Optional) Twitter handle</span>

            <Input
              id="twitter"
              name="twitter"
              placeholder="(Optional) Twitter handle"
              type="text"
            />
          </label>
        </div>
        <div className="flex justify-end">
          <button
            className="btn btn-primary"
            // disabled={serverState.submitting || !message}
            type="submit"
          >
            Send feedback
          </button>
        </div>
        {/* {serverState.submitted &&
          (serverState.error ? (
            <p className="p-3 text-white bg-red-500 rounded">
              {serverState.error}
            </p>
          ) : (
            <p className="p-3 text-center text-white bg-green-500 rounded">
              Thanks for taking the time to leave a note!
            </p>
          ))} */}
      </form>
    </div>
  )
}

const FeedbackIcon = () => (
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
      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
    />
  </svg>
)
