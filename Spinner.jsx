import React from 'react';

export default function Spinner({ size = 40, className = '' }) {
    return (
        <div className={`flex items-center justify-center ${className}`} role="status" aria-label="Loading">
            <svg
                className="animate-spin"
                width={size}
                height={size}
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    className="opacity-20"
                    cx="25"
                    cy="25"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="6"
                />
                <path
                    className="text-primary"
                    fill="currentColor"
                    d="M45 25c0-11.046-8.954-20-20-20v6c7.732 0 14 6.268 14 14h6z"
                />
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    );
}
