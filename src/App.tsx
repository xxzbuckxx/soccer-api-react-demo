import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import List from './components/List';
import withListLoading from './components/withListLoading';

function App() {
  const ListLoading = withListLoading(List)
  const [appState, setAppState] = useState({
    loading: false,
    videos: null,
  })

  useEffect(() => {
    setAppState({ loading: true, videos: null })
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
      let newVideos = new Array();
      for (let i = 0; i < allVideos.length; i++) {
        newVideos[i] = allVideos[i];
        if (newVideos.length > 2) break;
      }
      setAppState({ loading: false, videos: newVideos })
    }).catch(function (error) {
      console.error(error)
    })
  }, [setAppState])

  console.log(typeof(appState.videos))

  return (
    <>
      <h1>Soccer API</h1>
        <ListLoading isLoading={appState.loading} repos={appState.videos} />
    </>
  )
}

export default App
