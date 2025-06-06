import type { Post } from '@/types';
import { Link } from 'react-router';
import moment from 'moment';
import { motion } from "motion/react"

interface PostProps {
  posts: Post[];
}
const imageUrl = import.meta.env.VITE_IMG_URL;
function BlogCard({ posts }: PostProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 my-8">
      {posts?.map((post, index) => (
        <motion.div
        key={post.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15, duration: 0.5 }}
      >
        <Link to={`/blogs/${post.id}`} key={post.id} className="group bg-card text-card-foreground flex flex-col gap-6 border py-6 shadow-sm w-full overflow-hidden rounded-lg pt-0">
          <div className="w-full h-70 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group-hover:bg-opacity-70 group-hover:bg-black">
            <img
              src={imageUrl + post.image}
              alt={post.title}
              loading="lazy"
                      decoding='async'
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-90"
            />
          </div>
          <div className='px-4'>
          <h2 className="text-xl font-semibold text-emeraldGreen">
            {post.title}
          </h2>
          <span className="text-sm text-gray-500">
            by <span className="font-bold">{post.author?.fullName }</span> on{' '}
            <span className="font-bold">
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

export default BlogCard;
