import style from './app.module.scss';
import Home from './components/Home';

function App() {
    return (
      <div className={style.app}>
        <Home/>
      </div> 
    )
}
export default App