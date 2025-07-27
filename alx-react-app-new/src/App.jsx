import WelcomeMessage from './components/WelcomeMessage.jsx'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import UserProfile from './components/UserProfile.jsx'
import Counter from "./components/Counter";
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Counter />
      <Footer />
    </>
  );
}

export default App
