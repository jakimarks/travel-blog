import React from 'react';
import blogPosts from '../../data/blog/blog-posts.json'
import BlogPostPreview from "../../components/blog/BlogPostPreview";
import {BlogPost} from "./BlogPostView";

function BlogView() {
    const entries: Array<BlogPost> = blogPosts.blog_posts

    const children = entries.map((entry) => {
        return (
            <BlogPostPreview
                slug={entry.slug}
                title={entry.title}
                content={entry.content}
                created_at={entry.created_at}
                created_by={entry.created_by}
            />
        )
    });
    return (
        <div className="blog">
            <h1>Unser Blog</h1>
            <div className="blog__entries">
                {children}
            </div>
        </div>
    );
}

export default BlogView;
