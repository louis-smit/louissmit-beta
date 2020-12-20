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

  if (!router.isFallback && !data?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const { data: post } = usePreviewSubscription(postQuery, {
    params: {
      slug: data.slug,
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
  console.log('ABOUT TO RUN GET STATIC PROPS FOR /posts/[slug]')

  const data = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })

  console.log('FETCHED DATA:')

  console.log(data)

  return {
    props: {
      preview,
      data,
    },
  }
}

export const getStaticPaths = async () => {
  console.log('ABOUT TO RUN GET STATIC PATHS FOR /posts/[slug]')
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  console.log('FETCHED PATHS:')

  console.log(paths)

  return {
    // Extract paths to Next's param objects
    paths: paths.map((slug) => ({ params: { slug } })),
    // Next fallback mode
    fallback: true,
  }
}

export default PostPage
