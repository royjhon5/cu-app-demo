"use client";

import { useRouter } from "next/navigation";

export default function Sidebar({ children }) {
  const router = useRouter();

  const GoToDashboard = () => {
    router.push("/dashboard");
  };
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-xl font-bold border-b">MyApp</div>
        <nav className="p-4 space-y-2">
          <a
            href="#"
            className="block p-2 rounded hover:bg-gray-200"
            onClick={GoToDashboard}
          >
            Dashboard
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">
            Settings
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">
            Profile
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Page Title</h1>
          <div className="space-x-4">
            <button className="px-3 py-1 bg-blue-500 text-white rounded">
              Login
            </button>
            <button className="px-3 py-1 bg-gray-200 rounded">Sign Up</button>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
