import { NextPage } from 'next'
import Page, { PageHeader } from 'components/Page'
import { BlogSubscribeBox, PostList } from 'components/Blog'
import { CenteredColumn } from 'components/Layouts'

const PostsPage: NextPage = () => {
  return (
    <Page>
      {/* <SEO /> */}

      <CenteredColumn>
        <div className="flex flex-col space-y-14">
          <PageHeader title="Posts" subtitle="I need a description here." />
          <BlogSubscribeBox />
          {/* {data && data.posts && <OverthoughtList posts={data.posts} />} */}
          <PostList />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default PostsPage
