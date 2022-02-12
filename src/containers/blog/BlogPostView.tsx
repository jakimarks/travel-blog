import React from 'react';
import blogPosts from '../../data/blog/blog-posts.json'
import {useParams} from "react-router-dom";
import BlogPostMetaView from "../../components/BlogPostMetaView";

export type BlogPost = {
    slug: string,
    created_at: string,
    created_by: string,
    title: string,
    content: string,
}

function BlogPostView() {
    const params = useParams();
    const slug = params.slug

    const blogPost = blogPosts.blog_posts.find(entry => entry.slug === slug)

    if (!blogPost) {
        return <h1>Something went wrong.</h1>;

    } else return (
        <div className="blog-post">
            <BlogPostMetaView created_at={blogPost.created_at} created_by={blogPost.created_by}/>
            <h2>{blogPost.title}</h2>
            <p>{blogPost.content}</p>
        </div>
    )
}

export default BlogPostView;
