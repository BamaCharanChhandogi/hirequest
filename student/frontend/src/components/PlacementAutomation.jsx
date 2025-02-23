import React from "react";
import { Link } from "react-router-dom";

const PlacementAutomation = () => {
  return (
    <section className="py-20 mx-8 ">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Digitise & Automate Placements Online
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Effortlessly streamline your campus placement process by accessing the
          latest job openings, managing student data, and securing interviews,
          all with the aim of achieving a{" "}
          <strong>100% campus placement success rate.</strong>
        </p>
      </div>

      {/* Two Columns Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Student Section */}
        <div className="bg-yellow-50 p-8 rounded-2xl shadow-md border border-yellow-200">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="/images/icons/student.png"
              alt="Student"
              className="h-14 w-14"
            />
            <h3 className="text-2xl font-bold text-gray-900">Students</h3>
          </div>
          <p className="text-gray-700">
            Discover new opportunities, learn and practice on the go, prepare
            better for interviews, and apply for jobs seamlessly.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-2">
              <span className="h-3 w-3 bg-green-500 rounded-full"></span>
              <span>Apply for jobs effortlessly</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
              <span>Get job updates & notifications</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
              <span>Track placement progress</span>
            </li>
          </ul>
          <a href="/register" className="cursor-pointer">
            <button className="mt-6 cursor-pointer px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
              Register as Student
            </button>
          </a>
        </div>

        {/* Placement Coordinator Section */}
        <div className="bg-purple-50 p-8 rounded-2xl shadow-md border border-purple-200">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="/images/icons/admin.png"
              alt="University"
              className="h-14 w-14"
            />
            <h3 className="text-2xl font-bold text-gray-900">
              Placement Coordinator
            </h3>
          </div>
          <p className="text-gray-700">
            Manage student applications, track job listings, and streamline the
            placement process efficiently.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-2">
              <span className="h-3 w-3 bg-green-500 rounded-full"></span>
              <span>Post & manage job listings</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
              <span>Track applicants & hiring progress</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
              <span>Evaluate & select candidates</span>
            </li>
          </ul>
          <a href="/register" className="cursor-pointer">
            <button className="mt-6 px-6 py-3 cursor-pointer bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition">
              Register as Coordinator
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlacementAutomation;
