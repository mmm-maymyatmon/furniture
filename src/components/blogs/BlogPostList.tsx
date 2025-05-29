import type { Post } from '@/types';
import { Link } from 'react-router';
import moment from 'moment';

interface PostProps {
  posts: Post[];
}

const imageUrl = import.meta.env.VITE_IMG_URL;
function BlogPostList({ posts }: PostProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 my-8">
      {posts.map((post) => (
        <Link to={`/blogs/${post.id}`} key={post.id} className="group">
          <div className="w-full h-70 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group-hover:bg-opacity-70 group-hover:bg-black">
            <img
              src={imageUrl + post.image}
              alt={post.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-90 rounded-xl"
            />
          </div>
          <h2 className="text-xl font-semibold text-emeraldGreen mt-4 mb-2">
            {post.title}
          </h2>
          <p>{post.content}</p>
          <span className="text-sm text-gray-500">
            by <span className="font-bold">{post.author.fullName}</span> on{' '}
            <span className="font-bold">
              {moment(post.updatedAt).format('MMM DD, YYYY')}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export default BlogPostList;
