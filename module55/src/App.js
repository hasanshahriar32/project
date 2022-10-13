import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Topics from './Components/Topics/Topics';
import Stats from './Components/Stats/Stats';
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';
import Error404 from './Components/Error404/Error404';
import TopicQuiz from './Components/TopicQuiz/TopicQuiz';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Main />, children: [
      { path: '/topics',loader: async ()=>{return fetch('https://openapi.programming-hero.com/api/quiz')}, element: <Topics /> },
      { path: '/',loader: async ()=>{return fetch('https://openapi.programming-hero.com/api/quiz')}, element: <Topics /> },
      { path: '/home',loader: async ()=>{return fetch('https://openapi.programming-hero.com/api/quiz')}, element: <Topics /> },
      { path: '/stats', element: <Stats /> },
      { path: 'blog', element: <Blog></Blog>},
      { path: '/topics/:topicId', 
          loader:({params})=>{return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)}, 
          element:<TopicQuiz></TopicQuiz>} 
    ] },
    // { path: '/header' , element: <Header /> },
    { path: '*', element: <Error404 /> }

  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
