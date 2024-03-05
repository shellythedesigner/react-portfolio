import "./Profile.css";

interface ProfileProps {
  imageUrl: string;
  userName: string;
  bio: string;
}

const Profile = ({ imageUrl, userName, bio }: ProfileProps) => {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={imageUrl} alt="Character animates" />
      </div>
      <div className="profile-content">
        <h2>Hello, I'm {userName}.</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default Profile;
// I'm a UX and industrial designer based in Toronto.
// src="./images/Animation.gif"
