import React from 'react';
import { WindowCard } from '../../components/ui/WindowCard';

export const BlogSection: React.FC = () => {
  return (
    <section id="docs" className="bg-white py-16 md:py-24 border-b-4 border-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-sans font-black text-4xl md:text-5xl mb-2">Panduan & Tips</h2>
          <a href="https://github.com/dhiyo7/heimdall/blob/main/Readme.md" target="_blank" rel="noopener noreferrer" className="font-mono text-sm underline hover:bg-black hover:text-white">Lihat dokumentasi lengkap</a>
        </div>

        <div className="relative">
          {/* Decorative back layer */}
          <div className="hidden md:block absolute top-4 left-4 w-full h-full border-2 border-black bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <WindowCard title="cara-buat-script.heim" date="TUTORIAL" className="bg-white">
               <div className="aspect-video w-full bg-gray-100 border-2 border-black mb-4 overflow-hidden flex items-center justify-center p-8 bg-dots">
                  <div className="font-mono text-xs md:text-sm bg-white border-2 border-black p-4 shadow-retro w-full">
                    <p className="text-gray-500"># Skenario Login</p>
                    <p><span className="font-bold text-blue-600">Buka</span> aplikasi "com.app"</p>
                    <p><span className="font-bold text-blue-600">Ketik</span> "user" pada "Email"</p>
                    <p><span className="font-bold text-blue-600">Ketuk</span> tombol "Masuk"</p>
                    <p><span className="font-bold text-blue-600">Pastikan</span> muncul "Home"</p>
                  </div>
               </div>
               <h3 className="font-bold text-xl mb-2">Cara Membuat Script (.heim)</h3>
               <p className="font-mono text-sm mb-4">
                 Gak perlu jago coding! Gunakan bahasa manusia yang santai. Fitur baru: Gunakan tag <strong># FITUR: ...</strong> untuk clustering Mindmap yang lebih rapi.
               </p>
            </WindowCard>

            <div className="flex flex-col gap-6">
               <WindowCard title="persiapan-perang.txt" date="INSTALL">
                 <h3 className="font-bold text-lg mb-2">Instalasi (Persiapan Perang)</h3>
                 <p className="font-mono text-xs mb-3">
                   Pastikan Python 3.10+ terinstall. Wajib install <strong>Graphviz</strong> dan centang "Add to PATH" agar visualisasi mindmap berjalan lancar.
                 </p>
                 <a href="https://github.com/dhiyo7/heimdall/blob/main/Readme.md#rocket-cara-install-persiapan-perang" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase underline hover:text-blue-600">Baca selengkapnya</a>
               </WindowCard>

               <WindowCard title="troubleshooting.log" date="TIPS">
                 <h3 className="font-bold text-lg mb-2">Masalah Keyboard Hilang?</h3>
                 <p className="font-mono text-xs mb-3">
                   Heimdall menggunakan "Ghost Keyboard". Jika keyboard HP tidak muncul setelah test, matikan FastInputIME via ADB atau jalankan script dummy.
                 </p>
                 <a href="https://github.com/dhiyo7/heimdall/blob/main/Readme.md#%EF%B8%8F-troubleshooting--tips-wajib-baca" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase underline hover:text-blue-600">Lihat Solusi</a>
               </WindowCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};