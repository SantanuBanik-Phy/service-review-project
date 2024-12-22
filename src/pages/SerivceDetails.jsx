import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { AuthContext } from '../provider/AuthProvider.jsx';
import ReviewCard from '../Components/ReviewCard.jsx';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [service, setService] = useState({});
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [userRating, setUserRating] = useState(0);
    const [reviewError, setReviewError] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/api/services/${id}`)
            .then((res) => res.json())
            .then((data) => setService(data))
            .catch((error) => console.error(error));
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/reviews/service/${id}`)
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error(error));
    }, [id, refresh]);

    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.review.value.trim();

        if (!reviewText || userRating === 0) {
            setReviewError('Please provide a review text and rating.');
            return;
        }
        setReviewError('');

        const review = {
            serviceId: id,
            serviceName: service.title,
            reviewerName: user?.displayName,
            reviewerEmail: user?.email,
            reviewerPhoto: user?.photoURL,
            reviewText,
            rating: userRating,
            reviewDate: new Date().toISOString(),
        };

        fetch('http://localhost:3000/api/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    form.reset();
                    setUserRating(0);
                    setRefresh(!refresh);
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="py-10 px-4 lg:px-20">
            <Helmet>
                <title>{`${service.title || 'Loading...'} - Service Details`}</title>
            </Helmet>

            <div className="card bg-base-100 shadow-xl flex flex-col lg:flex-row">
                <PhotoProvider>
                    <PhotoView src={service.image}>
                        <img
                            className="w-full lg:w-1/2 object-cover rounded-t-lg lg:rounded-l-lg"
                            src={service.image}
                            alt={service.title || 'Service Image'}
                        />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body p-6 lg:p-10">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <p className="text-xl font-semibold mb-2">Price: ${service.price}</p>
                </div>
            </div>

            <div className="my-20">
                <h2 className="text-4xl text-center font-semibold mb-10">
                    Reviews ({reviews.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <ReviewCard key={review._id} review={review} showActions={false} />
                    ))}
                </div>
            </div>

            {user && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-4xl text-center font-semibold mb-6">Add Your Review</h2>
                    <form onSubmit={handleAddReview} className="space-y-6">
                        <textarea
                            name="review"
                            className="textarea textarea-bordered w-full h-24 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Write your review here (Required)"
                        ></textarea>
                        <div className="flex flex-col items-center">
                            <label className="text-lg font-medium mb-2">
                                Rate this service (Required):
                            </label>
                            <Rating
                                value={userRating}
                                onChange={setUserRating}
                                style={{ maxWidth: '200px' }}
                            />
                        </div>
                        {reviewError && <p className="text-red-500">{reviewError}</p>}
                        <button type="submit" className="btn btn-primary w-full">
                            Submit Review
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ServiceDetails;
