
import Navbar from './Navbar';
import Home from './Home';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <ProfileCard />
      </div>

    </div>
  );
}

export default App;
