import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleAddService = async (data) => {
        try {
            const service = {
                title: data.title,
                companyName: data.companyName,
                website: data.website,
                image: data.image, 
                category: data.category,
                description: data.description,
                price: data.price,
                addedDate: new Date(),
                userEmail: user?.email
            };

            await axios.post('http://localhost:3000/api/services', service);

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Service added successfully',
                showConfirmButton: false,
                timer: 1500
            });

            navigate('/services');
        } catch (err) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'An error occurred',
                text: err.message || 'Please try again later.',
                showConfirmButton: false,
                timer: 2000
                
            });
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-4xl text-center text-gray-800 font-semibold mb-6">Add A Service</h2>
            <form onSubmit={handleSubmit(handleAddService)} className="space-y-6">

                <div className="form-control">
                    <label className="label"> <span className="label-text">Service Image URL</span></label>
                    <input 
                        type="text" 
                        {...register("image", { required: "Image URL is required",  pattern: {
                            value: /^(http|https):\/\/[^ "]+$/,
                            message: "Invalid URL",
                        }, })} 
                        className="input input-bordered w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label"> <span className="label-text">Service Title</span></label>
                    <input 
                        type="text" 
                        {...register("title", { required: "Title is required" })} 
                        className="input input-bordered w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label"> <span className="label-text">Company Name</span></label>
                    <input 
                        type="text" 
                        {...register("companyName", { required: "Company Name is required" })} 
                        className="input input-bordered w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label"> <span className="label-text">Website</span></label>
                    <input 
                        type="text" 
                        {...register("website", { required: "Website is required",  pattern: {
                            value: /^(http|https):\/\/[^ "]+$/,
                            message: "Invalid URL",
                        }, })} 
                        className="input input-bordered w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    {errors.website && <p className="text-red-500 text-sm">{errors.website.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select 
                        {...register("category", { required: "Category is required" })}
                        className="select select-bordered w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option disabled selected>Select a category</option>
                        <option>Food</option>
                        <option>Transport</option>
                        <option>IT</option>
                    </select>
                    {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <textarea 
                        {...register("description", { required: "Description is required" })}
                        className="textarea textarea-bordered w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                        placeholder="Enter a detailed description" />
                    {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input 
                        type="text" 
                        {...register("price", { required: "Price is required" })} 
                        className="input input-bordered w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                </div>

                <button 
                    type="submit" 
                    className="btn btn-accent w-full py-2 rounded-lg text-white font-semibold bg-indigo-500 hover:bg-indigo-600 transition duration-300">
                    Add Service
                </button>
            </form>
        </div>
    );
};

export default AddService;
