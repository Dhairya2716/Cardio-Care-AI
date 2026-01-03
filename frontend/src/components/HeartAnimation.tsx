"use client";

import { motion } from "framer-motion";

export const HeartAnimation = () => {
    return (
        <div className="relative w-96 h-96 flex items-center justify-center">
            {/* Pulse Effect Background */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-full h-full bg-rose-500/20 rounded-full blur-3xl"
            />

            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]">
                <defs>
                    <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#be123c" />
                    </linearGradient>
                    <linearGradient id="veinGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fca5a5" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Main Heart Shape (Anatomical Stylized) */}
                <motion.path
                    d="M92.4,188.7c-9.5-4.8-19.1-9.9-27.7-16.1c-22.9-16.6-39.7-36.8-49.1-59.2C8.9,94.9,9,76.5,15.6,60.8
            c8-19.1,26.4-32.9,47.8-32.9c12.3,0,23.5,4.8,32.2,12.7c3,2.7,5.7,5.7,8,9c7-9.8,17.4-17.5,30.3-20.7c3.9-1,7.9-1.5,12-1.5
            c21.8,0,40.4,14.5,47.1,34.9c4.2,12.7,3.1,27-2.7,40.9c-8.3,19.9-24,37.3-46.1,51.8C127.3,166.4,110.6,178.6,92.4,188.7z"
                    fill="url(#heartGradient)"
                    stroke="#9f1239"
                    strokeWidth="1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />

                {/* Left Ventricle Area */}
                <motion.path
                    d="M65,40 Q40,60 50,110 Q80,140 90,180"
                    fill="none"
                    stroke="none"
                />

                {/* Veins / Flow Lines */}
                {/* Animated flow paths - Right side */}
                <motion.path
                    d="M140,50 C160,70 160,100 130,140"
                    fill="none"
                    stroke="url(#veinGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                <motion.path
                    d="M130,60 C140,80 140,110 110,150"
                    fill="none"
                    stroke="url(#veinGradient)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />

                {/* Animated flow paths - Left side */}
                <motion.path
                    d="M60,60 C40,90 50,120 80,160"
                    fill="none"
                    stroke="url(#veinGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.2 }}
                />

                {/* Arteries (Top) */}
                <motion.path
                    d="M80,30 L80,10"
                    stroke="#ef4444"
                    strokeWidth="8"
                    strokeLinecap="round"
                    animate={{ height: [20, 25, 20] }} // Subtle pump
                />
                <motion.path
                    d="M110,30 L120,10"
                    stroke="#ef4444"
                    strokeWidth="8"
                    strokeLinecap="round"
                />

                {/* Highlights/Gloss for 'Organ' look */}
                <path
                    d="M35,60 Q50,40 70,50"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    opacity="0.2"
                />
                <path
                    d="M120,50 Q140,40 155,60"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    opacity="0.2"
                />

            </svg>

            {/* EKG Line Overlay */}
            <div className="absolute w-full h-16 bottom-0 overflow-hidden opacity-30 pointer-events-none">
                <motion.div
                    className="w-full h-full"
                    style={{
                        backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
                        backgroundSize: "200% 100%"
                    }}
                    animate={{ backgroundPosition: ["100% 0", "-100% 0"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </div>
    );
};
