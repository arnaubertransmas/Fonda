import { Suspense } from "react";
import BlogClient from "./blog";

export default function Page() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-[#f5f1e8]"><span className="loading loading-spinner loading-lg" /></div>}>
      <BlogClient />
    </Suspense>
  );
}
