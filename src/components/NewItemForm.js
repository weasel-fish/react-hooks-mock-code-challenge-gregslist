import { useState } from "react"

function NewItemForm({addNewItem}) {
    const [formData, setFormData] = useState({
        description: '',
        location: '',
        image: ''
    })

    function handleChange(e) {
        const prop = e.target.name
        const val = e.target.value

        const newData = {
            ...formData,
            [prop]: val
        }

        setFormData(newData)
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            addNewItem(formData)
        }}>
            <h4>Submit a New Item</h4>
            <label>Description:</label>
            <input onChange={handleChange} type='text' name='description' value={formData.description}></input>
            <label>Location:</label>
            <input onChange={handleChange} type='text' name='location' value={formData.location}></input>
            <label>Image URL:</label>
            <input onChange={handleChange} type='text' name='image' value={formData.image}></input>
            <input type='submit'></input>
        </form>
    )
}

export default NewItemForm