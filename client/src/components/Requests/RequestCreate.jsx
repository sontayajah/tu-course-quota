import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function RequestCreate() {
    const navigate = useNavigate();

    const [value, setValue] = useState(
        {
            title: "",
            description: "",
            courseId: "",
            date: "",
        }
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:3000/requests/create", value)
            .catch((err) => console.log(err))

        navigate("/requests")
    }

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="courseId" placeholder='courseId' onChange={handleChange} />
                <input type="text" name="title" placeholder='title' onChange={handleChange} />
                <input type="text" name="description" placeholder='description' onChange={handleChange} />
                <button to="/requests" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RequestCreate