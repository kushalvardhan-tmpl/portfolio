import MyBlogs from "./myblogs";
// import "../stylecomponents/myblogs.css";
const BlogItems = (props) => {
  const data = props.data;
  const blogitems = data.map((item) => {
    return (
      <MyBlogs
        image={item.image}
        title={item.title}
        content={item.content}
        date={item.date}
        author={item.author}
      />
    );
  });

  return <div className="blog-items">{blogitems}</div>;
};

export default BlogItems;
