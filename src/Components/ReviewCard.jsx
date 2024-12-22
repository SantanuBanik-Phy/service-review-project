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
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex items-center gap-5">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={reviewerPhoto} alt="Reviewer Avatar" />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl">{reviewerName}</h4>
                            <p className="font-semibold">{serviceName}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                        <p className="font-semibold">Rating:</p>
                        <div className="rating">
                            {Array.from({ length: parseInt(rating) }, (_, i) => (
                                <FaStar key={i} className="text-yellow-400" />
                            ))}
                        </div>
                    </div>
                    <p>{reviewText}</p>
                    <div className="card-actions justify-end mt-3">
                        <p className="font-semibold">{new Date(reviewDate).toLocaleDateString()}</p>
                        {showActions && (
                            <div className="flex gap-2">
                                <button onClick={() => setModalOpen(true)} className="btn btn-ghost btn-sm">
                                    <FaEdit className="text-xl" />
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
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-semibold mb-4">Update Review</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                submitUpdate();
                            }}
                            className="space-y-4"
                        >
                            <textarea
                                className="textarea textarea-bordered w-full"
                                value={updatedReviewText}
                                onChange={(e) => setUpdatedReviewText(e.target.value)}
                                placeholder="Update your review text here"
                                required
                            />
                            <div className="flex flex-col items-center">
                                <label className="font-medium mb-2">Update Rating:</label>
                                <Rating
                                    value={updatedRating}
                                    onChange={setUpdatedRating}
                                    style={{ maxWidth: '200px' }}
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
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
