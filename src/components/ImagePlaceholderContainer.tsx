import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, Link, X, Check, RefreshCw, Eye, Move, Sparkles } from 'lucide-react';
import { SocialWidgetGraphic } from './SocialWidgetGraphic';
import { ThemeMode } from '../types';

interface ImagePlaceholderContainerProps {
  theme?: ThemeMode;
  customImageUrl: string | null;
  onImageChange: (url: string | null) => void;
  overlayWidgets: boolean;
  onToggleOverlayWidgets: (overlay: boolean) => void;
}

export const ImagePlaceholderContainer: React.FC<ImagePlaceholderContainerProps> = ({
  theme = 'light',
  customImageUrl,
  onImageChange,
  overlayWidgets,
  onToggleOverlayWidgets,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [showUrlModal, setShowUrlModal] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<'1:1' | '4:3' | '16:9'>('1:1');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isLight = theme === 'light';

  // Preset backdrop images for quick testing
  const samplePresets = [
    {
      id: '3d-abstract',
      name: '3D Vibrant Mesh',
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'gradient-blob',
      name: 'Neon Gradient',
      url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'light-clean',
      name: 'Minimal Studio',
      url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  const handleFileUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onImageChange(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      onImageChange(urlInput.trim());
      setShowUrlModal(false);
      setUrlInput('');
    }
  };

  return (
    <div className="relative w-full max-w-[500px] lg:max-w-[540px] mx-auto select-none py-2">
      {/* Aspect ratio frame container */}
      <div
        className={`relative w-full rounded-3xl overflow-hidden transition-all duration-300 border-2 ${
          isDragging
            ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.3)]'
            : customImageUrl
            ? isLight ? 'border-slate-300 bg-white shadow-xl' : 'border-white/20 bg-slate-900/60 shadow-2xl'
            : isLight ? 'border-dashed border-slate-300 bg-white/90 shadow-lg' : 'border-dashed border-white/25 bg-white/5 backdrop-blur-md shadow-xl'
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        {/* Dimension & Placement Status Header Tag */}
        <div
          className={`absolute top-3 left-3 right-3 z-30 flex items-center justify-between text-xs font-mono font-medium px-3 py-1.5 rounded-xl border backdrop-blur-md transition-colors ${
            isLight
              ? 'bg-slate-900/90 border-slate-800 text-slate-200'
              : 'bg-slate-950/80 border-white/10 text-slate-300'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white font-semibold">Hero Image Placeholder</span>
            <span className="text-slate-400">({aspectRatio})</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleOverlayWidgets(!overlayWidgets)}
              className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition-colors ${
                overlayWidgets
                  ? 'bg-blue-500/30 text-blue-300 border border-blue-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>Widgets Overlay</span>
            </button>
          </div>
        </div>

        {/* Content View */}
        <div className="relative w-full aspect-square flex items-center justify-center p-4 pt-12">
          {customImageUrl ? (
            /* Custom Uploaded or Selected Image View */
            <div className="relative w-full h-full flex items-center justify-center group overflow-hidden rounded-2xl">
              <img
                src={customImageUrl}
                alt="Custom Hero Visual"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Optional Overlaid Glassmorphic Widgets over custom image */}
              {overlayWidgets && (
                <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="scale-90 transform">
                    <SocialWidgetGraphic theme={theme} />
                  </div>
                </div>
              )}

              {/* Image Controls Overlay on hover */}
              <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-3 p-4 backdrop-blur-sm">
                <p className="text-sm text-white font-medium">Hero Visual Frame</p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-semibold backdrop-blur-md transition-colors"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Change Image</span>
                  </button>

                  <button
                    onClick={() => setShowUrlModal(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-semibold backdrop-blur-md transition-colors"
                  >
                    <Link className="w-3.5 h-3.5" />
                    <span>Paste URL</span>
                  </button>

                  <button
                    onClick={() => onImageChange(null)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/30 hover:bg-sky-500/50 text-sky-200 text-xs font-semibold backdrop-blur-md transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Reset Placeholder</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Interactive Dropzone / Empty Placeholder View */
            <div
              className={`w-full h-full flex flex-col items-center justify-center text-center p-6 border rounded-2xl transition-colors ${
                isLight
                  ? 'border-slate-200/80 bg-slate-50/50'
                  : 'border-white/10 bg-white/[0.02]'
              }`}
            >
              {/* Placement Target Crosshair Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform ${
                  isLight
                    ? 'bg-blue-50 border border-blue-200 text-blue-600'
                    : 'bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-sky-500/20 border border-white/20 text-blue-400'
                }`}
              >
                <ImageIcon className="w-8 h-8" />
              </div>

              <h4 className={`text-base font-bold mb-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Right Side Image Placeholder
              </h4>
              <p className={`text-xs max-w-xs mb-5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Drag & drop your custom graphic, screenshot, or 3D visual here (Recommended: 600×600px PNG/JPG)
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload Image</span>
                </button>

                <button
                  onClick={() => setShowUrlModal(true)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border backdrop-blur-md transition-all ${
                    isLight
                      ? 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700'
                      : 'bg-white/10 hover:bg-white/15 border-white/10 text-white'
                  }`}
                >
                  <Link className="w-4 h-4" />
                  <span>Image URL</span>
                </button>
              </div>

              {/* Sample Preset Backdrops */}
              <div className={`w-full pt-4 border-t ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
                <p className={`text-[11px] font-semibold uppercase tracking-wider mb-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Or load a sample preset backdrop:
                </p>
                <div className="flex items-center justify-center gap-2">
                  {samplePresets.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => onImageChange(preset.url)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors ${
                        isLight
                          ? 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
                          : 'bg-white/5 hover:bg-white/15 border-white/10 text-slate-300 hover:text-white'
                      }`}
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Alignment Grid Overlay lines for precision layout */}
        <div className={`absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3 ${isLight ? 'opacity-10' : 'opacity-15'}`}>
          <div className={`border-r border-b ${isLight ? 'border-slate-800' : 'border-white'}`} />
          <div className={`border-r border-b ${isLight ? 'border-slate-800' : 'border-white'}`} />
          <div className={`border-b ${isLight ? 'border-slate-800' : 'border-white'}`} />
          <div className={`border-r border-b ${isLight ? 'border-slate-800' : 'border-white'}`} />
          <div className={`border-r border-b ${isLight ? 'border-slate-800' : 'border-white'}`} />
          <div className={`border-b ${isLight ? 'border-slate-800' : 'border-white'}`} />
          <div className={`border-r ${isLight ? 'border-slate-800' : 'border-white'}`} />
          <div className={`border-r ${isLight ? 'border-slate-800' : 'border-white'}`} />
          <div className="" />
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFileUpload(e.target.files[0]);
          }
        }}
      />

      {/* URL Input Modal */}
      {showUrlModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className={`border rounded-2xl p-6 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-150 ${
            isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-[#12131a] border-white/20 text-white'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold flex items-center gap-2">
                <Link className="w-5 h-5 text-blue-500" />
                <span>Enter Image URL</span>
              </h3>
              <button
                onClick={() => setShowUrlModal(false)}
                className={`p-1 rounded-lg transition-colors ${
                  isLight ? 'hover:bg-slate-100 text-slate-500' : 'hover:bg-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUrlSubmit} className="space-y-4">
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  Direct Image URL (PNG, JPG, WebP)
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/hero-graphic.png"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  required
                  className={`w-full px-3.5 py-2.5 border rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      : 'bg-white/5 border-white/15 text-white placeholder-slate-500'
                  }`}
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowUrlModal(false)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium ${
                    isLight ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold shadow-md"
                >
                  Apply Image
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

