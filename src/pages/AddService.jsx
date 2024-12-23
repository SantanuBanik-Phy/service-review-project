import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet';

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

            await axios.post('https://b10-a11-server.vercel.app/api/services', service);

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
        <div className="max-w-4xl my-10 mx-auto p-6 bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-2xl rounded-lg md:p-8 sm:p-4">
            <h2 className="text-4xl text-center font-extrabold mb-6">Add A Service</h2>
            <form onSubmit={handleSubmit(handleAddService)} className="space-y-6">

                <div className="form-control">
                    <label className="label text-lg font-medium">Service Image URL</label>
                    <input 
                        type="text" 
                        {...register("image", {
                            required: "Image URL is required",  
                            pattern: {
                                value: /^(http|https):\/\/[^ ""]+$/,
                                message: "Invalid URL",
                            },
                        })} 
                        className="input input-bordered w-full rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-white" 
                        placeholder="Enter image URL"
                    />
                    {errors.image && <p className="text-red-200 text-sm mt-1">{errors.image.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label text-lg font-medium">Service Title</label>
                    <input 
                        type="text" 
                        {...register("title", { required: "Title is required" })} 
                        className="input input-bordered w-full rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-white" 
                        placeholder="Enter service title"
                    />
                    {errors.title && <p className="text-red-200 text-sm mt-1">{errors.title.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label text-lg font-medium">Company Name</label>
                    <input 
                        type="text" 
                        {...register("companyName", { required: "Company Name is required" })} 
                        className="input input-bordered w-full rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-white" 
                        placeholder="Enter company name"
                    />
                    {errors.companyName && <p className="text-red-200 text-sm mt-1">{errors.companyName.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label text-lg font-medium">Website</label>
                    <input 
                        type="text" 
                        {...register("website", {
                            required: "Website is required",  
                            pattern: {
                                value: /^(http|https):\/\/[^ ""]+$/,
                                message: "Invalid URL",
                            },
                        })} 
                        className="input input-bordered w-full rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-white" 
                        placeholder="Enter website URL"
                    />
                    {errors.website && <p className="text-red-200 text-sm mt-1">{errors.website.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label text-lg font-medium">Category</label>
                    <select 
                        {...register("category", { required: "Category is required" })}
                        className="select select-bordered w-full rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-white">
                       <option disabled selected>Select a category</option>
<option value="Food">Food</option>
<option value="Transport">Transport</option>
<option value="IT">IT</option>
<option value="Health">Health</option>
<option value="Education">Education</option>
<option value="Entertainment">Entertainment</option>
<option value="Finance">Finance</option>
<option value="Real Estate">Real Estate</option>
<option value="Hospitality">Hospitality</option>
<option value="Travel">Travel</option>
<option value="Fitness">Fitness</option>
<option value="Beauty & Wellness">Beauty & Wellness</option>
<option value="Retail">Retail</option>
<option value="Legal">Legal</option>
<option value="Home Services">Home Services</option>
<option value="Automotive">Automotive</option>
<option value="Technology">Technology</option>
<option value="Logistics">Logistics</option>
<option value="Media & Advertising">Media & Advertising</option>
<option value="Agriculture">Agriculture</option>
<option value="Construction">Construction</option>
<option value="Energy & Utilities">Energy & Utilities</option>
<option value="Public Services">Public Services</option>
<option value="Non-Profit">Non-Profit</option>
<option value="Telecommunications">Telecommunications</option>
<option value="Sports & Recreation">Sports & Recreation</option>
<option value="Insurance">Insurance</option>
<option value="E-commerce">E-commerce</option>
<option value="Event Management">Event Management</option>
<option value="Pet Care">Pet Care</option>
<option value="Luxury Services">Luxury Services</option>

                    </select>
                    {errors.category && <p className="text-red-200 text-sm mt-1">{errors.category.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label text-lg font-medium">Description</label>
                    <textarea 
                        {...register("description", { required: "Description is required" })}
                        className="textarea textarea-bordered w-full rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-white" 
                        placeholder="Enter a detailed description"
                    ></textarea>
                    {errors.description && <p className="text-red-200 text-sm mt-1">{errors.description.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label text-lg font-medium">Price</label>
                    <input 
                        type="number" 
                        {...register("price", { required: "Price is required" })} 
                        className="input input-bordered w-full rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-white" 
                        placeholder="Enter service price"
                    />
                    {errors.price && <p className="text-red-200 text-sm mt-1">{errors.price.message}</p>}
                </div>

                <button 
                    type="submit" 
                    className="btn w-full py-3 rounded-lg font-semibold bg-white text-indigo-600 hover:bg-indigo-200 hover:text-indigo-800 transition duration-300">
                    Add Service
                </button>
            </form>
            <Helmet>
                <title>AddService | Service Review</title>
            </Helmet>
        </div>
    );
};

export default AddService;
