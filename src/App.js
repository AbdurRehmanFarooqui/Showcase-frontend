import './App.css';
import './css/user_settings_css/Settings.css'
import Showcase from './components/Showcase';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from './components/Search';
import Settings from './components/userSettings';
import PublisherProfile from './components/PublisherProfile';
import LoginBackground from './components/LoginBackground';
import Home from './components/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/login" element={<><LoginBackground heading='Login'/></>} />
          <Route path="/signup" element={<><LoginBackground heading='Sign up'/></>} />
          <Route path="/showcase" element={<><Navbar /><Showcase /><Footer /></>} />
          <Route path="/search" element={<><Navbar /><Search /><Footer /></>} />
          <Route path="/setting" element={<><Navbar /><Settings /><Footer /></>} />
          <Route path="/pubprofile" element={<><Navbar /><PublisherProfile /><Footer /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
