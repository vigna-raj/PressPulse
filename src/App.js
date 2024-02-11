import { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [category, setCategory] = useState("");
  return (
    <><BrowserRouter>
      <Navbar setCategory={setCategory} />
      <Switch>
        <Route exact path="/"><News category="general" /></Route>
        <Route exact path="/politics"><News category="politics" /></Route>
        <Route exact path="/business"><News category="business" /></Route>
        <Route exact path="/technology"><News category="technology" /></Route>
        <Route exact path="/entertainment"><News category="entertainment" /></Route>
        <Route exact path="/sports"><News category="sports" /></Route>
        <Route exact path="/science"><News category="science" /></Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
