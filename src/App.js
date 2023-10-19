import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import PageTemplate from './components/pageTemplate';
import About from './pages/about';
import ContactForm from './components/contactForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes >
        <Route path='/' element={<PageTemplate />} >
          <Route index element={<div>Home Page</div>} />
          <Route exact path='about' element={<About />} />
          {/* <Route exact path='projects' element={<div>Hello Projects</div>} /> @TODO: */}
          <Route exact path='contact' element={<ContactForm />} />
        </ Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
