import { useState, useEffect } from "react";
import CourseSearch from "./CourseSearch"
import CoursesList from "./CoursesList"
import axios from "axios"

function Courses() {
  const [searchText, setSearchText] = useState('')

  const [courses, setCourses] = useState([])

  const [searchedCourses, setSearchedCourses] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/courses")
      .then((res) => {
        setCourses(res.data)
        setSearchedCourses(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (searchText === '') {
      setSearchedCourses(courses)
    } else {
      const filteredCourses = courses.filter((course) => {
        return course.courseId.toLowerCase().includes(searchText.toLowerCase()) || course.courseName.toLowerCase().includes(searchText.toLowerCase())
      })
      setSearchedCourses(filteredCourses)
    }
  }, [searchText])

  return (
    <div>
      <CourseSearch setSearchText={setSearchText} />
      <CoursesList data={searchedCourses} />
    </div>
  )
}

export default Courses