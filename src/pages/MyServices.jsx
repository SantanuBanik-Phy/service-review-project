import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import useAxiosSecure from "../hook/useAxiosSecure";
import "react-toastify/dist/ReactToastify.css";

const MyServices = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [editService, setEditService] = useState(null);

    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            axiosSecure
                .get(`/api/services?email=${user.email}`)
                .then((response) => {
                    setServices(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching services:", error);
                    toast.error("Failed to fetch services.");
                    setLoading(false);
                });
        }
    }, [user?.email]);

    const filteredServices = services.filter((service) =>
        service?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const fetchServices = async () => {
        setLoading(true);
        try {
            const response = await axiosSecure.get(`/api/services?email=${user.email}`);
            setServices(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching services:", error);
            toast.error("Failed to fetch services.");
            setLoading(false);
        }
    };

    const handleUpdate = async () => {
        if (!editService) {
            toast.error("No service selected for editing.");
            return;
        }

        const { title, companyName, price, category, website } = editService;

        if (!title || !companyName || !price || !category || !website) {
            toast.error("All fields must be filled out.");
            return;
        }

        try {
            const response = await axiosSecure.put(
                `/api/services/${editService._id}`,
                { title, companyName, price, category, website }
            );

            if (response.status === 200) {
                toast.success("Service updated successfully!");
                await fetchServices();
                setEditService(null);
            } else {
                toast.error("Failed to update service. Please try again.");
            }
        } catch (error) {
            console.error("Error updating service:", error);
            toast.error(error.response?.data?.message || "An error occurred.");
        }
    };

    const handleDelete = async (id) => {
        try {
            await axiosSecure.delete(`api/services/${id}`);
            toast.success("Service deleted successfully!");
            setServices((prevServices) =>
                prevServices.filter((service) => service._id !== id)
            );
        } catch (error) {
            console.error("Error deleting service:", error);
            toast.error("Failed to delete service.");
        }
    };

    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <ToastContainer />
            <h1 className="text-4xl font-extrabold text-center mb-6 text-indigo-700">
                My Services
            </h1>
            <div className="mb-6 flex justify-center">
                <input
                    type="text"
                    className="w-full max-w-md p-4 border rounded-lg shadow focus:ring-2 focus:ring-indigo-600 transition"
                    placeholder="Search services by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {loading ? (
                <div className="flex justify-center">
                           <span className="loading loading-infinity loading-lg"></span>
                </div>
            ) : (
                <div className="overflow-x-auto bg-white rounded-lg shadow">
                    <table className="table-auto w-full text-left">
                        <thead className="bg-indigo-700 text-white">
                            <tr>
                                <th className="px-4 py-3">Image</th>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Company</th>
                                <th className="px-4 py-3">Price</th>
                                <th className="px-4 py-3">Website</th>
                                <th className="px-4 py-3">Category</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredServices.length > 0 ? (
                                filteredServices.map((service) => (
                                    <tr key={service._id} className="hover:bg-gray-100">
                                        <td className="px-4 py-4">
                                            <img
                                                src={service.image || "https://via.placeholder.com/64"}
                                                alt={service.title}
                                                className="w-16 h-16 object-cover rounded-lg"
                                            />
                                        </td>
                                        <td className="px-4 py-4">{service.title || "N/A"}</td>
                                        <td className="px-4 py-4">{service.companyName || "N/A"}</td>
                                        <td className="px-4 py-4">${service.price || "N/A"}</td>
                                        <td className="px-4 py-4">
                                            <a
                                                href={service.website || "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                Visit
                                            </a>
                                        </td>
                                        <td className="px-4 py-4">{service.category || "N/A"}</td>
                                        <td className="px-4 py-4 flex flex-col sm:flex-row sm:items-center">
                                            <button
                                                className="bg-yellow-500 text-white py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-2 hover:bg-yellow-600 transition"
                                                onClick={() => setEditService(service)}
                                            >
                                                Update
                                            </button>
                                            <button
                                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                                                onClick={() => handleDelete(service._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center py-4">
                                        No services found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {editService && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-bold mb-4 text-indigo-700">Edit Service</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleUpdate();
                            }}
                        >
                            {["title", "companyName", "price", "category", "website"].map((field) => (
                                <div className="mb-4" key={field}>
                                    <label className="block font-medium mb-2 capitalize">
                                        {field}
                                    </label>
                                    <input
                                        type={field === "price" ? "number" : "text"}
                                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-600 transition"
                                        value={editService[field] || ""}
                                        onChange={(e) =>
                                            setEditService({ ...editService, [field]: e.target.value })
                                        }
                                    />
                                </div>
                            ))}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition ml-2"
                                    onClick={() => setEditService(null)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyServices;
