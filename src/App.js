
import { Routes,Route,BrowserRouter } from "react-router-dom";
import SingleProductPage from "./Pages/SingleProductPage";
import HomePage from './Pages/HomePage'

export default function App() {
  return (
<BrowserRouter>

<Routes>

<Route path="/" element={<HomePage/>} />
<Route path="/Product" element={<SingleProductPage/>} />



 </Routes>

</BrowserRouter>
  );
}
