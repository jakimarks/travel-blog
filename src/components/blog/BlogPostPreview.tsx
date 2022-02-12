import React from "react";
import {BlogPost} from "../../containers/blog/BlogPostView";
import './BlogPostPreview.css'
import ReadMoreLink from "../ReadMoreLink";
import BlogPostMetaView from "../BlogPostMetaView";

function BlogPostPreview({slug, title, content, created_at, created_by}: BlogPost) {
    const previewLength = 500
    return (
        <div className="blog_post_preview">
            <BlogPostMetaView created_at={created_at} created_by={created_by}/>
            <h2 className="blog_post__title">{title}</h2>
            <p className="blog_post__preview__description">{content.substring(0, previewLength) + '…'}</p>
            <ReadMoreLink to={`/blog/${slug}`}/>
        </div>
    )
}

export default BlogPostPreview
