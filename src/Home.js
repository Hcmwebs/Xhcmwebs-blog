import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'New website', body:' lorem impsum...', author: 'Heze', id: 1},
    {title: 'Welcome party', body:' lorem impsum...', author: 'Bea', id: 2},
    {title: 'Web dev top tips', body:' lorem impsum...', author: 'Vic', id: 3},
    {title: 'Becoming REACTive', body:' lorem impsum...', author: 'Heze', id: 4},

  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !==
      id);
    setBlogs(newBlogs);

  }

  return (
    <div className="home">

      < BlogList blogs = {blogs} title = 'All Blogs!' handleDelete = {handleDelete} />
      < BlogList blogs = {blogs.filter((blog) => blog.author === 'Heze')} title = "Heze's blogs!" handleDelete = {handleDelete} />
    </div>
    );
}

export default Home;