import { Link } from "react-router-dom"
import RequestsList from "./RequestsList"

function Requests() {
  return (
    <div className="mx-8 py-10">
      <div className="flex justify-between mx-16">
        <h1 className="text-4xl font-bold">แบบสำรวจเพิ่มเติม</h1>
        <Link to="./create" className="bg-red-400 text-white px-6 py-2 rounded-lg font-bold">เพิ่มคำร้องขอ +</Link>
      </div>
      <div>
        <RequestsList />
      </div>
    </div>
  )
}

export default Requests