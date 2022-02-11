import React from 'react';
import blogPosts from '../../data/blog/blog-posts.json'
import {useParams} from "react-router-dom";
import DateDisplay from "../../components/DateDisplay";

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
            <h1>{blogPost.title}</h1>
            <div className="blog_post__meta">
                <DateDisplay timestamp={blogPost.created_at}/>
                <p>{blogPost.created_by}</p>
            </div>
            <p>{blogPost.content}</p>
        </div>
    )
}

export default BlogPostView;
