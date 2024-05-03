import Articles from "./components/Articles";
import User from "./components/User";
function App() {
  return (
    <div className="App">
      <header>
        <h1>React Skeletons</h1>
      </header>

      <div className="content">
        <Articles></Articles>
        <User></User>
      </div>
    </div>
  );
}

export default App;
