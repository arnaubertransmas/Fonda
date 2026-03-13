'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, Mountain } from 'lucide-react';
import { addBlog } from '@/services/blogService';
import { CATEGORIES_SELECT } from '@/utils/category_labels';

export default function AddBlog() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    url: '',
    images: [] as File[]
  });
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []) as File[];
    setFormData(prev => ({ ...prev, images: files }));
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true);
    if (e.type === 'dragleave') setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) {
      const files = Array.from(e.dataTransfer.files) as File[];
      setFormData(prev => ({ ...prev, images: files }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.category) return
    setLoading(true);

    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('category', formData.category);
      form.append('description', formData.description);
      form.append('url', formData.url);
      formData.images.forEach(image => form.append('images', image));

      await addBlog(form);
      router.push('/portal_wikilok');

    } catch (error) {
      console.error('Error al crear el blog:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f1e8] flex items-start justify-center pt-6 pb-12 px-4">
      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-[#471D19] text-white rounded-full p-4">
              <Mountain className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-[#471D19] mb-2">Afegir Nova Entrada</h1>
        </div>

        {/* Card */}
        <div className="card bg-base-100 shadow-xl border border-[#4a3933]/10">
          <div className="card-body p-8 gap-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* Nom de la ruta */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold text-[#471D19] flex items-center gap-2">
                    <p className="w-4 h-4">Nom</p>
                  </span>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Castell de la Popa"
                  className="input input-bordered w-full focus:border-[#471D19] focus:outline-none"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              {/* Descripció */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold text-[#471D19] flex items-center gap-2">
                    <p className="w-4 h-4">Descripció</p>
                  </span>
                </div>
                <textarea
                  name="description"
                  placeholder="Descripció"
                  className="textarea textarea-bordered h-32 w-full resize-none focus:border-[#471D19] focus:outline-none"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </label>

              {/* Categoria */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold text-[#471D19] flex items-center gap-2">
                    <p className="w-4 h-4">Categoria</p>
                  </span>
                </div>
                <select
                  name="category"
                  className="select select-bordered w-full"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  {CATEGORIES_SELECT.map(cat => (
                    <option key={cat.value} value={cat.value} disabled={cat.value === ''}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </label>

              {/* URL Wikiloc */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold text-[#471D19] flex items-center gap-2">
                    <p className="w-4 h-4">Enllaç Wikiloc</p> 
                  </span>
                </div>
                <input
                  type="url"
                  name="url"
                  placeholder="https://ca.wikiloc.com/..."
                  className="input input-bordered w-full focus:border-[#471D19] focus:outline-none"
                  value={formData.url}
                  onChange={handleChange}
                  required
                />
              </label>

              {/* Imatges */}
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold text-[#471D19] flex items-center gap-2">
                    <p className="w-4 h-4">Imatges</p>
                  </span>
                </div>

                <div
                  className={`relative border-2 border-dashed rounded-2xl p-8 transition-all cursor-pointer text-center ${
                    dragActive
                      ? 'border-[#471D19] bg-[#471D19]/5'
                      : 'border-[#4a3933]/30 hover:border-[#471D19] hover:bg-[#471D19]/5'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('fileInput')?.click()}
                >
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <Upload className="w-10 h-10 mx-auto mb-3 text-[#4a3933]/50" />
                  <p className="text-[#4a3933] font-medium text-sm mb-1">
                    Deixa anar les imatges aquí, o fes clic per seleccionar
                  </p>
                  <p className="text-xs text-[#4a3933]/50">PNG, JPG fins a 10MB</p>

                  {formData.images.length > 0 && (
                    <div className="alert alert-success mt-4 py-2 px-4 text-sm justify-center">
                      ✓ {formData.images.length} fitxer{formData.images.length > 1 ? 's' : ''} seleccionat{formData.images.length > 1 ? 's' : ''}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-lg w-full bg-[#471D19] hover:bg-[#3a1614] text-white border-none mt-2"
                disabled={loading}
              >
                {loading ? (
                  <><span className="loading loading-spinner loading-sm" /> Publicant...</>
                ) : (
                  'Publicar Entrada'
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}