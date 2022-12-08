const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  let sum = 0;

  blogs.forEach((blog) => {
    sum += blog.likes;
  });

  return sum;
};

const favoriteBlog = (blogs) => {
  let topBlogLikes = 0;
  let topBlog = undefined;

  blogs.forEach((blog) => {
    if (blog.likes > topBlogLikes) {
      topBlogLikes = blog.likes;
      topBlog = blog;
    }
  });

  return {
    title: topBlog.title,
    author: topBlog.author,
    likes: topBlog.likes,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
