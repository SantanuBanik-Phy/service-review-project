import React from 'react';

const MeetOurPartners = () => {
    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Meet Our Partners</h2>
            {/* Add partner logos and descriptions here */}
            <div className="flex flex-wrap justify-center gap-5">
                {/* Example partner */}
                <div className="card w-64 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placehold.co/100x100/png" alt="Partner Logo" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Partner Name</h2>
                        <p>Short description of the partner and their contribution.</p>
                    </div>
                </div>
                {/* Add more partners as needed */}
            </div>
        </div>
    );
};

export default MeetOurPartners;