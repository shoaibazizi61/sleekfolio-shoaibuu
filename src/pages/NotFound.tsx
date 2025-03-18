
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold font-montserrat mb-4 text-gradient">404</h1>
        <p className="text-xl text-foreground/80 mb-6">
          Oops! Looks like the page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:shadow-primary/20 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
