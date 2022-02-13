import React from 'react';
import blogPosts from '../../data/blog/blog-posts.json'
import {Link, useParams} from "react-router-dom";
import BlogPostMetaView from "../../components/BlogPostMetaView";
import './BlogPostView.css'
import {MdWest} from "react-icons/md";

export type BlogPost = {
    slug: string,
    created_at: string,
    created_by: string,
    title: string,
    content: string,
    header_image?: string
}

function BlogPostView() {
    const params = useParams();
    const slug = params.slug

    const blogPost = blogPosts.blog_posts.find(entry => entry.slug === slug)

    if (!blogPost) {
        return <h1>Something went wrong.</h1>;
    } else {
        const images = require.context('../../assets/blog', true);
        const headerImage = blogPost.header_image ? images(`./${blogPost.header_image}`) : undefined;

        return (
            <div className="blog-post">
                <Link className="blog-post__back" to="/blog">
                    <MdWest size={20}/>
                    zur Übersicht
                </Link>
                { headerImage ? <img className="blog-post__header_image" src={headerImage} alt="post_header_image"/> : null}
                <BlogPostMetaView created_at={blogPost.created_at} created_by={blogPost.created_by}/>
                <h2>{blogPost.title}</h2>
                <p className="blog-post__description">{blogPost.content}</p>
                <Link className="blog-post__back" to="/blog">
                    <MdWest size={20}/>
                    zur Übersicht
                </Link>
            </div>
        )
    }
}

export default BlogPostView;
