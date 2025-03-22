import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Validates Gmail email addresses only

    if (!email.match(emailPattern)) {
      setError("Please enter a valid Gmail address (e.g., example@gmail.com).");
      setSuccess(false);
    } else {
      setError(""); // Clear previous errors
      setLoading(true); // Set loading state

      try {
        // Send the email to backend
        const response = await fetch("http://localhost:5001/send-email", { // Ensure the port matches the backend
          method: "POST", // POST request to send email
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setSuccess(true); // Show success message
          setError(""); // Clear any previous errors
          setTimeout(() => setSuccess(false), 5000); // Hide success message after 5 seconds
        } else {
          setError("Failed to subscribe. Please try again.");
          setSuccess(false); // Clear success message
        }
      } catch (error) {
        setError("An error occurred. Please try again later.");
        setSuccess(false); // Clear success message
      } finally {
        setLoading(false); // Clear loading state
      }
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Reset error when the email is being typed
    setSuccess(false); // Clear success message when typing new email
  };

  return (
    <section className="bg-gray-100 py-10 md:py-12">
      <div className="container mx-auto text-center px-6">
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
          Subscribe to Our Newsletter
        </h2>

        <p className="mt-6 mx-15 text-center text-xl lg:text-1.5xl font-semibold text-gray-500">
          Stay updated with the latest news about anything happening in our community. Be the first to know about
        </p>
        <p className="mt-2 mx-15 text-center text-xl lg:text-1.5xl font-semibold text-gray-500">
          exciting updates, peer achievements, and much more!
        </p>

        <form onSubmit={handleSubmit} className="flex justify-center items-center mt-6">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="p-3 w-72 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            disabled={loading} // Disable input while loading
          />
          <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline ml-2"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {error && <p className="mt-4 text-red-500">{error}</p>}
        {success && (
          <p className="mt-4 text-green-500">
            Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  );
};

export default Subscribe;