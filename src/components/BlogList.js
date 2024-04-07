import React from 'react';
import { connect } from 'react-redux';
import BlogListItem from './BlogListItem';
import './BlogList.css'; // CSS dosyasını içe aktarın

const BlogList = (props) => {
    return (
        <div className="scrollbar">
            <ul>
                {props.blogs.map(blog => {
                    return <BlogListItem key={blog.id} {...blog} />
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(BlogList);
