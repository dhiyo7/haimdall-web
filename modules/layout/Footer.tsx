import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="font-sans font-black text-3xl mb-2">HEIMDALL</h2>
            <p className="font-mono text-sm text-gray-400 max-w-xs">
              Tools QA automation open source dengan jiwa pemberani. Penjaga gerbang kualitas aplikasi Anda.
            </p>
          </div>

          <div className="flex gap-8 font-mono text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-gray-500 uppercase tracking-wider mb-2">Hubungiku</span>
              <a href="https://github.com/dhiyo7" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub Profile</a>
              <a href="mailto:example@email.com" className="hover:text-gray-300">Email</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-gray-500 uppercase tracking-wider mb-2">Resource</span>
              <a href="#docs" className="hover:text-gray-300">Panduan</a>
              <a href="https://github.com/dhiyo7/heimdall" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Source Code</a>
              <a href="#roadmap" className="hover:text-gray-300">Status & Roadmap</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center md:text-left font-mono text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} Dhiyo7. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span className="hidden md:inline">Status:</span>
            {/* 
              TODO: REPLACE 'YOUR_NETLIFY_SITE_ID' WITH YOUR ACTUAL NETLIFY SITE API ID.
              You can find this in Netlify Dashboard > Site Settings > General > Site Information > API ID.
            */}
            <a href="https://app.netlify.com/sites/heimdallqa/deploys" target="_blank" rel="noopener noreferrer">
              <img src="https://api.netlify.com/api/v1/badges/803a9d52-640e-4f5d-b8e6-942a3aea2ffa/deploy-status" alt="Netlify Status" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};