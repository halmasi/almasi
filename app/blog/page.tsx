import BlogCard from "@/components/BlogCard";
import Titles from "@/components/Titles";
const weblogs = [
  {
    id: 1,
    title: "first blog",
    publishDate: "2024 aug 15",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aliquid.",
    picture: "/icons/javascript.png",
  },
  {
    id: 2,
    title: "second blog",
    publishDate: "2024 aug 15",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aliquid.",
    picture: "/icons/javascript.png",
  },
  {
    id: 3,
    title: "third blog",
    publishDate: "2024 aug 15",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aliquid.",
    picture: "/icons/javascript.png",
  },
];
function Blog() {
  return (
    <>
      <Titles>My Blogs</Titles>
      <main className="self-center container grid md:grid-cols-2 gap-5 pb-5 place-items-center">
        {weblogs.map((item) => (
          <BlogCard
            key={item.id}
            id={item.id}
            title={item.title}
            describtion={item.describtion}
            picture={item.picture}
            publishDate={item.publishDate}
          />
        ))}
      </main>
    </>
  );
}

export default Blog;
