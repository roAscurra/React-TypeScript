import { useState } from "react"
import { GiftList } from "./components/GiftList/GiftList"
import { NavBar } from "./components/ui/Navbar/NavBar"

interface IGift {
  urlGift : string,
  title : string
}

function App() {
  const [gift, setGift] = useState<IGift>([]); //estado que contiene el gift

  return (
    <>
    <NavBar setGift={setGift} />
    <GiftList gift={gift} />
    </>
  )
}

export default App
