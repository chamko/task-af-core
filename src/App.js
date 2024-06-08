import "./App.css";
import Counter from "./components/Counter";

function UserGreeting(props) {
  return <h1>Welcome back, {props.name}!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  return (
    <div>
      {isLoggedIn ? <UserGreeting name={props.name} /> : <GuestGreeting />}
    </div>
  );
}

function App() {
  const name = "Loulou";
  return (
    <div className="App">
      <header className="App-header">
        <p>{name}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Greeting isLoggedIn name="Yassine"></Greeting>
        </a>
        <Counter isActive={true}></Counter>
      </header>
    </div>
  );
}

export default App;
