const post = {
    title: "Hello title",
    views: 1000000,
};

const titlePrev = post.title;
const { title:newTitle, views:postViews } = post;

console.log(`Prev title was: ${titlePrev}`)
console.log(`title is:${newTitle} with views of: ${postViews}`)