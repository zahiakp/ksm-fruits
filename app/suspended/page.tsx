import { AlertCircle, Lock, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Account Suspended | KSM Fruits",
  description: "This application has been suspended by the developer.",
};

export default function SuspendedPage() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#fdfdfd] flex items-center justify-center p-4 md:p-8 font-sans overflow-y-auto">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#285430]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF7B00]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-2xl w-full bg-white rounded-[2rem]  border border-gray-200 p-8 md:p-12 text-center overflow-hidden animate-in fade-in zoom-in duration-500">
        {/* Top Accent Bar */}
        {/* <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#285430] via-[#FF7B00] to-[#285430]" /> */}

        {/* Icon Container */}
        <div className="mb-8 relative inline-flex items-center justify-center">
          <div className="absolute inset-0 bg-[#FF7B00]/10 rounded-full scale-[2] blur-xl" />
          <div className="relative w-24 h-24 bg-gradient-to-br from-[#FF7B00] to-orange-600 rounded-3xl shadow-lg flex items-center justify-center transform -rotate-6">
            <Lock className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-black text-[#285430] tracking-tight leading-tight">
              Application
              <span className="text-[#FF7B00]"> Suspended</span>
            </h1>
            <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">
              Restricted Access Level 4
            </p>
          </div>

          <div className="h-px w-24 bg-gray-100 mx-auto" />

          <p className="text-gray-600 leading-relaxed text-lg">
            This platform and all its associated services have been
            <span className="font-bold text-[#285430]">
              {" "}
              suspended by the developer
            </span>
            . All functionalities, including the store and admin dashboard, are
            currently locked.
          </p>

          {/* Simple Message Box */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2 text-[#FF7B00]">
              <AlertCircle className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider text-xs">
                Official Notice
              </span>
            </div>
            <p className="text-gray-700 italic text-center font-medium">
              The service agreement for this application has reached its
              conclusion or has been paused. Please contact the lead developer
              to resolve this restriction.
            </p>
          </div>

          {/* Contact Actions */}
          {/* <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="mailto:zahiakp@duck.com"
              className="flex items-center space-x-3 px-8 py-4 bg-[#285430] text-white rounded-2xl hover:bg-[#285430]/90 transition-all font-bold shadow-xl shadow-[#285430]/20 w-full sm:w-auto justify-center group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Email Support</span>
            </a>
            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center space-x-3 px-8 py-4 border-2 border-gray-200 text-[#285430] rounded-2xl hover:border-[#285430] hover:bg-gray-50 transition-all font-bold w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>Call Developer</span>
            </a>
          </div> */}
        </div>

        {/* Footer info */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col items-center space-y-2">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
            Abaqas Digital Infrastructure
          </p>
          <p className="text-[10px] text-gray-300">
            System Identity: DS-88-KSM-PRIME
          </p>
        </div>
      </div>
    </div>
  );
}
