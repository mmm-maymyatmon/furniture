import { Posts } from '@/data/posts';
import BlogPostList from '../../components/blogs/BlogPostList';

function Blog() {
  return (
    <div className="container mx-auto py-10 lg:px-0 px-4">
      <h1 className="text-2xl font-bold">Latest Blog Posts</h1>
      <BlogPostList posts={Posts} />
    </div>
  );
}

export default Blog;
