"use client";

import { useEffect, useState } from "react";
import { getBlog, getCategories, deleteBlog } from "@/services/blogService";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getCookie } from "@/config/axiosConfig";
import BlogInterface from "@/interfaces/blogInterface";
import { TrucarLink, MapsLink } from "@/utils/links";
import { CATEGORY_LABELS } from "@/utils/category_labels";

interface Props {
  params: Promise<{ id: string }>;
}

const isAdmin = (): boolean => getCookie('admin') === 'true';

const eliminarBlog = async (id: string) => {
  try {
    await deleteBlog(id);
  } catch (error) {
    console.error('Error eliminant el blog:', error);
  }
};

export default function BlogDetailPage({ params }: Props) {
  const [blog, setBlog] = useState<BlogInterface | null>(null);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {  
      try {
        const { id: blogId } = await params;

        if (!blogId || !/^[a-f\d]{24}$/i.test(blogId)) {
          notFound();
          return;
        }

        // Carreguem el blog i totes les categories disponibles en paral·lel
        const [blogData, cats] = await Promise.all([
          getBlog(blogId),
          getCategories(),
        ]);

        if (!blogData) {
          notFound();
          return;
        }

        setBlog(blogData);
        setAvailableCategories(cats.filter(Boolean));

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
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (!blog) {
    notFound();
    return null;
  }

  const defaultImage = "/placeholder.png";

  return (
    <>
      <Header />
      <div className="mt-6 flex gap-4 px-6 lg:px-16 xl:px-24">
        <Link
          href="/portal_wikilok"
          className="px-6 py-3 bg-[#f5f1e8] text-[#471D19] rounded-lg hover:bg-[#471D19] hover:text-white transition-all inline-block"
        >
          ← Tornar als blogs
        </Link>
        {isAdmin() && (
          <Link
            href="/portal_wikilok"
            onClick={() => eliminarBlog(blog._id)}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all inline-block"
          >
            Eliminar blog
          </Link>
        )}
      </div>

      <div className="bg-[#f5f1e8] py-10 px-6 lg:px-16 xl:px-24 mt-4 pb-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* ── COLUMNA ESQUERRA (2/3) ── */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Títol + Descripció */}
              <div className="bg-white rounded-xl p-8">
                {blog.category && (
                  <div className="mb-4">
                    <span className="badge badge-outline text-[#471D19] border-[#471D19]">
                      {CATEGORY_LABELS[blog.category] ?? blog.category}
                    </span>
                  </div>
                )}
                <h1 className="text-4xl font-bold text-[#471D19] mb-4">{blog.name}</h1>
                {blog.url && (
                  <Link
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-all block mb-6"
                  >
                    🔗 {blog.url}
                  </Link>
                )}
                <div className="text-gray-800 whitespace-pre-wrap break-words overflow-hidden">
                  {blog.description}
                </div>
              </div>

              {/* Mapa */}
              <div className="bg-white rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-[#471D19] mb-4">Mapa</h2>
                <div className="w-full h-48 bg-[#f5f1e8] rounded-lg flex items-center justify-center text-gray-400">
                  Mapa no disponible
                </div>
              </div>

              {/* Imatges */}
              <div className="bg-white rounded-xl overflow-hidden">
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
                          onError={(e) => { e.currentTarget.src = defaultImage; }}
                        />
                        {blog.images!.length > 1 && (
                          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                document
                                  .getElementById(`slide${index === 0 ? blog.images!.length : index}`)
                                  ?.scrollIntoView({ behavior: 'instant', block: 'nearest' });
                              }}
                              className="btn btn-circle"
                            >❮</button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                document
                                  .getElementById(`slide${index + 2 > blog.images!.length ? 1 : index + 2}`)
                                  ?.scrollIntoView({ behavior: 'instant', block: 'nearest' });
                              }}
                              className="btn btn-circle"
                            >❯</button>
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
              </div>
            </div>

            {/* ── COLUMNA DRETA (1/3) ── */}
            <div className="flex flex-col gap-6 h-full">

              {/* Filtrar per categories */}
              <div className="bg-white rounded-xl p-6 flex-1">
                <h2 className="text-xl font-semibold text-[#471D19] mb-4">
                  Filtrar per categories
                </h2>
                {availableCategories.length > 0 ? (
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/portal_wikilok"
                      className="w-full text-left px-4 py-2 rounded-lg bg-[#f5f1e8] text-[#471D19] hover:bg-[#471D19] hover:text-white transition-all text-sm font-medium"
                    >
                      🗺️ Totes les rutes
                    </Link>
                    {availableCategories.map((cat) => (
                      <Link
                        key={cat}
                        href={`/portal_wikilok?category=${cat}`}
                        className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          blog.category === cat
                            ? 'bg-[#471D19] text-white'
                            : 'bg-[#f5f1e8] text-[#471D19] hover:bg-[#471D19] hover:text-white'
                        }`}
                      >
                        {CATEGORY_LABELS[cat] ?? cat}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm">Sense categories</p>
                )}
              </div>

              {/* Reserva */}
              <div className="bg-white rounded-xl p-6 flex-1 flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-[#471D19]">Reserva</h2>
                <p className="text-sm text-gray-500">
                  Truca&apos;ns per reservar taula o trobar-nos fàcilment.
                </p>
                <div className="flex flex-col gap-3 mt-2">
                  <TrucarLink
                    className="w-full text-center px-4 py-2 border border-[#471D19] text-[#471D19] rounded-lg hover:bg-[#471D19] hover:text-white transition-all text-sm font-medium"
                    text="📞 Trucar per reservar"
                  />
                  <MapsLink
                    className="w-full text-center px-4 py-2 border border-[#471D19] text-[#471D19] rounded-lg hover:bg-[#471D19] hover:text-white transition-all text-sm font-medium"
                    text="📍 Com arribar"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}