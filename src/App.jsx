//RootLayout
import Rootlayout from './layouts/RootLayout'
//Import components
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useParams } from 'react-router-dom'
import Home from './pages/Home'
import Alpine from './components/Alpine'
import Category from './components/Category'

import Hospitality from './components/Hospitality'
import Adrenaline from './components/Adrenaline'




const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route exact path="Alpine" element={<Alpine />} />
        {/* <Route exact path="Alpine/:id" element={<Alpine />} /> */}
        <Route exact path="Category" element={<Category />} />
        <Route exact path="Category/:name" element={<Alpine />} />
    </Route>
));


function App() {

  return (
<RouterProvider router={router} />



  );
}

export default App;
