import './App.css';

function App() {
  const dhbd = `${process.env.REACT_APP_NOT_SECRET_CODE}`
  

  return (
    <div className="App">
      <nav>
        <div className="container">
          <form>
            <input type="text"/>
            <button type="submit">Take Screenshot</button>
          </form>
        </div>
      </nav>
      <div className="hero">
<h2>{dhbd}</h2>
      </div>
    </div>
  );
}

export default App;
