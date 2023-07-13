import React, { Suspense } from 'react';
//import Layout from './components/Layout';
//import Home from './components/Home';
//import About from './components/About';
//import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'
import './App.scss';

const Layout = React.lazy(() => import('./components/Layout'));
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const Jobs = React.lazy(() => import('./components/Jobs'));
const Education = React.lazy(() => import('./components/Education'));

function App() {
  return (
        <>
        <Suspense>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home /> } />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/jobs' element={<Jobs />} />
              <Route path='/education' element={<Education />} />
              <Route path='*' element={<Home />}/>
            </Route>
          </Routes>
        </Suspense>
        </>
  );
}

export default App;
