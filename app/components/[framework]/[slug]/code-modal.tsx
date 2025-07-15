"use client";

import { useState, useEffect } from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getRegistryUrl } from "@/lib/utils";
import { codeToHtml, createHighlighter } from "shiki";
import { useTheme } from "next-themes";

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  framework: string;
  slug: string;
  exampleId: string;
  sourceCode: string;
}

const packageManagers = [
  { name: "pnpm", command: "pnpm dlx shadcn@latest add" },
  { name: "npm", command: "npx shadcn@latest add" },
  { name: "yarn", command: "npx shadcn@latest add" },
  { name: "bun", command: "bunx --bun shadcn@latest add" },
];

export function CodeModal({
  isOpen,
  onClose,
  title,
  framework,
  slug,
  exampleId,
  sourceCode,
}: CodeModalProps) {
  const [activePackageManager, setActivePackageManager] = useState("pnpm");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const { resolvedTheme } = useTheme();

  // Get language based on framework
  const getLanguage = (framework: string): string => {
    switch (framework) {
      case "vue":
        return "vue";
      case "svelte":
        return "svelte";
      case "solid":
      case "react":
      default:
        return "tsx";
    }
  };

  // Initialize Shiki highlighter
  useEffect(() => {
    if (isOpen && sourceCode) {
      const highlightCode = async () => {
        try {
          setIsLoading(true);

          const language = getLanguage(framework);
          // Use the appropriate theme based on current theme
          const currentTheme =
            resolvedTheme === "dark" ? "houston" : "github-light";

          const html = await codeToHtml(sourceCode, {
            lang: language,
            theme: currentTheme,
          });

          setHighlightedCode(html);
        } catch (error) {
          console.error("Failed to highlight code:", error);
          // Fallback to plain text with theme-appropriate styling
          const fallbackClass =
            resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700";
          setHighlightedCode(
            `<pre class="bg-transparent"><code class="${fallbackClass}">${sourceCode}</code></pre>`
          );
        } finally {
          setIsLoading(false);
        }
      };

      highlightCode();
    }
  }, [isOpen, sourceCode, framework, resolvedTheme]);

  const registryUrl = getRegistryUrl(framework, slug, exampleId);
  const selectedPM = packageManagers.find(
    (pm) => pm.name === activePackageManager
  );
  const installCommand = `${selectedPM?.command} ${registryUrl}`;

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemId);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 bg-gradient-to-br from-gray-100/95 to-gray-200/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 shadow-2xl">
        {/* Gradient overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-lg"></div>

        <DialogHeader className="p-6 border-b border-gray-300/50 dark:border-gray-700/50">
          <DialogTitle className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {title}
          </DialogTitle>
        </DialogHeader>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-8">
          {/* Installation Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              Installation
            </h3>

            {/* Package Manager Tabs */}
            <div className="flex space-x-1 bg-gradient-to-r from-gray-200/80 to-gray-300/80 dark:from-gray-800/80 dark:to-gray-700/80 p-1 rounded-xl backdrop-blur-sm border border-gray-300/30 dark:border-gray-700/30">
              {packageManagers.map((pm) => (
                <button
                  key={pm.name}
                  onClick={() => setActivePackageManager(pm.name)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activePackageManager === pm.name
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-700/50"
                  }`}
                >
                  {pm.name}
                </button>
              ))}
            </div>

            {/* Command */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-gray-200/60 to-gray-300/60 dark:from-gray-900/60 dark:to-gray-800/60 backdrop-blur-sm rounded-xl p-4 pr-12 border border-gray-300/30 dark:border-gray-700/30 group-hover:border-gray-400/50 dark:group-hover:border-gray-600/50 transition-all duration-300">
                <code className="text-emerald-600 dark:text-emerald-400 font-mono text-sm break-all">
                  {installCommand}
                </code>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => copyToClipboard(installCommand, "install")}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110"
              >
                {copiedItem === "install" ? (
                  <div className="w-4 h-4 border-2 border-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                    <div className="w-2 h-1 border-b-2 border-l-2 border-emerald-500 transform rotate-[-45deg]"></div>
                  </div>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Code Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
              Code
            </h3>
            <div className="relative group">
              <div className="bg-gradient-to-br from-gray-200/60 to-gray-300/60 dark:from-gray-900/60 dark:to-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-300/30 dark:border-gray-700/30 group-hover:border-gray-400/50 dark:group-hover:border-gray-600/50 transition-all duration-300 overflow-hidden">
                {isLoading ? (
                  <div className="p-6 text-gray-500 dark:text-gray-400 text-center flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    Loading syntax highlighting...
                  </div>
                ) : (
                  <div
                    className="[&>pre]:!bg-transparent [&>pre]:!m-0 [&>pre]:!p-4 [&>pre]:!overflow-x-auto [&_code]:!bg-transparent [&_code]:!font-mono [&_code]:!text-sm [&>pre]:!border-0"
                    dangerouslySetInnerHTML={{ __html: highlightedCode }}
                  />
                )}
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => copyToClipboard(sourceCode, "code")}
                className="absolute right-2 top-2 h-8 w-8 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 z-10"
              >
                {copiedItem === "code" ? (
                  <div className="w-4 h-4 border-2 border-blue-500 rounded-full flex items-center justify-center animate-bounce">
                    <div className="w-2 h-1 border-b-2 border-l-2 border-blue-500 transform rotate-[-45deg]"></div>
                  </div>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
