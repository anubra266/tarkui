"use client";

import { useState, ReactNode } from "react";
import { Code, Sparkles, Zap } from "lucide-react";
import { useParams } from "next/navigation";
import { getRegistryUrl } from "@/lib/utils";
import { CodeModal } from "./code-modal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();

  const framework = Array.isArray(params.framework)
    ? params.framework[0]
    : params.framework || "react";

  const openCodeModal = () => {
    setIsModalOpen(true);
  };

  const getV0Url = (exampleId: string) => {
    const params = useParams();
    const slug = Array.isArray(params.slug)
      ? params.slug[0]
      : params.slug || "";
    const registryUrl = getRegistryUrl(framework, slug, exampleId);
    return `https://v0.dev/chat/api/open?url=${encodeURIComponent(
      registryUrl
    )}`;
  };

  return (
    <TooltipProvider>
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
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={getV0Url(id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative overflow-hidden bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/40 hover:to-purple-500/40 border border-blue-500/30 hover:border-blue-400/50 rounded-xl p-2 transition-all duration-300 hover:scale-110 hover:rotate-3 inline-flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                    <svg
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      width="16"
                      className="w-4 h-4 text-blue-400 group-hover/btn:text-blue-100 relative z-10 group-hover/btn:scale-110 transition-all duration-200"
                    >
                      <path
                        clipRule="evenodd"
                        d="M9.50321 5.5H13.2532C13.3123 5.5 13.3704 5.5041 13.4273 5.51203L9.51242 9.42692C9.50424 9.36912 9.5 9.31006 9.5 9.25L9.5 5.5L8 5.5L8 9.25C8 10.7688 9.23122 12 10.75 12H14.5V10.5L10.75 10.5C10.6899 10.5 10.6309 10.4958 10.5731 10.4876L14.4904 6.57028C14.4988 6.62897 14.5032 6.68897 14.5032 6.75V10.5H16.0032V6.75C16.0032 5.23122 14.772 4 13.2532 4H9.50321V5.5ZM0 5V5.00405L5.12525 11.5307C5.74119 12.3151 7.00106 11.8795 7.00106 10.8822V5H5.50106V9.58056L1.90404 5H0Z"
                        fill="currentColor"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    <Zap className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 animate-pulse" />
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-sm border-blue-400/50 text-white shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3" />
                    Open in v0.dev
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={openCodeModal}
                    className="group/btn relative overflow-hidden bg-gradient-to-r from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/40 hover:to-teal-500/40 border border-emerald-500/30 hover:border-emerald-400/50 rounded-xl p-2 transition-all duration-300 hover:scale-110 hover:-rotate-3"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                    <Code className="w-4 h-4 text-emerald-400 group-hover/btn:text-emerald-100 relative z-10 group-hover/btn:scale-110 transition-all duration-200" />
                    <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 animate-pulse delay-100" />
                  </button>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-gradient-to-r from-emerald-500/90 to-teal-500/90 backdrop-blur-sm border-emerald-400/50 text-white shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Code className="w-3 h-3" />
                    View source code
                  </div>
                </TooltipContent>
              </Tooltip>
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

        {/* Code Modal */}
        <CodeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={title}
          framework={framework}
          slug={Array.isArray(params.slug) ? params.slug[0] : params.slug || ""}
          exampleId={id}
          sourceCode={
            sourceCode[framework] ||
            "// Source code not available for this framework"
          }
        />
      </div>
    </TooltipProvider>
  );
}
