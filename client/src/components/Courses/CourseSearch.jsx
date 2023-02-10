function CourseSearch({ setSearchText }) {

    return (
        <div className="px-60 w-auto box-border">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onChange={(e) => setSearchText(e.target.value)} type="search" className="focus:outline-none block w-full p-4 pl-14 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:ring-1" placeholder="ค้นหารายวิชาด้วย รหัสวิชา หรือ ชื่อวิชาภาษาอังกฤษเท่านั้น" />
            </div>
        </div>
    )
}

export default CourseSearch