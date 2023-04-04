import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const key = process.env.REACT_APP_API_KEY;
  const [search, setSearch] = useState("https://www.exponentialhost.com/");
  const [img, setImg] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  const getScreenshots = async () =>{
    setSearch("");
    setError(false);
    setLoading(true);
    const response = await fetch(`https://api.apiflash.com/v1/urltoimage?access_key=${key}&url=${search}&full_page="true"&fresh="true"`);
    if(response.ok){
      setImg(response);
      setLoading(false);
    }
    else{
      setError(true);
    }
  }

  const searchScreenshots = (e) => {
    e.preventDefault();
    getScreenshots();
  }

  useEffect(() => {
    setSearch("");
    getScreenshots();

  },[])

  return (
    <div className="App">
      <nav>
        <div className="container">
          <form onSubmit={searchScreenshots}>
            <input autoFocus type="text" value={search} onChange={e => setSearch(e.target.value)}/>
            <button type="submit">Take Screenshot</button>
          </form>
        </div>
      </nav>
      <div className="hero">
        {!loading && !error ? 
        (<div className="container">
          {img && 
          <a href={img.url} target='_blank'>
            <img src={img.url} alt="background" />
          </a>
          }
        </div>)
         : 
        !error && loading ? (
          <div className="loading"></div>
        ): error ? (
          <div className="container">
            <h2>Please insert a valid url</h2>
          </div>
        ): (
          ""
        )
      }
      </div>
    </div>
  );
}

export default App;
