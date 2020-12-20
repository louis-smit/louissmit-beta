import Link from 'next/link'
import { formatDistance } from 'date-fns'
interface Post {
  _id: string
  _updatedAt: Date
  slug: string
  title: string
  excerpt?: string
}

export const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="flex flex-col space-y-5 px-4">
      {posts.map((post) => (
        <PostItem post={post} key={post._id} />
      ))}
    </div>
  )
}

interface PostProps {
  post: Post
}

const PostItem = ({ post }: PostProps) => (
  <div className="flex flex-col space-y-1" key={post._id}>
    <Link href={`/posts/${post.slug}`} passHref>
      <a className="text-blue-600 dark:text-white">{post.title}</a>
    </Link>
    {post.excerpt && <p className="clamp-2">{post.excerpt}</p>}
    <p className="p-small text-gray-100">
      Updated {formatDistance(new Date(post._updatedAt), new Date())} ago
    </p>
  </div>
)
