import './App.scss';
import Router from './components/Router';
import Header from './components/screens/Header/Header';


function App() {
  return (
    <div className="app">
      <Header/>
      <Router />
    </div>
  );
}

export default App;
