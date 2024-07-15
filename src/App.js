import './App.css';
import './css/user_settings_css/Settings.css'
import Showcase from './components/Showcase';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from './components/Search';
import Settings from './components/userSettings';

function App() {
  return (
    <div className="App">
      {/* <LoginBackground/> */}
      <Navbar />
      {/* <Showcase /> */}
      {/* {<Search />} */}
      <Settings />
      <Footer />
    </div>
  );
}

export default App;
