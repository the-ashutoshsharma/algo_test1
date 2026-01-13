import React, { useState } from 'react';
// Lucide-react library se icons import kiye ja rahe hain
import { Menu, Plus, MessageSquare, HelpCircle, Settings, History } from 'lucide-react';

const Sidebar = () => {
    // 'extended' state define ki hai jo batati hai ki sidebar khula hai (true) ya band (false)
    const [extended, setExtended] = useState(false);

    // NavItem ek chota "Helper component" hai taaki hume har button ke liye baar-baar code na likhna pade
    const NavItem = ({ icon: Icon, label, onClick, extraClass = "" }) => (
        <div
            onClick={onClick}
            // Hover effects aur basic styling ke liye Tailwind classes
            className={`flex items-center gap-3 p-3 rounded-full cursor-pointer hover:bg-zinc-800 transition-colors ${extraClass}`}
        >
            {/* Icon render ho raha hai */}
            <Icon size={22} className="text-zinc-300" />

            {/* Agar 'extended' true hai, tabhi text (label) dikhai dega */}
            {extended && <p className="text-sm whitespace-nowrap animate-fadeIn">{label}</p>}
        </div>
    );

    return (
        // Main Container: Iski width 'extended' state ke hisaab se change hoti hai (w-64 ya w-20)
        <div className={`h-screen inline-flex flex-col justify-between bg-[#1e1e1e] py-6 px-4 transition-all duration-300 ${extended ? 'w-64' : 'w-20'}`}>

            {/* --- TOP SECTION (Menu, New Chat, aur History) --- */}
            <div className="flex flex-col gap-8">

                {/* Menu Icon: Ispe click karne se sidebar khulta/band hota hai */}
                <Menu
                    onClick={() => setExtended(prev => !prev)}
                    className="ml-2 cursor-pointer text-white hover:text-white"
                    size={24}
                />

                {/* New Chat Button: Ek pill-shaped button naye chat ke liye */}
                <div className="mt-4 flex items-center gap-2 p-3 bg-zinc-800/50 rounded-full cursor-pointer hover:bg-zinc-700 transition-all w-fit">
                    <Plus size={22} className="text-amber-300" />
                    {/* Text sirf tab dikhega jab sidebar extended ho */}
                    {extended && <p className="text-sm font-medium pr-4 text-white">New Chat</p>}
                </div>

                {/* Recent History Section: Ye pura block sirf tab dikhega jab sidebar open ho */}
                {extended && (
                    <div className="flex flex-col animate-fadeIn">
                        <p className="mb-4 ml-2 text-sm text-white font-semibold">Recent</p>
                        {/* Scrollable area for recent chats */}
                        <div className="max-h-[50vh] overflow-y-auto no-scrollbar">
                            <NavItem icon={MessageSquare} label="What is React?" />
                            <NavItem icon={MessageSquare} label="How to use Tailwind" />
                            <NavItem icon={MessageSquare} label="AI Architecture" />
                        </div>
                    </div>
                )}
            </div>

            {/* --- BOTTOM SECTION (Help, Activity, Settings) --- */}
            {/* flex-col justify-between ki wajah se ye section hamesha niche rahega */}
            <div className="flex flex-col gap-2 text-amber-50 ">
                <NavItem icon={Settings} label="Settings" />
            </div>

            {/* --- CUSTOM CSS ANIMATIONS --- */}
            {/* Tailwind mein custom fade-in effect add karne ke liye style tag */}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
        /* Scrollbar ko chhupane ke liye (aesthetic purpose) */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
};

export default Sidebar;