"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { logout, getCookie } from "../../config/axiosConfig";
import BlogInterface from "@/interfaces/blogInterface";
import { CATEGORY_LABELS } from "@/utils/category_labels";
import { getBlogs, getCategories } from "@/services/blogService";

const isAdmin = (): boolean => getCookie('admin') === 'true';

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdminUser, setIsAdminUser] = useState(false)
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);;
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') || '';

  useEffect(() => {
    setIsAdminUser(isAdmin());
    const fetchBlogs = async () => {
      try {

        const [data, cats] = await Promise.all([
          getBlogs(),
          getCategories(),
        ]);

        setBlogs(data);
        setAvailableCategories(cats.filter(Boolean));

      } catch (error) {
        console.error("❌ Error carregant blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const truncateText = (text: string, maxLength = 50) =>
    text.length <= maxLength ? text : text.substring(0, maxLength) + '...';

  const handleLogout = () => {
    logout();
    window.location.href = "/portal_wikilok";
  };

  const filteredBlogs = activeCategory
    ? blogs.filter(b => b.category === activeCategory)
    : blogs;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f5f1e8]">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f1e8] py-12 px-4 pb-8">
      <div className="max-w-7xl mx-auto mt-5">

        <h1 className="text-5xl font-bold text-[#471D19] text-center mb-4">
          Descobreix el Moianés
        </h1>
        <p className="text-lg text-gray-600 text-center mb-10">
          blablabla que podem posar aqui
        </p>

        {isAdminUser && (
          <div className="flex gap-4 mb-8">
            <Link href="/add-blog" className="btn btn-primary">Afegir blog</Link>
            <button onClick={handleLogout} className="btn btn-outline">Logout</button>
          </div>
        )}

        {/* Filtre de categories */}
        {availableCategories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            <Link
              href="/portal_wikilok"
              className={`btn btn-sm ${
                !activeCategory
                  ? 'bg-[#471D19] text-white border-none'
                  : 'btn-outline border-[#471D19] text-[#471D19]'
              }`}
            >
              Totes
            </Link>
            {availableCategories.map(cat => (
              <Link
                key={cat}
                href={`/portal_wikilok?category=${cat}`}
                className={`btn btn-sm ${
                  activeCategory === cat
                    ? 'bg-[#471D19] text-white border-none'
                    : 'btn-outline border-[#471D19] text-[#471D19]'
                }`}
              >
                {/* mapejo el label amb value */}
                {CATEGORY_LABELS[cat] ?? cat} 
              </Link>
            ))}
          </div>
        )}

        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => {
              const imageSrc = blog.images?.[0]
                ? `http://localhost:3001/uploads/${blog.images[0].split("/").pop()}`
                : "/placeholder.png";

              return (
                <div key={blog._id} className="card bg-base-100 transition-all hover:scale-[1.02]">
                  <Link href={`/detail_blog/${blog._id}`}>
                    <figure className="bg-gray-200 cursor-pointer">
                      <Image
                        src={imageSrc}
                        alt={blog.name}
                        width={400}
                        height={192}
                        className="w-full h-48 object-cover"
                      />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={`/detail_blog/${blog._id}`}>
                      <h2 className="card-title text-[#471D19] hover:text-primary cursor-pointer">
                        {blog.name}
                      </h2>
                      <p className="text-gray-700 break-words overflow-hidden">
                        {truncateText(blog.description)}
                      </p>
                    </Link>

                    {blog.category && (
                      <div className="mt-2">
                        <span className="badge badge-outline text-[#471D19] border-[#471D19]">
                          {CATEGORY_LABELS[blog.category] ?? blog.category}
                        </span>
                      </div>
                    )}

                    {blog.url && (
                      <div className="mt-3">
                        <a
                          href={blog.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost btn-xs"
                        >
                          Veure a Wikiloc
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No hi ha blogs</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;