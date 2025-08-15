"use client";

import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '919789382712';
  const message = encodeURIComponent("Hi Elanchezhian! I just visited your portfolio. Could you share more details?");
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-3 right-3 sm:bottom-14 sm:right-8 z-50 p-2 sm:p-3 shadow-lg hover:scale-105"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="58"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-10 h-10 sm:w-12 sm:h-12 text-purple-500"
        aria-label="WhatsApp Logo"
      >
        <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.891.758 5.703 2.195 8.195L.052 31.948l7.548-2.104A15.953 15.953 0 0 0 16 32.396c8.836 0 16-7.164 16-16 0-8.836-7.164-16-16-16zm0 29.134c-2.445 0-4.84-.645-6.938-1.867l-.497-.293-4.477 1.25 1.26-4.367-.324-.539A13.288 13.288 0 0 1 2.667 16.4c0-7.464 6.07-13.534 13.533-13.534 3.619 0 7.023 1.41 9.59 3.977a13.43 13.43 0 0 1 3.943 9.558c0 7.463-6.07 13.534-13.533 13.534zm7.535-9.82c-.406-.203-2.406-1.187-2.78-1.323-.375-.139-.648-.203-.922.203-.273.406-1.062 1.32-1.301 1.594-.24.273-.48.305-.885.102-.406-.203-1.719-.632-3.275-2.016-1.211-1.082-2.031-2.418-2.27-2.824-.24-.406-.025-.625.18-.828.184-.182.406-.48.609-.719.203-.242.27-.406.406-.68.136-.273.07-.516-.035-.719-.102-.203-.922-2.227-1.266-3.047-.332-.797-.672-.688-.922-.703l-.781-.016c-.273 0-.719.102-1.094.516s-1.438 1.406-1.438 3.43c0 2.023 1.472 3.977 1.676 4.25.203.273 2.872 4.395 6.961 6.164 4.09 1.773 4.09 1.18 4.824 1.102.742-.07 2.406-.977 2.746-1.918.34-.938.34-1.742.238-1.918-.102-.18-.37-.289-.776-.492z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
