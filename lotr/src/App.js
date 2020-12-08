import logo from './logo.svg';
import './App.css';
import Lotr from './Lotr';

function App(props) {
  console.log(props.post);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Lotr title={props.post.title} time={props.post.time} />
        </p>
      </header>
    </div>
  );
}

export default App;
