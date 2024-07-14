import './App.css';
import Showcase from './components/Showcase';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      {/* <LoginBackground/> */}
      <Navbar />
      <Showcase />
      {/* <Search /> */}
      <Footer />
    </div>
  );
}

export default App;
