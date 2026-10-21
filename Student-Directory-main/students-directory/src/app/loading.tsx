import "./loading.css";

export default function Loading() {
  return (
    <div className="loading-page">
      <div className="loader"></div>
      <h2>Loading Student Directory...</h2>
      <p>Please wait while we prepare your page.</p>
    </div>
  );
}