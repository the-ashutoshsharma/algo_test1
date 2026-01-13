import React, { useState, useRef, useEffect } from 'react';
import { Plus, Wrench, Mic, Image, Send } from 'lucide-react';

const Omnibox = () => {
    const [input, setInput] = useState("");
    const textareaRef = useRef(null);

    // Level 2 Logic: Auto-resize textarea as user types
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [input]);

    return (
        <div className="fixed bottom-8 w-full max-w-225 px-5 py-5 bg-[#0e0e0e]">
            <div className="flex flex-col bg-[#1e1e1e] rounded-[28px] py-3 px-5 focus-within:bg-[#282a2c] transition-all duration-200 shadow-2xl">

                {/* The Typing Area */}
                <textarea
                    ref={textareaRef}
                    rows={1}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a prompt here"
                    className="hide-scrollbar w-full bg-transparent border-none outline-none text-zinc-200 text-lg resize-none min-h-10 max-h-50 py-2 placeholder-zinc-500 overflow-y-auto"
                />

                {/* The Icon/Action Row */}
                <div className="flex items-center justify-between mt-2 pb-1">
                    <div className="flex items-center gap-4">
                        {/* Left Tools */}
                        <div className="p-2 hover:bg-zinc-700 rounded-full cursor-pointer transition-colors">
                            <Plus size={20} className="text-zinc-400" />
                        </div>
                        <div className="flex items-center gap-1 p-2 hover:bg-zinc-700 rounded-full cursor-pointer transition-colors">
                            <Wrench size={18} className="text-zinc-400" />
                            <span className="text-xs text-zinc-400 font-medium">Tools</span>
                        </div>
                        <div className="p-2 hover:bg-zinc-700 rounded-full cursor-pointer transition-colors">
                            <Image size={20} className="text-zinc-400" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Right Tools & Conditional Send Button */}
                        {input ? (
                            <div className="p-2 bg-blue-600 hover:bg-blue-500 rounded-full cursor-pointer transition-all animate-fadeIn">
                                <Send size={20} className="text-white" />
                            </div>
                        ) : (
                            <div className="p-2 hover:bg-zinc-700 rounded-full cursor-pointer transition-colors">
                                <Mic size={20} className="text-zinc-400" />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer Legal/Note Text */}
            <p className="text-[11px] text-center mt-3 text-zinc-500">
                Gemini may display inaccurate info, including about people, so double-check its responses.
                <span className="underline ml-1 cursor-pointer">Your privacy & Gemini Apps</span>
            </p>
        </div>
    );
};

export default Omnibox;