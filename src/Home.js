import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body:' lorem impsum...', author: 'Heze', id: 1},
    {title: 'Welcome party', body:' lorem impsum...', author: 'Bea', id: 2},
    {title: 'Web dev top tips', body:' lorem impsum...', author: 'Vic', id: 3},

  ]);

  return (
    <div className="home">
      {blogs.map((blog) =>(
        <div className="blog-prev" key={blog.id} >
          <h2>{blog.title}</h2>
          <p>Written by { blog.author}</p>
        </div>

      ))}

    </div>
    );
}

export default Home;