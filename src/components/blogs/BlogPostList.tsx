import type { Post } from '@/types';
import { Link } from 'react-router';
import moment from 'moment';
import { motion } from 'motion/react';

interface PostProps {
  posts: Post[];
}

const imageUrl = import.meta.env.VITE_IMG_URL;
function BlogPostList({ posts }: PostProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 my-8">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 1.5 }}
        >
          <Link
            to={`/blogs/${post.id}`}
            key={post.id}
            className="group bg-card text-card-foreground flex flex-col gap-4 border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <div className="w-full h-48 overflow-hidden rounded-t-xl">
              <img
                src={imageUrl + post.image}
                alt={post.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
            </div>

            <div className="px-4 pb-4">
              <h2 className="text-xl font-bold text-emeraldGreen group-hover:underline transition-transform group-hover:scale-[1.02] duration-200 line-clamp-1">
                {post.title}
              </h2>

              <p className="text-sm text-muted-foreground line-clamp-3 mt-1">
                {post.content}
              </p>

              <span className="text-xs text-gray-500 mt-2 block">
                by{' '}
                <span className="font-semibold">{post.author?.fullName}</span>{' '}
                on{' '}
                <span className="font-semibold">
                  {moment(post.updatedAt).format('MMM DD, YYYY')}
                </span>
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default BlogPostList;
