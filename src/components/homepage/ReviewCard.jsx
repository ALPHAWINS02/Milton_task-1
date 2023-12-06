import React from "react";
import  { ReviewData } from '../../assets/data/ReviewData';

const ReviewCard = ({ reviews }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 max-w-md gap-3">
          <div className="flex items-start justify-between">
            <img
              src={review.profileImage}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4">
              <p className="font-bold">{review.title}</p>
            </div>
            <div className="flex items-center text-yellow-500">
              {"⭐".repeat(review.rating)}
            </div>
          </div>

          <p className=" text-left">{review.reviewText}</p>

          <div className="flex justify-between mt-4">
            <p>{review.username}</p>
            <p>{review.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
