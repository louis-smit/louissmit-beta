import Page from 'components/Page'
import { PostContainer } from 'components/Blog'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { groq } from 'next-sanity'
import { getClient, usePreviewSubscription, PortableText } from 'lib/sanity'

const postQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  body,
  mainImage,
  _updatedAt,
  categories[]->{
    _id,
    title
  },
  "slug": slug.current
}
`

const PostPage = ({ data, preview }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // if (!router.isFallback && !data?.slug) {
  if (!data?.post.slug) {
    return <ErrorPage statusCode={404} />
  }

  const {
    data: { post },
  } = usePreviewSubscription(postQuery, {
    params: {
      slug: data.post.slug,
    },
    initialData: data,
    enabled: preview,
  })

  const { title, body } = post

  return (
    <Page>
      {/* <figure>
        <img src={urlFor(mainImage).url()} />
      </figure> */}
      <PostContainer title={title} updatedAt={post._updatedAt}>
        <PortableText blocks={body} />
      </PostContainer>
    </Page>
  )
}

export const getStaticProps = async ({ params, preview = false }) => {
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })

  if (!post) return { notFound: true }

  return { props: { preview, data: { post } } }
}

export const getStaticPaths = async () => {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    // Extract paths to Next's param objects
    paths: paths.map((slug) => ({ params: { slug } })),
    // Next fallback mode
    fallback: true,
  }
}

export default PostPage
