import React from "react";
import {Link} from "react-router-dom";
import {BlogPost} from "../../containers/blog/BlogPostView";
import DateDisplay from "../DateDisplay";
import AuthorDisplay from "../AuthorDisplay";
import './BlogPostPreview.css'

function BlogPostPreview({slug, title, content, created_at, created_by}: BlogPost) {
    const previewLength = 500
    return (
        <div className="blog_post_preview">
            <h1>{title}</h1>
            <div className="blog_post__meta">
                <DateDisplay timestamp={created_at}/>
                <AuthorDisplay author={created_by} />
            </div>
            <p>{content.substring(0, previewLength) + '…'}</p>
            <Link to={`/blog/${slug}`}>mehr lesen</Link>
        </div>
    )
}

export default BlogPostPreview
