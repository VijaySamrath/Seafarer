import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Seafarer Job Portal</h1>
      <p className="mb-8 text-center">Connecting seafarers, recruiters, and training agencies worldwide.</p>
      <div className="flex gap-4">
        <Link href="/seafarers" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Seafarers
        </Link>
        <Link href="/recruiters" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Recruiters
        </Link>
        <Link href="/training" className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
          Training Agencies
        </Link>
        <Link href="/admin" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Admin
        </Link>
      </div>
    </div>
  );
}
