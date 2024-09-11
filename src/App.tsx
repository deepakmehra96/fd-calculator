import FDForm from './components/FDInputForm';
import FDResult from './components/FDResult';
import './App.css'

const App = () => {
  return (
    <div>
      <h1>FD Investment Calculator</h1>
      <div className='main-container'>
        <FDForm />
        <FDResult />
      </div>
    </div>
  );
};

export default App;
