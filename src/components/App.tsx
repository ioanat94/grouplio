import Layout from './Layout';
import Home from '../pages/Home';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Person from './Person';

function App() {
  let { id } = useParams();

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
