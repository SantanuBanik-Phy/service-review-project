import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import axios from 'axios';
import useTitle from '../hook/userTitle.jsx';
import ReviewCard from '../Components/ReviewCard';
import { AuthContext } from '../provider/AuthProvider';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useTitle('My Reviews');

    // Fetch user's reviews
    useEffect(() => {
        if (!user?.email) return;

        axios
            .get(`http://localhost:3000/api/reviews?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('service-review-token')}`,
                },
            })
            .then((response) => {
                setReviews(response.data);
            })
            .catch((error) => {
                console.error(error);
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    logOut();
                }
            });
    }, [user?.email, logOut]);

    // Delete review
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This action cannot be undone!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#e3342f',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`http://localhost:3000/api/reviews/${id}`, {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('service-review-token')}`,
                        },
                    })
                    .then((response) => {
                        if (response.data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'The review has been deleted.', 'success');
                            setReviews((prevReviews) =>
                                prevReviews.filter((review) => review._id !== id)
                            );
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting review:', error);
                        Swal.fire('Error!', 'Failed to delete the review. Please try again.', 'error');
                    });
            }
        });
    };

    // Update review
    const handleUpdate = async (id, updatedText, updatedRating) => {
        try {
            const response = await axios.patch(
                `http://localhost:3000/api/reviews/${id}`,
                {
                    reviewText: updatedText,
                    rating: updatedRating,
                },
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('service-review-token')}`,
                    },
                }
            );

            if (response.data.modifiedCount > 0) {
                setReviews((prevReviews) =>
                    prevReviews.map((review) =>
                        review._id === id
                            ? { ...review, reviewText: updatedText, rating: updatedRating }
                            : review
                    )
                );
                return Promise.resolve();
            }
        } catch (error) {
            console.error('Error updating review:', error);
            return Promise.reject(error);
        }
    };

    return (
        <div className="py-10 container mx-auto">
            <Helmet>
                <title>My Reviews - Service Review</title>
            </Helmet>
            <h2 className="text-4xl text-center font-semibold mb-10">
                My Reviews ({reviews.length})
            </h2>
            {reviews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {reviews.map((review) => (
                        <ReviewCard
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                            showActions={true}
                        />
                    ))}
                </div>
            ) : (
                <h2 className="text-2xl text-center font-semibold">No reviews were added</h2>
            )}
        </div>
    );
};

export default MyReviews;
