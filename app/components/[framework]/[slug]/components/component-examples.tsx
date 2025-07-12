"use client";

import { useState, ReactNode } from "react";
import { Copy, ExternalLink, Sparkles, Zap } from "lucide-react";
import { useParams } from "next/navigation";

interface ComponentExamplesProps {
  id: string;
  title: string;
  index: number;
  children: ReactNode;
  sourceCode: {
    [framework: string]: string | null;
  };
}

export function ComponentExamples({
  id,
  title,
  index,
  children,
  sourceCode,
}: ComponentExamplesProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const params = useParams();

  const framework = Array.isArray(params.framework)
    ? params.framework[0]
    : params.framework || "react";

  const copyToClipboard = async (exampleId: string) => {
    try {
      // Get the source code for the selected framework
      const code = sourceCode[framework];
      if (code) {
        await navigator.clipboard.writeText(code);
        setCopiedId(exampleId);
        setTimeout(() => setCopiedId(null), 2000);
      } else {
        throw new Error("Source code not available for this framework");
      }
    } catch (err) {
      console.error("Failed to copy code:", err);
      // Fallback to a generic message
      const fallbackCode = `// ${
        framework.charAt(0).toUpperCase() + framework.slice(1)
      } code for ${title}\n// Source code not available for this framework`;
      await navigator.clipboard.writeText(fallbackCode);
      setCopiedId(exampleId);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const openInV0 = (code: string) => {
    // In a real implementation, this would open the code in v0
    console.log("Opening in v0:", code);
    // For now, we'll just show an alert
    alert("This would open the component in v0 for editing!");
  };

  return (
    <div
      className="group relative bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-300/50 dark:border-gray-700/50 hover:border-gray-400/50 dark:hover:border-gray-600/50 transition-all duration-500 overflow-hidden hover:scale-[1.02] hover:-translate-y-1"
      onMouseEnter={() => setHoveredCard(id)}
      onMouseLeave={() => setHoveredCard(null)}
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
    >
      {/* Enhanced Card Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%]"></div>

      {/* Preview Section */}
      <div className="p-8 relative">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>

          {/* Enhanced Action Buttons */}
          <div className="flex items-center space-x-3 ml-6">
            <button
              onClick={() => openInV0(`Component ${id}`)}
              className="group/btn relative overflow-hidden bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/40 hover:to-purple-500/40 border border-blue-500/30 hover:border-blue-400/50 rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:rotate-3"
              title="Open in v0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
              <ExternalLink className="w-4 h-4 text-blue-400 group-hover/btn:text-blue-300 relative z-10 group-hover/btn:scale-110 transition-all duration-200" />
              <Zap className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 animate-pulse" />
            </button>

            <button
              onClick={() => copyToClipboard(id)}
              className="group/btn relative overflow-hidden bg-gradient-to-r from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/40 hover:to-teal-500/40 border border-emerald-500/30 hover:border-emerald-400/50 rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:-rotate-3"
              title="Copy code"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
              {copiedId === id ? (
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-emerald-400 rounded-full flex items-center justify-center animate-bounce">
                    <div className="w-2 h-1 border-b-2 border-l-2 border-emerald-400 transform rotate-[-45deg]"></div>
                  </div>
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-ping"></div>
                </div>
              ) : (
                <Copy className="w-4 h-4 text-emerald-400 group-hover/btn:text-emerald-300 relative z-10 group-hover/btn:scale-110 transition-all duration-200" />
              )}
              <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 animate-pulse delay-100" />
            </button>
          </div>
        </div>

        {/* Enhanced Preview Container */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-200/60 to-gray-300/60 dark:from-gray-900/60 dark:to-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-300/30 dark:border-gray-700/30 group-hover:border-gray-400/50 dark:group-hover:border-gray-600/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/2 dark:via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">{children}</div>
          </div>

          {/* Floating indicator */}
          {hoveredCard === id && (
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 animate-bounce">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
