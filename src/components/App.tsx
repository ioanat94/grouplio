import Layout from './Layout/Layout';
import Home from '../pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Person from '../pages/Person';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='people/:id/' element={<Person />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
