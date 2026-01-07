import React from "react";
import Image from "next/image";
import { Award, Clock, Users } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-24 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative background glass elements */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#FF7B00]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#285430]/5 rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Image Side */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-linear-to-tr from-[#285430] to-[#FF7B00] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/about-heritage.png"
                  alt="KSM Fruits Heritage"
                  width={800}
                  height={500}
                  className="w-full h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Stats Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
                  <div className="flex justify-around items-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#285430]">
                        51+
                      </div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                        Years
                      </div>
                    </div>
                    <div className="w-px h-10 bg-gray-200" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#FF7B00]">
                        100%
                      </div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                        Quality
                      </div>
                    </div>
                    <div className="w-px h-10 bg-gray-200" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#285430]">
                        Fresh
                      </div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                        Daily
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#285430]/10 text-[#285430] text-sm font-bold mb-4">
                <Clock className="w-4 h-4 mr-2" />
                ESTABLISHED 1974
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                Cultivating Trust for <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#285430] to-[#FF7B00]">
                  Over 5 Decades
                </span>
              </h2>

              <div className="space-y-4">
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  KSM Fruits, Udupi, has been a trusted name in the fruit
                  industry for over{" "}
                  <span className="text-[#285430] font-bold">51 years</span>.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  What began as a modest wholesale fruit venture has blossomed
                  into a leading enterprise admired for its unwavering
                  commitment to quality, freshness, and customer satisfaction.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Guided by integrity and a passion for excellence, KSM Fruits
                  brings the finest fruits from across the country—including
                  seasonal varieties and premium imports—straight to the plates
                  of consumers.
                </p>

                {/* <div className="pt-6 border-t border-gray-100 italic text-gray-500 text-lg leading-relaxed">
                  &quot;With every supply, the company celebrates a legacy of
                  trust, taste, and enduring relationships built over five
                  decades.&quot;
                </div> */}
              </div>

              <div className="mt-10 flex flex-wrap gap-8">
                <div className="flex items-center space-x-3 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#285430]/10 flex items-center justify-center group-hover:bg-[#285430] group-hover:text-white transition-colors duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-900">
                    Premium Quality
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF7B00]/10 flex items-center justify-center group-hover:bg-[#FF7B00] group-hover:text-white transition-colors duration-300">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-900">
                    Trusted by Thousands
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
