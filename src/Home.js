import { useState, useEffect } from 'react';
import BlogList from './BlogList';



const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState('Heze');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !==
      id);
    setBlogs(newBlogs);

  }

  useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then(res => {
        return res.json()
      })
      .then (data =>{
        console.log(data)
      })
  }, []);

  return (
    <div className="home">
      {/* < BlogList blogs = {blogs} title = 'All Blogs!' handleDelete = {handleDelete} /> */}
      <button onClick ={() => setName('Bea')} className="primaryButton"> Change name</button>
      <p>{ name }</p>
    </div>
  );
}

export default Home;