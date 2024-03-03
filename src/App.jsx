import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./Home/Home"
import Editing from "./Photo editing/Editing"

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photoEditing" element={<Editing />} />
      </Routes>
    </Layout>
  )
}

export default App
