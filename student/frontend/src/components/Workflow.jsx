import React from "react";

const Workflow = () => {
  return (
    <div className="w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 500"
        className="w-full h-full"
      >
        <defs>
          <linearGradient
            id="coordinatorGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" style={{ stopColor: "#4776E6" }} />
            <stop offset="100%" style={{ stopColor: "#8E54E9" }} />
          </linearGradient>

          <linearGradient
            id="studentGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" style={{ stopColor: "#00B09B" }} />
            <stop offset="100%" style={{ stopColor: "#96C93D" }} />
          </linearGradient>
        </defs>

        {/* Main Title */}
        <text
          x="500"
          y="50"
          textAnchor="middle"
          fontSize="24"
          fontWeight="bold"
          fill="#333"
        >
          Job Application Workflow
        </text>

        {/* Coordinator Section */}
        <g transform="translate(250,300)">
          <circle
            cx="0"
            cy="0"
            r="180"
            fill="none"
            stroke="#eee"
            strokeWidth="2"
          />

          <text
            x="0"
            y="-10"
            textAnchor="middle"
            fontSize="20"
            fill="#4776E6"
            fontWeight="bold"
          >
            Coordinator Workflow
          </text>

          {/* Steps */}
          <text x="25" y="20" textAnchor="end" fill="#333" fontSize="14">
            Add Jobs
          </text>
          <text x="-50" y="40" textAnchor="start" fill="#333" fontSize="14">
            Update Results
          </text>

          <path
            d="M0,-120 A120,120 0 1,1 0,120 A120,120 0 1,1 0,-120"
            fill="none"
            stroke="url(#coordinatorGradient)"
            strokeWidth="2"
            strokeDasharray="10 5"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="100"
              to="0"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Student Section */}
        <g transform="translate(750,300)">
          <circle
            cx="0"
            cy="0"
            r="180"
            fill="none"
            stroke="#eee"
            strokeWidth="2"
          />

          <text
            x="0"
            y="-20"
            textAnchor="middle"
            fontSize="20"
            fill="#00B09B"
            fontWeight="bold"
          >
            Student Workflow
          </text>

          {/* Steps */}
          <text x="35" y="10" textAnchor="end" fill="#333" fontSize="14">
            Apply Jobs
          </text>
          <text x="0" y="30" textAnchor="middle" fill="#333" fontSize="14">
            Take Exam
          </text>
          <text x="-40" y="50" textAnchor="start" fill="#333" fontSize="14">
            Get Selected
          </text>

          <path
            d="M0,-120 A120,120 0 1,1 0,120 A120,120 0 1,1 0,-120"
            fill="none"
            stroke="url(#studentGradient)"
            strokeWidth="2"
            strokeDasharray="10 5"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="100"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Central Connector */}
        <path
          d="M430 300 L570 300"
          stroke="#666"
          strokeWidth="2"
          strokeDasharray="10 5"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="100"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default Workflow;
