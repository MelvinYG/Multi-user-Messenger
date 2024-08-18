import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatPage from './routes/chat/chatPage'
import Login from './routes/login/login'
import SignUp from './routes/signup/signup'
import { Layout, RequiredAuth } from "./routes/layout/layout";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Login />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          path: "/chats",
          element: <ChatPage />
        },
        {
          path: '*',
          element: <Login />
        }
      ]
    },
    {
      path: "/",
      element: <RequiredAuth></RequiredAuth>,
      children: [
        {
          path: "/chats",
          element: <ChatPage />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
