import React from 'react';
import { WindowCard } from '../../components/ui/WindowCard';

export const Roadmap: React.FC = () => {
  const items = [
    "Integrasi support iOS (via WebDriverAgent)",
    "Integrasi Web Platform",
    "Integrasi ke pipeline CI/CD (Jenkins/GitLab Runner)",
    "Kirim report otomatis ke Slack/Telegram Group",
    "Fitur \"Record & Replay\" (Bikin script tanpa ngetik)",
    "Submit laporan bug langsung dari UI",
    "... (Masih banyak lagi)"
  ];

  return (
    <section id="roadmap" className="bg-dots py-16 md:py-24 border-b-4 border-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
          
          <div className="md:w-1/2">
            <div className="inline-block bg-black text-white px-2 py-1 font-mono text-xs font-bold mb-4 transform -rotate-2">
              COMING SOON
            </div>
            <h2 className="font-sans font-black text-4xl md:text-5xl mb-6 leading-tight">
              Roadmap &<br/>Masa Depan
            </h2>
            <div className="font-mono text-base md:text-lg mb-8 leading-relaxed bg-white border-2 border-black p-6 shadow-retro relative">
              <p>
                Heimdall terus berevolusi. Berikut adalah fitur-fitur canggih yang sedang kami racik di laboratorium agar testing semakin santuy.
              </p>
              <div className="absolute -top-3 -right-3 bg-black text-white text-xs font-bold px-2 py-1 rotate-3">
                WIP
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <a href="https://github.com/dhiyo7/heimdall" className="inline-flex items-center gap-2 font-mono text-sm font-bold underline hover:bg-black hover:text-white transition-colors p-1 w-max">
                <span>👉 Request Fitur di GitHub</span>
              </a>
              <a href="https://github.com/dhiyo7/heimdall/issues" className="inline-flex items-center gap-2 font-mono text-sm font-bold underline hover:bg-black hover:text-white transition-colors p-1 w-max">
                <span>🐛 Lapor Bug (Issue)</span>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <WindowCard title="roadmap_2024.plan" date="FUTURE" className="w-full">
               <div className="space-y-4 font-mono text-sm md:text-base">
                 {/* Completed Item */}
                 <div className="flex items-start gap-3 p-1 -mx-1 text-gray-400">
                     <span className="font-bold min-w-[24px] text-green-600">[x]</span>
                     <span className="line-through">Rilis versi Alpha (Android)</span>
                 </div>

                 {/* Future Items */}
                 {items.map((item, idx) => (
                   <div key={idx} className="flex items-start gap-3 hover:bg-gray-100 p-1 -mx-1 transition-colors group">
                     <span className="font-bold text-gray-400 group-hover:text-black min-w-[24px]">[ ]</span>
                     <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                   </div>
                 ))}
               </div>
            </WindowCard>
          </div>

        </div>
      </div>
    </section>
  );
};