// pages/VerificationPanel.js
"use client";
import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Link from "next/link";

const SingleInfluencerVerificationPage = () => {
  return (
    <div className="p-5 h-screen">
      <div className="flex-1">
        <button
          className="text-gray-600 mb-5 flex items-center hover:underline"
          onClick={() => history.back()}
        >
          &larr; Back to all verifications
        </button>
      </div>

      <div className="flex justify-around items-center pt-10">
        <div className="shadow-lg rounded-md overflow-clip">
          <Image
            src="/logo.png" // replace with actual path
            alt="Government ID"
            width={300}
            height={250}
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <div className="flex items-start gap-3">
            <h1 className="text-3xl font-semibold mb-2">John Doe</h1>
            <span className="inline-block bg-yellow-400 text-black py-1 px-2 rounded mb-5">
              Influencer
            </span>
          </div>
          <p className="text-gray-500 mb-5">Tema, Ghana</p>

          <div className="text-gray-700 mb-2">
            <strong>Joined:</strong> 1st August, 2024
          </div>
          <div className="text-gray-700 mb-2">
            <strong>Phone:</strong> 0559911770
          </div>
          <div className="text-gray-700 mb-2">
            <strong>Website:</strong>{" "}
            <Link
              href="http://www.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.example.com
            </Link>
          </div>
          <div className="text-gray-700 mb-10">
            <strong>Address:</strong> VQ-20 Crimson Road
          </div>

          <div className="flex space-x-4">
            <button className="bg-green-500 text-white py-2 px-4 rounded flex items-center hover:bg-green-600">
              <FaCheckCircle className="mr-2" /> Approve
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded flex items-center hover:bg-red-600">
              <FaTimesCircle className="mr-2" /> Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInfluencerVerificationPage;
