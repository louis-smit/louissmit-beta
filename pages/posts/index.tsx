import Page, { PageHeader } from 'components/Page'
import { BlogSubscribeBox, PostList } from 'components/Blog'
import { CenteredColumn } from 'components/Layouts'
import { getClient, usePreviewSubscription } from 'lib/sanity'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'

const postsQuery = groq`
  *[_type == "post"]|order(publishedAt desc) {
    _id,
    title,
    mainImage,
    _updatedAt,
    categories[]->{
      _id,
      title
    },
    excerpt,
    "slug": slug.current
  }
`

const PostsPage = ({ data, preview }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Loading</p>
  }

  const { data: posts } = usePreviewSubscription(postsQuery, {
    initialData: data,
    enabled: preview,
  })

  return (
    <Page>
      {/* <SEO /> */}

      <CenteredColumn>
        <div className="flex flex-col space-y-14">
          <PageHeader title="Posts" subtitle="I need a description here." />
          <BlogSubscribeBox />
          {/* {data && data.posts && <OverthoughtList posts={data.posts} />} */}
          <PostList posts={posts} />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  const data = await getClient(preview).fetch(postsQuery)

  return {
    props: {
      preview,
      data,
    },
  }
}

export default PostsPage
