"use client";

import { useState, useEffect } from "react";
import { Github, Twitter, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useFramework } from "@/hooks/use-framework";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { framework, setFramework, isLoaded } = useFramework();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg blur-sm opacity-50"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Tark UI
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center space-x-2"
            >
              <span>Layouts</span>
              <Badge
                variant="secondary"
                className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30"
              >
                NEW
              </Badge>
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Easing Classes
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          {/* Framework Selector */}
          {isLoaded && (
            <Select value={framework} onValueChange={setFramework}>
              <SelectTrigger className="w-[120px] bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 hover:border-gray-400/50 dark:hover:border-gray-600/50 transition-all duration-200">
                <SelectValue placeholder="Framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="solid">Solid</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
              </SelectContent>
            </Select>
          )}

          <Link
            href="https://x.com/anubra266"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-200/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
            >
              <Twitter className="w-4 h-4" />
            </Button>
          </Link>
          <Link
            href="https://github.com/anubra266/tarkui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-200/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
            >
              <Github className="w-4 h-4" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-200/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
