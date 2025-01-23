import { Navbar,ScrollWrapper} from './components/elements';
import { Home,Preparation,Experience,Post} from './components/pages';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<ScrollWrapper />} />
        <Route path='/preparation' element={<Preparation />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/post' element={<Post />} />
        <Route path='/faq' element={<ScrollWrapper />} />
        <Route path='/contact' element={<ScrollWrapper />} />
      </Routes>
    </div>
  );
}

export default App;