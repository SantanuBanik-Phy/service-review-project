import React, { useState } from 'react';
import { FaStar, FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ReviewCard = ({ review, handleDelete, handleUpdate, showActions }) => {
    const { _id, serviceName, reviewerName, reviewerPhoto, reviewText, rating, reviewDate } = review;
    const [modalOpen, setModalOpen] = useState(false);
    const [updatedReviewText, setUpdatedReviewText] = useState(reviewText);
    const [updatedRating, setUpdatedRating] = useState(rating);

    const submitUpdate = () => {
        handleUpdate(_id, updatedReviewText, updatedRating)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Review updated successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });
                setModalOpen(false);
            })
            .catch((err) => {
                console.error('Error updating review:', err);
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to update review',
                    text: 'Please try again later.',
                });
            });
    };

    return (
        <>
            <div className="card w-96 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="card-body p-6">
                    <div className="flex items-center gap-5">
                        <div className="avatar">
                            <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                                <img src={reviewerPhoto} alt="Reviewer Avatar" className="object-cover w-full h-full" />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl text-gray-800">{reviewerName}</h4>
                            <p className="font-semibold text-gray-500">{serviceName}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                        <p className="font-semibold text-gray-700">Rating:</p>
                        <div className="rating">
                            {Array.from({ length: parseInt(rating) }, (_, i) => (
                                <FaStar key={i} className="text-yellow-400" />
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-600 mt-2">{reviewText}</p>
                    <div className="flex justify-between items-center mt-3">
                        <p className="font-semibold text-gray-400">{new Date(reviewDate).toLocaleDateString()}</p>
                        {showActions && (
                            <div className="flex gap-2">
                                <button onClick={() => setModalOpen(true)} className="btn btn-ghost btn-sm">
                                    <FaEdit className="text-xl text-blue-500" />
                                </button>
                                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-sm">
                                    <FaTrashAlt className="text-red-600 text-xl" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Update Review</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                submitUpdate();
                            }}
                            className="space-y-4"
                        >
                            <textarea
                                className="textarea textarea-bordered w-full h-32 p-4 text-lg text-gray-700"
                                value={updatedReviewText}
                                onChange={(e) => setUpdatedReviewText(e.target.value)}
                                placeholder="Update your review text here"
                                required
                            />
                            <div className="flex flex-col items-center">
                                <label className="font-medium mb-2 text-gray-700">Update Rating:</label>
                                <Rating
                                    value={updatedRating}
                                    onChange={setUpdatedRating}
                                    style={{ maxWidth: '200px' }}
                                />
                            </div>
                            <div className="flex justify-end space-x-4 mt-4">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => setModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white ">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ReviewCard;
