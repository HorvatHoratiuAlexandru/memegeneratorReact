import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Meme from './Components/Meme';
import BoxContainer from './BoxChallange/BoxContainer';
import Forms from './ReactForms/Forms';
import SignUp from './ReactForms/SignUp';
import LogIn from './ReactForms/LogIn';
import LoggingContainer from './ReactForms/LoggingContainer';


function App() {
  return (
    <div className="App">
        <Header />
        <Meme />
    </div>
  );
}

export default App;
