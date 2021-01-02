import { CenteredColumn } from 'components/Layouts'
import { BlogSubscribeBox, Feedback } from 'components/Blog'
import { formatDistance } from 'date-fns'

export const PostContainer = ({ title, updatedAt, children }) => {
  return (
    <>
      {/* <SyntaxHighlighter data={post} /> */}

      {/* <GlobalPrismStyles /> */}

      {/* SEO */}

      <CenteredColumn>
        <div className="">
          {/* {post.feature_image && (
            <FeaturedImage
              alt={post.title}
              loading="lazy"
              src={post.feature_image}
            />
          )} */}
          <div className="flex flex-col space-y-3 text-center align-middle">
            <h1 className="font-fira">{title}</h1>
            {/* <p className="p-small">
              Updated {formatDistance(new Date(updatedAt), new Date())} ago
            </p> */}
            <div className="flex space-x-2 font-semibold text-xs uppercase text-gray-800 italic mx-auto">
              <span>April 8, 2020 / </span>
              <span>
                Updated {formatDistance(new Date(updatedAt), new Date())} ago
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 prose lg:prose-lg prose-blue">{children}</div>

        <div className="flex flex-col space-y-8 mt-14">
          <Feedback />
          <BlogSubscribeBox />
        </div>
      </CenteredColumn>
    </>
  )
}
