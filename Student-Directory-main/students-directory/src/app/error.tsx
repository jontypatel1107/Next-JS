
"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error-page">
      <div className="error-card">
        <div className="error-icon">!</div>

        <h1>Oops! Something went wrong.</h1>

        <p>
          We couldn't load this page. Please try again.
        </p>

        <button onClick={() => reset()}>
          Try Again
        </button>
      </div>

      <style jsx>{`
        .error-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: #f8fafc;
          font-family: Arial, sans-serif;
        }

        .error-card {
          max-width: 450px;
          text-align: center;
          background: white;
          border: 1px solid #e5eaf1;
          border-radius: 14px;
          padding: 40px 28px;
        }

        .error-icon {
          width: 55px;
          height: 55px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 20px;
          border-radius: 50%;
          background: #fce7f3;
          color: #c0006d;
          font-size: 32px;
          font-weight: bold;
        }

        h1 {
          color: #192846;
          font-size: 25px;
          margin-bottom: 12px;
        }

        p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
        }

        button {
          margin-top: 16px;
          padding: 12px 24px;
          border: none;
          border-radius: 7px;
          background: #192846;
          color: white;
          font-size: 14px;
          cursor: pointer;
        }

        button:hover {
          background: #30466c;
        }
      `}</style>
    </div>
  );
}
