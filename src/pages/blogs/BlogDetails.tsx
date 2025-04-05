import { Link, useParams } from 'react-router';
import { Posts } from '@/data/posts';
import moment from 'moment';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';
import RichTextRenderer from '@/components/blogs/RichTextRenderer';

function BlogDetails() {
  const { postId } = useParams();
  const post = Posts.find((post) => post.id === postId);

  return (
    <div className="container mx-auto py-10 lg:px-0 px-4">
      <div className="flex flex-col gap-8 lg:flex-row justify-between">
        <div className="w-full lg:w-3/4 space-y-8">
          <Button variant="outline" asChild>
            <Link to="/blogs" className="flex items-center">
              <Icons.arrowLeft className="mr-2" />
              All Posts
            </Link>
          </Button>

          {post ? (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <span className="text-sm text-gray-500">
                  by <span className="font-semibold">{post.author}</span> on{' '}
                  <span className="font-semibold">
                    {moment(post.updatedAt).format('MMM DD, YYYY')}
                  </span>
                </span>
              </div>

              <div className="mt-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full rounded-xl shadow-lg"
                />
              </div>

              <div className="my-6">
                <RichTextRenderer content={post.body} />
              </div>

              <div className="space-x-2">
                {post.tags && post.tags.length > 0 ? (
                  post.tags.map((tag, index) => (
                    <Button
                      key={index}
                      variant="secondary"
                      className="py-2 px-4 text-sm rounded-full border border-gray-300"
                    >
                      {tag}
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
        </div>

        <div className="w-full lg:w-1/4 mt-15 space-y-6">
          <div className="flex items-center gap-2">
            <Icons.layers className="h-6 w-6 " />
            <h2 className="text-xl font-semibold">Other Blog Posts</h2>
          </div>

          <div className="space-y-4">
            {Posts.map((post) => (
              <Link
                to={`/blogs/${post.id}`}
                key={post.id}
                className="flex items-center gap-4 p-4 shadow-md rounded-lg bg-card text-card-foreground"
              >
                <div className="w-16 h-16 overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
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
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
