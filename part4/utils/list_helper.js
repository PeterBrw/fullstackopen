const _ = require('lodash')

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((acc, curr) => acc + curr.likes, 0) || 0
}

const favoriteBlog = (blogs) => {
    const blog = blogs.reduce((acc, curr) => (curr.likes > acc.likes ? curr : acc))
    const { _id, url, __v, ...topBlog } = blog
    return topBlog
}

const mostBlogs = (blogs) => {
    return _.chain(blogs)
        .countBy('author')
        .map((blogs, author) => ({ author, blogs }))
        .sortBy('blogs')
        .last()
        .value()
}

const mostLikes = (blogs) => {
    return _.chain(blogs)
        .groupBy('author')
        .map((obj, key) => ({ author: key, likes: _.sumBy(obj, 'likes') }))
        .sortBy('likes')
        .last()
        .value()
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }
