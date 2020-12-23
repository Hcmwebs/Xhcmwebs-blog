import './App.css';

function App() {
  const title = 'Hcmwebs Blog';
  const hello = 'Hi! Welcome to my new blog';
  const img = 'https://res.cloudinary.com/duymkqhnm/image/upload/v1608460164/hcmwebs/hcmwebs/IMG_3327_l9pp8q.jpg';
  const myGithub = 'https://github.com/Hcmwebs'
  const width = 200;
  const height = 200;



  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <h2>{hello}</h2>
        <img src={img} alt="Profile image" width  = {width}px height = {height}px/>
        <a href={myGithub} target="_blank" rel="noopener noreferrer">View my profile</a>


      </div>
    </div>
  );
}

export default App;
