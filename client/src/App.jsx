import { Route, Routes } from "react-router-dom"
import Courses from "./components/Courses/Courses"
import Layout from "./components/Layout"
import Requests from "./components/Requests/Requests"
import Reviews from "./components/Reviews"
import Index from "./components/Index"
import RequestCreate from "./components/Requests/RequestCreate"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/requests/create" element={<RequestCreate />} />
        <Route path="/reviews" element={<Reviews />} />
      </Route>
    </Routes>
  )
}

export default App