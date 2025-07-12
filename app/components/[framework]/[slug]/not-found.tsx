import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <Header />

      <main className="relative max-w-7xl mx-auto px-6 py-12 pt-32">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 mb-8 group hover:translate-x-1"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Components</span>
        </Link>

        <div className="text-center py-20">
          <div className="relative inline-block mb-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                404
              </span>
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-2xl blur-2xl opacity-50"></div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Component Not Found
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            The component you're looking for doesn't exist or hasn't been
            implemented yet for this framework.
          </p>

          <div className="flex items-center justify-center space-x-4">
            <Link href="/">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                Browse Components
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-gray-300 dark:border-gray-700"
              >
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
