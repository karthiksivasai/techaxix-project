import { Link } from "react-router-dom";
import "./LogoCustom.css";

interface LogoProps {
  variant?: "header" | "footer";
  showTagline?: boolean;
  className?: string;
  useRouter?: boolean;
}

const Logo = ({
  variant = "header",
  showTagline = true,
  className = "",
  useRouter = true,
}: LogoProps) => {
  const isHeader = variant === "header";

  const logoContent = (
    <>
      {/* Logo Image */}
      <div className="flex-shrink-0">
        <img
          src="/logo.png"
          alt="Techaxis Consulting Logo"
          className={
            isHeader
              ? "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain"
              : "w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
          }
          onLoad={() => {
            console.log("Logo loaded successfully");
          }}
          onError={(e) => {
            console.error("Logo failed to load:", e);
            // Fallback to text logo if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = "block";
          }}
        />
        {/* Fallback text logo */}
        <div
          className={
            isHeader
              ? "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-gradient-brand rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xs md:text-sm lg:text-base xl:text-lg"
              : "w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 bg-gradient-brand rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm md:text-base lg:text-lg xl:text-xl"
          }
          style={{ display: "none" }}
        >
          TC
        </div>
      </div>

      {/* Company Name and Tagline */}
      <div className="flex flex-col -ml-1">
        <h1
          className={`company-name font-bold ${isHeader ? "text-xs md:text-sm lg:text-base xl:text-lg text-foreground" : "text-base md:text-lg lg:text-xl text-primary-foreground"}`}
        >
          Techaxis Consulting Private Limited
        </h1>
        {showTagline && (
          <div className="flex justify-start mt-1">
            <p
              className={`company-tagline text-xs md:text-xs lg:text-xs leading-tight ${isHeader ? "text-gradient-brand font-semibold" : "text-accent"}`}
            >
              ...AXIS OF POSSIBILITIES
            </p>
          </div>
        )}
      </div>
    </>
  );

  if (useRouter) {
    return (
      <Link
        to="/"
        className={`techaxis-logo ${isHeader ? "flex items-center space-x-1" : "flex flex-col items-center"} ${className}`}
      >
        {logoContent}
      </Link>
    );
  }

  return (
    <div
      className={`techaxis-logo ${isHeader ? "flex items-center space-x-1" : "flex flex-col items-center"} ${className}`}
    >
      {logoContent}
    </div>
  );
};

export default Logo;