import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white text-center px-4">
      <div>
        <h1 className="text-8xl font-heading font-bold text-[#10263F] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button to="/" variant="primary">
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
