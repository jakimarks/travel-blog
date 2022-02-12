import React from 'react';
import 'moment/locale/de';
import './DateDisplay.css'
import DateDisplay from "./DateDisplay";
import AuthorDisplay from "./AuthorDisplay";
import './BlogPostMetaView.css'

type BlogPostMetaViewProps = {
    created_at: string,
    created_by: string
}

function BlogPostMetaView({created_at, created_by}: BlogPostMetaViewProps) {
    return (
        <div className="blog_post__meta">
            <DateDisplay timestamp={created_at}/>
            <AuthorDisplay author={created_by} />
        </div>
    );
}

export default BlogPostMetaView;
