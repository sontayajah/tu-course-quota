import { useState, useEffect } from 'react'
import axios from 'axios'
import { format } from 'date-fns'

function RequestsList() {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/requests")
      .then((res) => setRequests(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div className="grid grid-cols-4 mt-8 mx-8 justify-items-center rounded-lg gap-y-8">
        {requests.map((request) => (
          <div key={request._id} className="w-[300px] drop-shadow-lg">
            <div className="bg-white flex justify-between rounded-t-lg text-blue-800">
              <p className="bg-sky-300 font-bold px-4 py-1 rounded-lg">คำร้องเพิ่มเติม</p>
              <p className="bg-sky-300 font-bold px-4 py-1 rounded-lg">{request.amount}</p>
            </div>
            <div className="px-4 py-4 bg-white">
              <p className="font-bold text-lg">{request.courseId.toUpperCase()}</p>
              <p className="text-sm">{request.courseName.toUpperCase()}</p>
            </div>
            <div className="bg-sky-300 px-4 py-4 text-blue-800">
              <p className="font-bold">Title: <span className="font-normal">{request.title}</span></p>
              <p className="font-bold">Date: <span className="font-normal"><time>{format(new Date(request.date), 'dd MMM yyyy hh:mm:ss')}</time></span></p>
            </div>
            <div className="bg-sky-300 rounded-b-lg px-4 pb-3 flex justify-end">
              <button className="bg-emerald-500 px-4 py-1 rounded-lg font-bold">ลงชื่อ</button>
            </div>
          </div>
        ))}
      </div>
      {requests.length === 0 && (<div className="flex justify-center mt-8 text-lg">ไม่พบรายวิชา</div>)}
    </>
  )
}

export default RequestsList