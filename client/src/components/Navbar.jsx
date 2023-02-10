import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="py-4 px-8 flex items-center justify-between">
            <div className="flex items-center gap-12">
                <div className="flex items-center gap-4">
                    <img src="/logo.png" className="w-12" />
                    <Link to="/" className="text-xl font-bold select-none">TU COURSE QUOTA</Link>
                </div>
                <div className="flex gap-12">
                    <Link to="/" className="font-medium hover:cursor-pointer hover:text-gray-600">หน้าแรก</Link>
                    <Link to="/courses" className="font-medium hover:cursor-pointer hover:text-gray-600">รายวิชาโควตา</Link>
                    <Link to="/requests" className="font-medium hover:cursor-pointer hover:text-gray-600">แบบสำรวจ</Link>
                    <Link to="#" className="font-medium hover:cursor-pointer hover:text-gray-600">รีวิวรายวิชา</Link>
                </div>
            </div>
            <Link to="/" className="px-8 py-2 bg-black text-white rounded-md hover:cursor-pointer active:bg-white active:text-black active:border active:border-black">เข้าสู่ระบบ</Link>
        </nav>
    )
}

export default Navbar