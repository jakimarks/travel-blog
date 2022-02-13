import React from "react";
import {BlogPost} from "../../containers/blog/BlogPostView";
import './BlogPostPreview.css'
import ReadMoreLink from "../ReadMoreLink";
import BlogPostMetaView from "../BlogPostMetaView";

function BlogPostPreview({slug, title, content, created_at, created_by, header_image}: BlogPost) {
    const previewLength = 500
    const images = require.context('../../assets/blog', true);
    const headerImage = header_image ? images(`./${header_image}`) : undefined;

    return (
        <div className="blog_post_preview">
            { headerImage ? <img className="blog-post_preview__header_image" src={headerImage} alt="post_header_image"/> : null}
            <BlogPostMetaView created_at={created_at} created_by={created_by}/>
            <h2 className="blog_post__title">{title}</h2>
            <p className="blog_post__preview__description">{content.substring(0, previewLength) + '…'}</p>
            <ReadMoreLink to={`/blog/${slug}`}/>
        </div>
    )
}

export default BlogPostPreview
