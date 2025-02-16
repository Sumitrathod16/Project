import './App.css';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

function App() {
  return (
    <div>
      <Navbar />
      <div className='category'>
        <Categories title="All"> </Categories>
        <Categories title="Mobiles"> </Categories>
        <Categories title="Laptops"> </Categories>
        <Categories title="HeadPhones"> </Categories>
      </div>
    </div>
  );
}

export default App;
