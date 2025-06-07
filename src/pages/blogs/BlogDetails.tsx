import { Link, useLoaderData } from 'react-router';
import moment from 'moment';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import RichTextRenderer from '@/components/blogs/RichTextRenderer';
import { useSuspenseQuery } from '@tanstack/react-query';
import { onePostQuery, postQuery } from '@/api/query';
import { Post, Tag } from '@/types';
import { motion } from 'motion/react';
function BlogDetails() {
  // const { postId } = useParams();
  // const post = Posts.find((post) => post.id === postId);
  const { postId } = useLoaderData();
  const { data: postsData } = useSuspenseQuery(postQuery("?limit=6"));
  const { data: postDetail} = useSuspenseQuery(onePostQuery(postId));
  
  const imageURL = import.meta.env.VITE_IMG_URL;
  return (
    <div className="container mx-auto py-10 lg:px-0 px-4">
      <div className="flex flex-col gap-8 lg:flex-row justify-between">
        
        <div className="w-full lg:w-3/4 space-y-8">
        <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 1.5 }}
    >
          <Button variant="outline" asChild>
            <Link to="/blogs" className="flex items-center">
              <Icons.arrowLeft className="mr-2" />
              All Posts
            </Link>
          </Button>

          {postDetail ? (
            <div className="space-y-6 mt-5">
              <div>
                <h1 className="text-3xl text-emeraldGreen font-bold pb-3">{postDetail.post.title}</h1>
                <span className="text-sm text-gray-500">
                  by <span className="font-semibold">{postDetail.post.author.fullName}</span> on{' '}
                  <span className="font-semibold">
                    {moment(postDetail.post.updatedAt).format('MMM DD, YYYY')}
                  </span>
                </span>
              </div>

              <div className="mt-4">
                
                <img
                  src={imageURL + postDetail.post.image}
                  alt={postDetail.post.title}
                  loading='lazy'
                  decoding='async'
                  className="w-full h-full rounded-xl shadow-lg"
                />
              </div>

              <div className="my-6">
                <RichTextRenderer content={postDetail.post.body} />
              </div>

              <div className="space-x-2">
                {postDetail.post.tags && postDetail.post.tags.length > 0 ? (
                  postDetail.post.tags.map((tag: Tag) => (
                    <Button
                      variant="secondary"
                      className="py-2 px-4 text-sm rounded-full border border-gray-300"
                    >
                      {tag.name}
                    </Button>
                  ))
                ) : (
                  <p>No tags available</p>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-800">
                Post not found
              </h2>
            </div>
            )}
            </motion.div>
        </div>

        <div className="w-full lg:w-1/4 space-y-6">
        <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 1.5 }}
    >
          <div className="flex items-center gap-2 mb-5">
            <Icons.layers className="h-6 w-6 " />
            <h2 className="text-xl text-emeraldGreen font-bold">Other Blog Posts</h2>
          </div>

          <div className="space-y-4">
            {postsData.posts.map((post: Post) => (
              <Link
                to={`/blogs/${post.id}`}
                key={post.id}
                className="flex items-center gap-4 p-4 shadow-md rounded-lg bg-card text-card-foreground"
              >
                <div className="w-16 h-16 overflow-hidden rounded-lg">
                  <img
                    src={imageURL + post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    {post.content.slice(0, 100)}... <i>see more</i>
                  </p>
                </div>
              </Link>
            ))}
            </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
