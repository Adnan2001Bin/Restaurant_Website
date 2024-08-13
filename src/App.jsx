import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./apppwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch;

  useEffect(() => {
    authService.getCurrentUser()
    .then((useData) => {
      if (useData) {
        dispatch(login({useData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">
        <Header />
        <Footer />
      </div>
    </div>
  ) : null
}

export default App;
