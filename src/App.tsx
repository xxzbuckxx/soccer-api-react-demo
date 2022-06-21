import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [appState, setAppState] = useState({
    loading: false,
    videos: null,
  });

  useEffect(() => {
    setAppState({ loading: true, videos: null });
    const options = {
      method: 'GET',
      url: 'https://free-football-soccer-videos.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': '80dded9258mshfd9acabb32702b9p19ca5ejsn65d1618aa741',
        'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      const allVideos = response.data;
      setAppState({ loading: false, videos: allVideos });
    }).catch(function (error) {
      console.error(error);
    });
  }, [setAppState]);

  console.log(appState.videos)

  return (
    <>
      <h1>Soccer API</h1>
    </>
  )
}

export default App
