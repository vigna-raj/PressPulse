import { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
function App() {
  var [progress, setProgress] = useState(0)
  const apikey = process.env.REACT_APP_API_KEY
  return (

    <>
      <BrowserRouter>

        <Navbar />
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Routes>
          <Route exact path="/" element={<News category="general" setProgress={setProgress} apikey={apikey} />} />
          <Route exact path="/health" element={<News category="health" setProgress={setProgress} apikey={apikey} />} />
          <Route exact path="/business" element={<News category="business" setProgress={setProgress} apikey={apikey} />} />
          <Route exact path="/technology" element={<News category="technology" setProgress={setProgress} apikey={apikey} />} />
          <Route exact path="/entertainment" element={<News category="entertainment" setProgress={setProgress} apikey={apikey} />} />
          <Route exact path="/sports" element={<News category="sports" setProgress={setProgress} apikey={apikey} />} />
          <Route exact path="/science" element={<News category="science" setProgress={setProgress} apikey={apikey} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
