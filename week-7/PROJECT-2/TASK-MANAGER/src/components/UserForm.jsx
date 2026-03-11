import { useForm } from "react-hook-form"
import { useState } from "react"

function UserForm(){

    //state to store users
    const [users,setUsers] = useState([])

    const {register, handleSubmit, formState:{errors}, reset} = useForm()

    //form submission
    const submitForm = (obj)=>{

        //add id
        const newUser = {
            ...obj,
            // eslint-disable-next-line react-hooks/purity
            id: Date.now()
        }

        //update users
        setUsers(prevUsers => [...prevUsers, newUser])

        //clear form
        reset()
    }

    return(
        <div className="justify-items-center bg-pink-400 p-3">

            <h1 className="text-2xl p-3">USER REGISTRATION FORM</h1>

            <form onSubmit={handleSubmit(submitForm)}>

                {/* Firstname */}
                <div className="mb-3">
                    <input
                        type="text"
                        {...register("firstname",{required:true,minLength:4})}
                        placeholder="Firstname"
                        className="bg-gray-300 text-black p-3"
                    />

                    {errors.firstname?.type === "required" &&
                        <p className="text-red-950">Firstname is required</p>
                    }

                    {errors.firstname?.type === "minLength" &&
                        <p className="text-red-950">Firstname should be at least 4 characters</p>
                    }
                </div>

                {/* Lastname */}
                <div className="mb-3">
                    <input
                        type="text"
                        {...register("lastname",{required:true,minLength:6})}
                        placeholder="Lastname"
                        className="bg-gray-300 text-black p-3"
                    />

                    {errors.lastname?.type === "required" &&
                        <p className="text-red-950">Lastname is required</p>
                    }

                    {errors.lastname?.type === "minLength" &&
                        <p className="text-red-950">Lastname should be at least 6 characters</p>
                    }
                </div>

                {/* Email */}
                <div className="mb-3">
                    <input
                        type="email"
                        {...register("email",{required:true})}
                        placeholder="Email"
                        className="bg-gray-300 text-black p-3"
                    />

                    {errors.email &&
                        <p className="text-red-950">Email is required</p>
                    }
                </div>

                {/* Date of birth */}
                <div className="mb-3">
                    <input
                        type="date"
                        {...register("dateofbirth",{required:true})}
                        className="bg-gray-300 text-black p-3"
                    />

                    {errors.dateofbirth &&
                        <p className="text-red-950">Date of Birth is required</p>
                    }
                </div>

                <button type="submit" className="bg-amber-300 p-3 text-black">
                    Add new User
                </button>

            </form>

            {/* USERS TABLE */}

            <h1 className="text-2xl p-10">LIST OF USERS</h1>

            <table className="border-collapse border border-gray-400 w-full">

                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-400 p-2">Firstname</th>
                        <th className="border border-gray-400 p-2">Lastname</th>
                        <th className="border border-gray-400 p-2">Email</th>
                        <th className="border border-gray-400 p-2">Date of Birth</th>
                    </tr>
                </thead>

                <tbody>

                    {users.map((obj)=>(
                        <tr key={obj.id}>
                            <td className="border border-gray-400 p-2">{obj.firstname}</td>
                            <td className="border border-gray-400 p-2">{obj.lastname}</td>
                            <td className="border border-gray-400 p-2">{obj.email}</td>
                            <td className="border border-gray-400 p-2">{obj.dateofbirth}</td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    )
}

export default UserForm