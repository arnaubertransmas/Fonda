'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload } from 'lucide-react';
import { addBlog } from '@/services/blogService';

export default function AddBlog() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    images: [] as File[]
  });
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files) as File[];
      setFormData(prev => ({ ...prev, images: files }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        const form = new FormData();
        form.append('name', formData.name);
        form.append('description', formData.description);
        form.append('url', formData.url);

        formData.images.forEach(image => {
          form.append('images', image);
        });

        await addBlog(form);
        console.log('Blog creat correctament!');
        
        // Redirect a la pàgina portal_wikilok
        router.push('/portal_wikilok');
    } catch (error) {
        console.error('Error al crear el blog:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f1e8] flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-[#471D19] mb-3">
            Afegir Nova Entrada
          </h1>
          <p className="text-[#4a3933] text-lg">Comparteix les teves rutes i aventures</p>
        </div>

        <div className="card bg-white shadow-xl border-2 border-[#4a3933]/10">
          <div className="card-body p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#471D19] flex items-center gap-2">
                    Nom de la Ruta
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  className="input input-lg w-full border-[#4a3933]/20 focus:border-[#471D19] focus:outline-none transition-all bg-[#f5f1e8]/30"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#471D19] flex items-center gap-2">
                    Descripció
                  </span>
                </label>
                <textarea
                  name="description"
                  placeholder="Descripció..."
                  className="textarea textarea-lg h-32 w-full border-[#4a3933]/20 focus:border-[#471D19] focus:outline-none transition-all resize-none bg-[#f5f1e8]/30"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#471D19] flex items-center gap-2">
                    Enllaç Wikiloc
                  </span>
                </label>
                <input
                  type="url"
                  name="url"
                  placeholder="https://ca.wikiloc.com/..."
                  className="input input-lg w-full border-[#4a3933]/20 focus:border-[#471D19] focus:outline-none transition-all bg-[#f5f1e8]/30"
                  value={formData.url}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Images */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#471D19] flex items-center gap-2">
                    Imatges
                  </span>
                </label>

                <div
                  className={`relative border-2 border-dashed rounded-2xl p-8 transition-all cursor-pointer ${
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
                  <div className="text-center">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-[#4a3933]/60" />
                    <p className="text-[#4a3933] font-medium mb-1">Deixa anar les imatges aquí, o fes clic per seleccionar</p>
                    <p className="text-sm text-[#4a3933]/60">PNG, JPG fins a 10MB</p>
                  </div>

                  {formData.images.length > 0 && (
                    <div className="mt-4 p-4 bg-[#471D19]/10 rounded-lg border border-[#471D19]/20">
                      <p className="text-[#471D19] font-medium text-center">✓ {formData.images.length} fitxer(s) seleccionat(s)</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div className="form-control mt-8">
                <button 
                  type="submit"
                  className="btn btn-lg w-full bg-[#471D19] hover:bg-[#3a1614] text-white shadow-lg hover:shadow-xl transition-all text-lg border-none"
                >
                  Publicar Entrada
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}