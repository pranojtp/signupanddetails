import Signup from "./components/Signup"
import Personaldetails from "./components/Personaldetails"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddTeamMembers from "./components/Addteammembers"
function App() {


  return (
    <>
      <div className="flex items-center justify-center h-screen p-5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/personaldetails" element={<Personaldetails />} />
            <Route path="/addmembers" element={<AddTeamMembers />} />
          </Routes>

        </BrowserRouter>
      </div>

    </>
  )
}

export default App
