import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Response & { data?: string };

  const errorMessage = error?.data || "Unknown error occurred.";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="max-w-md text-center">
        <img
          src="/pic8269428.png"
          alt="Cover of the boardgame 'Oh no'"
          className="mx-auto mb-6 h-48"
        />

        <p className="mt-2 text-4xl text-gray-700">{errorMessage}</p>

        {error?.status && (
          <p className="mt-2 text-sm text-gray-500">
            Error code: {error.status}
          </p>
        )}

        {/* Back to Home Button */}
        <Link to="/" className="mt-6 btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
