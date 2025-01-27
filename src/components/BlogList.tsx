import React from 'react';
import { BlogPost as BlogPostType } from '../types';
import { BlogPost } from './BlogPost';

interface BlogListProps {
  posts: BlogPostType[];
  isAdmin?: boolean;
}

export function BlogList({ posts, isAdmin }: BlogListProps) {
  const visiblePosts = isAdmin ? posts : posts.filter(post => post.is_published);

  return (
    <div className="space-y-12">
      {visiblePosts.map(post => (
        <BlogPost key={post.id} post={post} isPreview />
      ))}
      
      {visiblePosts.length === 0 && (
        <p className="text-center text-amber-700 py-12">No posts found.</p>
      )}
    </div>
  );
}