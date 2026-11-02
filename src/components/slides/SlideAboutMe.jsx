import React from 'react';

export default function SlideAboutMe() {
  return (
    <div className="w-full h-full min-h-[75vh] flex flex-col justify-center p-6 sm:p-12 bg-white">
      <div className="max-w-6xl mx-auto w-full animate-fade-in space-y-8">
        {/* Title: "about me" matching the user's screenshot */}
        <div className="text-center">
          <h2 className="font-serif italic font-bold text-5xl sm:text-7xl lg:text-8xl text-[#A62B2B] leading-none tracking-tight">
            about me
          </h2>
        </div>

        {/* 3-Column Layout: Left Text, Center Portrait, Right Text */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center pt-2">
          {/* Left Column (4 cols) */}
          <div className="md:col-span-4 space-y-4 text-left order-2 md:order-1">
            <p className="text-xs sm:text-sm text-[#332A27] leading-relaxed font-light">
              At the age of 15, I was a little girl who wanted to become a safe place for people whose voices often went unheard.
            </p>
            <p className="text-xs sm:text-sm text-[#332A27] leading-relaxed font-light">
              I started sharing my poems and personal writings through Instagram stories. I used to check my phone every five minutes, hoping someone had connected with my words.
            </p>
            <p className="text-xs sm:text-sm text-[#332A27] leading-relaxed font-light">
              What started as a small passion slowly became an inseparable part of my identity—a bridge between unexpressed hearts.
            </p>
          </div>

          {/* Center Column: User's Real Portrait (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-center justify-center order-1 md:order-2">
            <div className="relative w-52 sm:w-60 lg:w-68 max-w-full group">
              {/* Soft decorative shadow/glow */}
              <div className="absolute inset-0 bg-[#A62B2B]/10 rounded-3xl blur-xl -z-10"></div>
              
              <div className="overflow-hidden rounded-2xl border-2 border-[#A62B2B]/20 shadow-xl bg-[#FAF7F2]">
                <img
                  src="/images/veda_portrait.png"
                  alt="Keshireddy Veda Sri Portrait"
                  className="w-full h-auto object-cover object-top transition-all duration-500"
                />
              </div>

              {/* Author name tag beneath */}
              <div className="text-center mt-3">
                <span className="text-[11px] uppercase tracking-widest text-[#786457] font-semibold">
                  Keshireddy Veda Sri
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols) */}
          <div className="md:col-span-4 space-y-4 text-left order-3">
            <p className="text-xs sm:text-sm text-[#332A27] leading-relaxed font-light">
              At 19, I became a co-author of a published poetry collection called <strong className="text-[#A62B2B] font-semibold">"Her Silence"</strong>, celebrating a mother's unconditional love and silent affection.
            </p>
            <p className="text-xs sm:text-sm text-[#332A27] leading-relaxed font-light">
              At 20, I stepped into professional content writing with <strong className="text-[#1F1D1D] font-semibold">The Chennai Shopping Mall</strong>, scripting festive campaigns and bridal storytelling.
            </p>
            <p className="text-xs sm:text-sm text-[#332A27] leading-relaxed font-medium">
              Today, I write to connect, communicate, create, and give emotions a voice across every medium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
