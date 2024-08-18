import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ChatPage from './routes/chat/chatPage'
import Login from './routes/login/login'
import SignUp from './routes/signup/signup'
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Login/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/signup",
          element: <SignUp/>
        },
        {
          path: "/chats",
          element: <ChatPage/>
        },
        {
          path: '*',
          element: <Login/>
        }
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
