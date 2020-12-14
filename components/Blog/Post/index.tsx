import { CenteredColumn } from 'components/Layouts'
import { BlogSubscribeBox, Feedback } from 'components/Blog'

export const PostContainer = () => {
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
            <h1>Tailwind CSS First Impression</h1>
            <p className="p-small">Updated yesterday</p>
          </div>
        </div>

        <div className="mt-4 prose lg:prose-lg prose-blue">
          <p>
            Last week I rebuilt my personal website with Tailwind.css, a CSS
            framework that uses utility classes to compose interface styles.
            Having used it for a week on a handful of areas (like moving an
            entire website into a single page on my site), here are my first
            impressions. <a href="news.ycombinator.com">Some HackerNews Link</a>
          </p>
          <p>
            I&amp;m 99% sure I&amp;m doing something wrong, but whenever I
            update my root tailwind.css file, it takes forever to recompile my
            Next.js project. Sometimes 10-15 seconds (where a normal file change
            should hot reload my page in less than a second). I{"'"}ve tinkered
            with compilation settings, like avoiding CSS purging in development
            mode, but that broke production deploys. Clearly I{"'"}m doing
            something wrong, but the fact that it&amp;s not built in to the
            Tailwind ecosystem to optimize for local development feels wrong. I
            would love to see a stronger enforcement of great conventions built
            into the entire framework so that people don{"'"}t have to even
            bother reading docs for {"'"}how do I purge unused styles{"?'"} –
            this should be the default behavior, with intelligent changes based
            on the environment.
          </p>
        </div>

        <div className="flex flex-col space-y-8 mt-14">
          <Feedback />
          <BlogSubscribeBox />
        </div>
      </CenteredColumn>
    </>
  )
}
