const ProfileCard = () => {

  const caption = 'Hi, I am Heze';
  const web  = 'https://github.com/Hcmwebs';


  return (
    <div className="card">
      <div className="card__header">
        <img src="https://res.cloudinary.com/duymkqhnm/image/upload/v1608460164/hcmwebs/hcmwebs/profiles/IMG_3327_l9pp8q.jpg" alt=" Profile"/>
      </div>
      <h2>{caption}</h2>
      <div className="card__body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo itaque in sint vel fugit.</p>
      </div>
      <a href={web} target="_blank" rel="noopener noreferrer" className ="primaryButton">More about me</a>
    </div>
  );
}

export default ProfileCard;