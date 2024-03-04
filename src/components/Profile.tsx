import './Profile.css';


const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src="./images/Animation.gif" alt="Character animates" />
      </div>
      <div className="profile-content">
        <h2>Hello, I'm Shelly.</h2>
        <p>I'm a UX and industrial designer based in Toronto.</p>
      </div>
    </div>
  );
}

export default Profile;