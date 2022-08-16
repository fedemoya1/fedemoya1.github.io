import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'
import './App.scss';

function App() {
  return (
        <>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home /> } />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='*' 
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>}/>
            </Route>
          </Routes>
        </>
  );
}

export default App;
