import style from './app.module.scss';
import React from 'react';
import Home from './pages/Home';
function App() {
    return (
        <div className={style.app}>
            <Home/>
        </div>    
    )
}
export default App