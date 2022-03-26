import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <div className='question-ans-area'>
        <div className="question-ans">
          <h3>How react works?</h3>
          <p>Ans: React is a javascript library.In react JSX is html like thing but it is actually a syntactic sugar to create javascript object.Basically react implements a virtual dom.When there is need for some changes its use this virtual dom to compare actually where the changes happened. And Then  update this with the most efficient way. React uses diff algorithm to do this.</p>
        </div>
        <div className="question-ans">
          <h3>How useState works?</h3>
          <p>Ans: useState is a React hook that helps us to add React state to components function.Hook is react built in function helps us to use use React features. If we pass the value using useState it will return the state value and a function. The function is used to update this value.The way its update the value is called in asynchoronus way.</p>
        </div>

      </div>
    </div>
  );
}

export default App;
