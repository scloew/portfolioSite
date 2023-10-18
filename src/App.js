import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import PageTemplate from './components/pageTemplate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes >
        <Route path='/' element={<PageTemplate />} >
          <Route index element={<div>Home Page</div>} />
          <Route exact path='about' element={<div>Hello About</div>} />
          <Route exact path='projects' element={<div>Hello Projects</div>} />
          <Route exact path='contact' element={<div>Hello Contact</div>} />
        </ Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
