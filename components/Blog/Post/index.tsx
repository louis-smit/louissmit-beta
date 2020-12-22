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
        <div>
          {/* {post.feature_image && (
            <FeaturedImage
              alt={post.title}
              loading="lazy"
              src={post.feature_image}
            />
          )} */}
          <div className="flex flex-col space-y-3">
            <h1 className="font-fira">{title}</h1>
            <p className="p-small">
              Updated {formatDistance(new Date(updatedAt), new Date())} ago
            </p>
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
