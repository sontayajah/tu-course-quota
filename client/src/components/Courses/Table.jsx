import { useState } from "react";

import useTable from "./useTable";
import TableFooter from "./TableFooter";

function Table({ data, rowsPerPage }) {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);

    return (
        <>
            <table className="w-full">
                <thead className="text-left bg-red-100 text-black">
                    <tr>
                        <th className="p-4 px-8 w-96">Course</th>
                        <th>Unit</th>
                        <th>Section</th>
                        <th className="w-48">Class Date</th>
                        <th className="w-72">Final Exam</th>
                        <th>Status</th>
                        <th>Review</th>
                        <th>Enroll</th>
                    </tr>
                </thead>
                <tbody>
                    {slice.map((el) => (
                        <tr key={el._id} className="">
                            <td className="px-8 py-4">{el.courseId}<br /><span className="text-sm text-gray-600">{el.courseName}</span></td>
                            <td>{el.courseUnit}</td>
                            <td>{el.courseSection}</td>
                            <td>{el.courseDateTime}</td>
                            <td>{el.courseFinalExam}</td>
                            <td>{el.courseStatus ? <span className="text-emerald-400 font-bold">Open</span> : <span className="text-red-400 font-bold">Close</span>}</td>
                            <td>{el.courseReviewsValue}</td>
                            <td>
                                <form>
                                    <button>ลงทะเบียน</button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {slice.length === 0 && (<div className="flex justify-center mt-8 text-lg">ไม่พบรายวิชา</div>)}
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </>
    );
}

export default Table