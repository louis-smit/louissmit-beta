import { NextSeo } from 'next-seo'
import Head from 'next/head'

// TODO: UPDATE THIS PAGE WITH YOUR DATA
const SEO = () => {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed for Overthought"
          href="/posts/rss"
        />
      </Head>
      <NextSeo
        title={'Posts'}
        description={
          'Thinking out loud about design, development, and building products.'
        }
        openGraph={{
          url: 'https://louissmit.me/posts',
          title: 'Posts',
          description:
            'Thinking out loud about design, development, and building products.',
          site_name: "Louis Smit's Blog",
          images: [
            {
              url: 'https://louissmit.me/static/meta/overthought.png',
              alt: 'Overthought',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
    </>
  )
}

export default SEO
