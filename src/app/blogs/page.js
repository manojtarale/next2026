import React from 'react'

const Blogs = async({ params }) => {
    let { blogId } = await params;
    return (
        <div>Blogs {blogId}</div>
    )
}

export default Blogs;