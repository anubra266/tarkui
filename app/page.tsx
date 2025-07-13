import { getAllComponentCounts } from "@/lib/registry";
import { Header } from "@/components/header";
import { Components } from "./page.components";

export default async function Page() {
  // Pre-load all component counts on the server
  const counts = await getAllComponentCounts();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <Header />

      <Components counts={counts} />
    </div>
  );
}
