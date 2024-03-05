import Profile from "./components/Profile";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Profile
        imageUrl="./images/Animation.gif"
        userName="Shelly"
        bio="I'm a UX and industrial designer based in Toronto."
      />
      <Form />
    </div>
  );
};

export default App;
