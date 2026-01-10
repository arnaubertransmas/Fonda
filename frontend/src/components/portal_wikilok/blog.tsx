"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getBlogs } from "@/services/blogService";
import Link from "next/link";
import { getCookie } from "@/services/blogService";

interface Blog {
  _id: string;
  name: string;
  description: string;
  url?: string;
  images?: string[];
  links?: { label: string; url: string }[];
  tags?: string[];
}

const isAdmin = (): boolean => {
  const adminCookie = getCookie('admin');
  return adminCookie === 'true';
};

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isAdminUser, setIsAdminUser] = useState(false);

  useEffect(() => {
    setIsAdminUser(isAdmin())
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("❌ Error carregant blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = selectedTag
    ? blogs.filter((blog) => blog.tags?.includes(selectedTag))
    : blogs;

  const truncateText = (text: string, maxLength: number = 50) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f5f1e8]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#f5f1e8] py-12 px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mt-5 mb-10 text-fonda-black">
            Portal:
          </h1>

          {isAdminUser && (
            <Link href="/add-blog" className="btn btn-primary mb-8">
              Afegir blog
            </Link>
          )}

          {selectedTag && (
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Filtrant per:</span>
                <span className="badge badge-primary">#{selectedTag}</span>
                <button
                  onClick={() => setSelectedTag(null)}
                  className="btn btn-xs btn-ghost"
                >
                  Netejar
                </button>
              </div>
            </div>
          )}

          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog) => {
                const blogId = blog._id;
                const defaultImage = "/placeholder.png";
                
                const imageSrc = blog.images?.[0]
                ? `http://localhost:3001/uploads/${blog.images[0].split("/").pop()}`
                : defaultImage;

                const blogUrl = blog.url;

                return (
                  <div
                    key={blogId}
                    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
                  >
                    <Link href={`/detail_blog/${blogId}`}>
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
                      {/* Títol amb Link */}
                      <Link href={`/detail_blog/${blogId}`}>
                        <h2 className="card-title text-fonda-black hover:text-primary cursor-pointer">
                          {blog.name}
                        </h2>
                        <p className="text-gray-700">
                          {truncateText(blog.description)}
                        </p>
                      </Link>

                      {/* URL del blog */}
                      {blogUrl && (
                        <a
                          href={blogUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline break-all"
                        >
                          🔗 {blogUrl}
                        </a>
                      )}

                      {/* Tags */}
                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {blog.tags.map((tag, index) => (
                            <button
                              key={`${blogId}-tag-${index}`}
                              onClick={() => setSelectedTag(tag)}
                              className="badge badge-outline badge-sm hover:badge-primary cursor-pointer"
                            >
                              #{tag}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Links addicionals */}
                      {blog.links && blog.links.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {blog.links.map((link, index) => (
                            <a
                              key={`${blogId}-link-${index}`}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-ghost btn-xs"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-xl text-gray-500">
                No hi ha blogs per aquesta etiqueta
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;