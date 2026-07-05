import { ChevronRight, Home } from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";

interface BreadcrumbsProps {
  customPath?: string;
}

// Thread-safe lookup cache storing parent-child breadcrumb relationships for maximum performance
const breadcrumbsCache = new Map<string, Array<{ label: string; url: string; isLast: boolean }>>();

export default function Breadcrumbs({ customPath }: BreadcrumbsProps) {
  // Resolve current active path and isolate query variables to prevent routing mismatch
  const pathString = useMemo(() => {
    let path = customPath;
    if (!path) {
      const hash = window.location.hash;
      path = hash.startsWith("#") ? hash.substring(1) : window.location.pathname;
    }
    
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.substring(0, qIndex);
    }
    
    if (!path || path === "/" || path === "/index.html") {
      return "";
    }
    return path;
  }, [customPath]);

  // Memoized resolution of parent-child trails backed by static O(1) cache lookup
  const breadcrumbItems = useMemo(() => {
    if (!pathString) return [];

    if (breadcrumbsCache.has(pathString)) {
      return breadcrumbsCache.get(pathString)!;
    }

    const segments = pathString.split("/").filter(Boolean);
    const items = [
      { label: "Home", url: "#/", isLast: false }
    ];

    let currentAccumulatedPath = "";
    segments.forEach((segment, index) => {
      currentAccumulatedPath += `/${segment}`;
      const isLast = index === segments.length - 1;
      
      // Format label for aesthetics
      let label = segment;
      if (segment === "ux-design") label = "UX Design";
      else if (segment === "brand-strategy") label = "Brand Strategy";
      else if (segment === "web-mechanics") label = "Web Mechanics";
      else if (segment === "cognitive-friction") label = "Cognitive Friction";
      else if (segment === "tactile-haptics") label = "Tactile Haptics";
      else if (segment === "typographic-geometry") label = "Typographic Geometry";
      else if (segment === "chromatic-math") label = "Chromatic Math";
      else if (segment === "elastic-physics") label = "Elastic Physics";
      else if (segment === "layout-stability") label = "Layout Stability";
      else if (segment === "enterprise-ux") label = "Enterprise UX";
      else if (segment === "audit-request") label = "Audit Request";
      else {
        // Capitalize first letters, replace dashes with spaces
        label = segment
          .split("-")
          .map(word => {
            if (word === "apca") return "APCA";
            if (word === "ux") return "UX";
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(" ");
      }

      items.push({
        label,
        url: `#${currentAccumulatedPath}`,
        isLast
      });
    });

    breadcrumbsCache.set(pathString, items);
    return items;
  }, [pathString]);

  if (breadcrumbItems.length === 0) return null;

  const handleNavigate = (url: string) => {
    window.location.hash = url.startsWith("#") ? url : `#${url}`;
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="flex items-center"
      id="breadcrumb-navigation"
    >
      <ol className="flex items-center flex-wrap gap-2 text-[11px] font-mono tracking-tight text-black/45">
        {breadcrumbItems.map((item, index) => {
          const isHome = index === 0;
          return (
            <li key={item.url + index} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-3 h-3 text-black/20" aria-hidden="true" />
              )}
              
              {item.isLast ? (
                <span className="font-medium text-black select-none max-w-[200px] sm:max-w-none truncate">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => handleNavigate(item.url)}
                  className="hover:text-black transition-colors duration-200 flex items-center gap-1 font-light cursor-pointer focus:outline-none"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {isHome && <Home className="w-3 h-3" />}
                  <span>{item.label}</span>
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
