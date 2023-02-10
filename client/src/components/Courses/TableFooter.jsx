import React, { useEffect } from "react";

function TableFooter({ range, setPage, page, slice }) {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);

    return (
        <div className="w-full text-center mt-4 mb-8">
            {range.map((el, index) => (
                <button
                    key={index}
                    onClick={() => setPage(el)}
                    className="bg-red-400 text-white py-2 px-4 rounded-lg mx-2"
                >
                    {el}
                </button>
            ))}
        </div>
    );
}

export default TableFooter