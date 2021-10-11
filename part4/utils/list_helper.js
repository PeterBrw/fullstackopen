const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((acc, curr) => acc + curr.likes, 0) || 0
}

const favoriteBlog = (blogs) => {
    const blog = blogs.reduce((a, c) => c.likes > a.likes ? c : a)
    const { _id, url, __v, ...topBlog } = blog
    return topBlog
}

module.exports = { dummy, totalLikes, favoriteBlog }
