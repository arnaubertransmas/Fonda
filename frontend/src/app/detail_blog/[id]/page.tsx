"use client";

import { useEffect, useState } from "react";
import { getBlog, deleteBlog } from "@/services/blogService";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getCookie } from "@/config/axiosConfig";

interface Blog {
  _id: string;
  name: string;
  description: string;
  url?: string;
  images?: string[];
  links?: { label: string; url: string }[];
  tags?: string[];
}

interface Props {
  params: Promise<{ id: string }>;
}

const isAdmin = (): boolean => {
  const adminCookie = getCookie('admin');
  return adminCookie === 'true';
};

const eliminarBlog = async (id: string) => {
  try {
    await deleteBlog(id);
  } catch (error) {
    console.error('Error eliminant el blog:', error);
  }
}

export default function BlogDetailPage({ params }: Props) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const { id: blogId } = await params;
        
        if (!blogId || !/^[a-f\d]{24}$/i.test(blogId)) {
          notFound();
          return;
        }

        const blogData = await getBlog(blogId);
        
        if (!blogData) {
          notFound();
          return;
        }

        setBlog(blogData);
      } catch (error) {
        console.error("Error carregant blog:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [params]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f5f1e8]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!blog) {
    notFound();
    return null;
  }

  const defaultImage = "https://placehold.co/800x400/f5f1e8/6b7280?text=Sense+imatge";
  const externalUrl = blog.url;

  return (
    <>
    <Header />
    <div className="bg-[#f5f1e8] py-12 px-4 mt-8 pb-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden mb-12">
        {/* Carrusel d'imatges (inclou totes les imatges) */}
        {blog.images && blog.images.length > 0 ? (
          <div className="carousel w-full h-[400px]">
            {blog.images.map((image, index) => (
              <div
                key={`${blog._id}-img-${index}`}
                id={`slide${index + 1}`}
                className="carousel-item relative w-full h-[400px]"
              >
                <Image
                  width={800}
                  height={400}
                  src={`http://localhost:3001/uploads/${image.split('/').pop()}`}
                  alt={`${blog.name} - ${index + 1}`}
                  className="w-full h-[400px] object-cover"
                  unoptimized
                  onError={(e) => {
                    e.currentTarget.src = defaultImage;
                  }}
                />
                {blog.images!.length > 1 && (
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(`slide${index === 0 ? blog.images!.length : index}`)?.scrollIntoView({ behavior: 'instant', block: 'nearest' });
                      }}
                      className="btn btn-circle"
                    >
                      ❮
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(`slide${index + 2 > blog.images!.length ? 1 : index + 2}`)?.scrollIntoView({ behavior: 'instant', block: 'nearest' });
                      }}
                      className="btn btn-circle"
                    >
                      ❯
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="relative w-full h-[400px] bg-gray-200">
            <Image
              src={defaultImage}
              alt={blog.name}
              width={800}
              height={400}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        )}

        {/* Contingut */}
        <div className="p-8">
          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag, index) => (
                <span
                  key={`${blog._id}-tag-${index}`}
                  className="px-3 py-1 bg-[#f5f1e8] text-[#471D19] rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Títol */}
          <h1 className="text-4xl font-bold text-[#471D19] mb-4">
            {blog.name}
          </h1>

          {/* URL extern del blog */}
          {externalUrl && (
            <Link
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all block mb-6"
            >
              🔗 {externalUrl}
            </Link>
          )}

          {/* Descripció */}
          <div className="text-gray-800 mb-6 whitespace-pre-wrap">
            {blog.description}
          </div>

          {/* Links addicionals */}
          {blog.links && blog.links.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">Enllaços relacionats:</h3>
              <div className="flex flex-wrap gap-3">
                {blog.links.map((link, index) => (
                  <Link
                    key={`${blog._id}-link-${index}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-[#471D19] text-[#471D19] rounded-lg hover:bg-[#471D19] hover:text-white transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-8">
            <Link href="/portal_wikilok" className="px-6 py-3 bg-[#f5f1e8] text-[#471D19] rounded-lg hover:bg-[#471D19] hover:text-white transition-all inline-block">
              ← Tornar als blogs
            </Link>
            {isAdmin() &&
              <Link 
                href="/portal_wikilok"
                onClick={() => eliminarBlog(blog._id)}
                className="ml-5 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all inline-block"
              >
                Eliminar blog
              </Link>
            }
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}