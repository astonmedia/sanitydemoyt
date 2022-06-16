import Link from 'next/link'
import { urlFor } from '../../sanity'

const PostDetail = ({ post }) => {
  return (
    <Link key={post._id} href={`/post/${post.slug.current}`}>
      <div className="border rounded-lg group cursor-pointer overflow-hidden">
        <img
          className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
          src={urlFor(post.mainImage).url()}
          alt={post.title}
        />
        <div className="flex justify-between p-5 bg-white">
          <div>
            <p className="text-lg font-bold">{post.title}</p>
            <p className="text-sm">
              {post.description} by {post.author.name}
            </p>
          </div>
          <img
            className="h-12 w-12 rounded-full"
            src={urlFor(post.author.image).url()}
            alt={post.title}
          />
        </div>
      </div>
    </Link>
  )
}

export default PostDetail
