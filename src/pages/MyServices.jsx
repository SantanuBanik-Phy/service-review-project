import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import useAxiosSecure from "../hook/useAxiosSecure";

const MyServices = () => {
    const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [editService, setEditService] = useState(null);


  // Fetch user's services
  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axiosSecure
        .get(`/api/services?email=${user.email}`,)
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

  // Filter services by search term
  const filteredServices = services.filter((service) =>
    service?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle update
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
      const response = await axios.put(
        `http://localhost:3000/api/services/${editService._id}`,
        { title, companyName, price, category, website },
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
  
  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/services/${id}`);
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
    <div className="container mx-auto py-8">
        <ToastContainer></ToastContainer>
      <h1 className="text-2xl font-bold mb-6">My Services</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="mb-4">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Search services by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Price</th>
                  <th>Website</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.length > 0 ? (
                  filteredServices.map((service) => (
                    <tr key={service._id}>
                      <td>
                        <img
                          src={service.image || "https://via.placeholder.com/64"}
                          alt={service.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td>{service.title || "N/A"}</td>
                      <td>{service.companyName || "N/A"}</td>
                      <td>${service.price || "N/A"}</td>
                      <td>
                        <a
                          href={service.website || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Visit
                        </a>
                      </td>
                      <td>{service.category || "N/A"}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-warning mr-2"
                          onClick={() => setEditService(service)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-sm btn-error"
                          onClick={() => handleDelete(service._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No services found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      {editService && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Edit Service</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate();
              }}
            >
              {["title", "companyName", "price", "category", "website"].map((field) => (
                <div className="form-control mb-4" key={field}>
                  <label className="label">{field}</label>
                  <input
                    type={field === "price" ? "number" : "text"}
                    className="input input-bordered"
                    value={editService[field] || ""}
                    onChange={(e) =>
                      setEditService({ ...editService, [field]: e.target.value })
                    }
                  />
                </div>
              ))}
              <div className="modal-action">
                <button type="submit" className="btn btn-success">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-error"
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
