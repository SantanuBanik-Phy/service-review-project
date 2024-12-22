import React, { useState } from 'react';
import { FaStar, FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ReviewCard = ({ review, handleDelete }) => {
    const { _id, serviceName, reviewerName, reviewerPhoto, reviewText, rating, reviewDate } = review;
    const [editing, setEditing] = useState(false);
    const [updatedReview, setUpdatedReview] = useState(reviewText);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleUpdate = (id) => {
        fetch(`http://localhost:3000/api/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('service-review-token')}`
            },
            body: JSON.stringify({ reviewText: updatedReview })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Review updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setEditing(false);
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex items-center gap-5'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={reviewerPhoto} alt="Reviewer Avatar" />
                        </div>
                    </div>
                    <div>
                        <h4 className='font-semibold text-xl'>{reviewerName}</h4>
                        <p className='font-semibold'>{serviceName}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 mt-3'>
                    <p className='font-semibold'>Rating:</p>
                    <div className="rating">
                        {Array.from({ length: parseInt(rating) }, (_, i) => (
                            <FaStar key={i} className="text-yellow-400" />
                        ))}
                    </div>
                </div>
                {editing ? (
                    <div>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            value={updatedReview}
                            onChange={(e) => setUpdatedReview(e.target.value)}
                        />
                        <button onClick={() => handleUpdate(_id)} className="btn btn-primary mt-2">Update</button>
                    </div>
                ) : (
                    <p>{reviewText}</p>
                )}
                <div className="card-actions justify-end mt-3">
                    <p className='font-semibold'>{new Date(reviewDate).toLocaleDateString()}</p>
                    <div className='flex gap-2'>
                        <button onClick={handleEdit} className="btn btn-ghost btn-sm"><FaEdit className='text-xl' /></button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-sm"><FaTrashAlt className='text-red-600 text-xl' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
