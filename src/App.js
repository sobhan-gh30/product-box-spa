import "./output.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cart from './carts';
import data from "./data";
import MainProduct from "./MainProduct";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<div className="App flex gap-3 p-5 w-full h-screen justify-center items-center">{data.map((obj) => {return (<Cart {...obj} />)})}</div>}/>
              <Route path={`/product/:id`} element={<MainProduct/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;