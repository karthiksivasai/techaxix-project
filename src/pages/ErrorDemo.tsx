import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const ErrorDemo = () => {
  const errorPages = [
    {
      code: "404",
      title: "Page Not Found",
      description: "Page you're looking for doesn't exist",
      path: "/error/404",
    },
    {
      code: "500",
      title: "Internal Server Error",
      description: "Something went wrong on our side",
      path: "/error/500",
    },
    {
      code: "403",
      title: "Access Forbidden",
      description: "You don't have permission to access this page",
      path: "/error/403",
    },
    {
      code: "OFFLINE",
      title: "You're Offline",
      description: "Check your internet connection",
      path: "/error/offline",
    },
    {
      code: "TIMEOUT",
      title: "Request Timeout",
      description: "The request is taking too long",
      path: "/error/timeout",
    },
    {
      code: "503",
      title: "Under Maintenance",
      description: "We're upgrading our systems",
      path: "/error/maintenance",
    },
    {
      code: "SECURITY",
      title: "Security Alert",
      description: "Suspicious activity detected",
      path: "/error/security",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1A30]">
      {/* Header */}
      <header className="bg-[#1a2a40] border-b border-[#2E86FF]/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Logo variant="header" showTagline={false} />
            <Link
              to="/"
              className="text-white hover:text-[#5AB1FF] transition-colors font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Error Pages Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive collection of professional error pages
            designed with the Techaxis Consulting brand aesthetic. Each page
            features unique illustrations, clear messaging, and helpful
            navigation options.
          </p>
        </div>

        {/* Error Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {errorPages.map((error) => (
            <div
              key={error.code}
              className="bg-[#1a2a40] border border-[#2E86FF]/20 rounded-lg p-6 hover:border-[#2E86FF]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#2E86FF]/10"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#2E86FF] to-[#5AB1FF] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">
                    {error.code}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {error.title}
                </h3>

                <p className="text-gray-400 mb-4">{error.description}</p>

                <Link
                  to={error.path}
                  className="inline-block bg-gradient-to-r from-[#2E86FF] to-[#5AB1FF] text-white px-6 py-2 rounded-lg font-semibold hover:from-[#1E76EF] hover:to-[#4AA1EF] transition-all duration-300 hover:shadow-lg hover:shadow-[#2E86FF]/25"
                >
                  View Page
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Design Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#2E86FF] to-[#5AB1FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Brand Consistent
              </h3>
              <p className="text-gray-400">
                Matches Techaxis Consulting's dark navy theme with blue
                gradients and red accents
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF4D4D] to-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Interactive Elements
              </h3>
              <p className="text-gray-400">
                Animated illustrations, floating elements, and smooth
                transitions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#5AB1FF] to-[#2E86FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧭</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                User Navigation
              </h3>
              <p className="text-gray-400">
                Clear action buttons and multiple navigation options to prevent
                users from feeling stuck
              </p>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-16 bg-[#1a2a40] border border-[#2E86FF]/20 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Technical Implementation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-[#5AB1FF] mb-3">
                Components
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Base ErrorPage component with consistent styling</li>
                <li>• Individual error page implementations</li>
                <li>• ErrorBoundary for React error catching</li>
                <li>• Network status monitoring hook</li>
                <li>• Error page router for dynamic display</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#5AB1FF] mb-3">
                Features
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Responsive design for all devices</li>
                <li>• Offline detection and handling</li>
                <li>• Custom tech-themed illustrations</li>
                <li>• Smooth animations and transitions</li>
                <li>• Accessibility-focused design</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ErrorDemo;
