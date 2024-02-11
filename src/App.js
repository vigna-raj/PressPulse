import { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News category="general" />} />
          <Route exact path="/health" element={<News category="health" />} />
          <Route exact path="/business" element={<News category="business" />} />
          <Route exact path="/technology" element={<News category="technology" />} />
          <Route exact path="/entertainment" element={<News category="entertainment" />} />
          <Route exact path="/sports" element={<News category="sports" />} />
          <Route exact path="/science" element={<News category="science" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
