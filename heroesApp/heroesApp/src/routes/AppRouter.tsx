import { Route, Routes } from "react-router-dom"
import { Login } from "../components/screens/Login/Login"
import { Home } from "../components/screens/Home/Home"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />

    </Routes>
 )
}
