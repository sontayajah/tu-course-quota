import Table from "./Table"

function CoursesList({data}) {
    return (
        <main>
            <div className="mt-8 mx-8">
                <Table data={data} rowsPerPage={10} />
            </div>
        </main>
    )
}

export default CoursesList