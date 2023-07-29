import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Statistic from './Components/Statistic/Statistic';
import Blog from './Components/Blog/Blog';
import Quiz from './Components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
     {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },

        {
          path:'/static',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistic></Statistic>
        },
        {path:'/blog', element:<Blog></Blog>},
        {
          path:'/:id',
          loader:async ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element:<Quiz></Quiz>
        }
        
      ]
     }
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
