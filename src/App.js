import './App.css';
import Home from './components/home/Home';
import SignUp from './components/signUp/SignUp';
import SignIn from './components/signIn/SignIn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageNotFound from './components/page-not-found/PageNotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Home />,
      errorElement: <PageNotFound />
    },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "*", element: <PageNotFound /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
