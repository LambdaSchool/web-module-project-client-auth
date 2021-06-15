import React, {useState} from 'react'
import axiosWithAuth from '../authorization/axiosAuth'
import axios from 'axios'

const AddFriend = () => {

     const initialValues = {
        name: '',
        age: '',
        email: '',
}
   const [state, setState] = useState({
        name: '',
        age: '',
        email: '',
})

const [formInput, setFormInput] = useState(initialValues)
    const handleChange = evt => {
        setFormInput({
            ...formInput,
            [evt.target.name]: evt.target.value
});
}

const handleSubmit = e => {
        const newFriend = {
            name: formInput.name,
            age: formInput.age,
            email: formInput.email,
}
axiosWithAuth()
        .post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
        const token = localStorage.getItem('token');
        console.log(res)
})
    .catch(err => {
    console.log(err)
})

// eslint-disable-next-line no-undef
setValues(initialValues)
}
return (
<div>
     <h2>New Friend</h2>
        <form onSubmit={handleSubmit}>
            <div className="formDisplay">
                <label>Name</label>
                <br/>
                <input onChange={handleChange} 
                name='name' 
                type='text'
                value={formInput.name}/>
</div>
            <div>
                <label>Age</label>
                <br/>
                <input onChange={handleChange} 
                name ='age' 
                type='number'/>
</div>
            <div>
                <label>Email</label>
                <br/>
                <input onChange={handleChange} 
                name='email' 
                type='email'/>
</div>
    <button onSubmit={handleSubmit}>Add Friend</button>
</form>
</div>
)}
export default AddFriend;
