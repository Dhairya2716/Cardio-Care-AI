// import Link from "next/link";
// import { Github, Linkedin, Heart, Twitter, Mail, ExternalLink, ShieldAlert } from "lucide-react";


// export default function Footer() {
//     return (
//         <footer className="w-full bg-transparent dark:bg-black/40 dark:backdrop-blur-xl mt-auto relative">
//             <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
//                     {/* Brand Column */}
//                     <div className="space-y-4">
//                         <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
//                             CardioAI
//                         </h3>
//                         <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
//                             Empowering you with AI-driven insights for a healthier heart. Prediction, analysis, and prevention in one platform.
//                         </p>
//                         <div className="flex items-center space-x-4 pt-2">
//                             <SocialLink href="https://github.com/Dhairya2716" icon={Github} label="GitHub" />
//                             <SocialLink href="https://www.linkedin.com/in/dhairya-dudkiya-0089b631b" icon={Linkedin} label="LinkedIn" />
//                             {/* <SocialLink href="https://twitter.com" icon={Twitter} label="Twitter" /> */}
//                             <SocialLink href="mailto:dhairyadudkiya02@gmail.com" icon={Mail} label="Email" />
//                         </div>
//                     </div>

//                     {/* Quick Links */}
//                     <div>
//                         <h4 className="font-semibold text-lg mb-4 text-foreground">Platform</h4>
//                         <ul className="space-y-3 text-sm text-muted-foreground">
//                             <li>
//                                 <Link href="/" className="hover:text-primary transition-colors flex items-center gap-2">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/predict" className="hover:text-primary transition-colors flex items-center gap-2">
//                                     Prediction Tool
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/eda" className="hover:text-primary transition-colors flex items-center gap-2">
//                                     Data Analysis
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#features" className="hover:text-primary transition-colors flex items-center gap-2">
//                                     Features
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Legal / Resources */}
//                     <div>
//                         <h4 className="font-semibold text-lg mb-4 text-foreground">Resources</h4>
//                         <ul className="space-y-3 text-sm text-muted-foreground">
//                             <li>
//                                 <Link href="#" className="hover:text-primary transition-colors flex items-center gap-2">
//                                     Documentation
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="hover:text-primary transition-colors flex items-center gap-2">
//                                     Privacy Policy
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="hover:text-primary transition-colors flex items-center gap-2">
//                                     Terms of Service
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="hover:text-primary transition-colors flex items-center gap-2">
//                                     Medical Disclaimer <ShieldAlert className="w-3 h-3" />
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="border-t border-rose-500/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//                     <p className="text-sm text-muted-foreground">
//                         &copy; {new Date().getFullYear()} CardioAI. All rights reserved.
//                     </p>
//                     <p className="text-xs text-muted-foreground flex items-center gap-1.5 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full border border-black/5 dark:border-white/5">
//                         Made with <Heart className="h-3 w-3 text-rose-500 fill-rose-500 animate-pulse" /> by Team Cardio
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
//     return (
//         <Link
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 group"
//             aria-label={label}
//         >
//             <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
//         </Link>
//     );
// }

//
//

import Link from "next/link";
import { Github, Linkedin, Heart, Twitter, Mail, ExternalLink, ShieldAlert } from "lucide-react";


export default function Footer() {
    return (
        <footer className="w-full bg-transparent dark:bg-transparent dark:backdrop-blur-xl mt-auto relative">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
                            CardioAI
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Empowering you with AI-driven insights for a healthier heart. Prediction, analysis, and prevention in one platform.
                        </p>
                        <div className="flex items-center space-x-4 pt-2">
                            <SocialLink href="https://github.com/Dhairya2716" icon={Github} label="GitHub" />
                            <SocialLink href="https://www.linkedin.com/in/dhairya-dudkiya-0089b631b" icon={Linkedin} label="LinkedIn" />
                            {/* <SocialLink href="https://twitter.com" icon={Twitter} label="Twitter" /> */}
                            <SocialLink href="mailto:dhairyadudkiya02@gmail.com" icon={Mail} label="Email" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-foreground">Platform</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="/" className="hover:text-primary transition-colors flex items-center gap-2">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/predict" className="hover:text-primary transition-colors flex items-center gap-2">
                                    Prediction Tool
                                </Link>
                            </li>
                            <li>
                                <Link href="/eda" className="hover:text-primary transition-colors flex items-center gap-2">
                                    Data Analysis
                                </Link>
                            </li>
                            <li>
                                <Link href="#features" className="hover:text-primary transition-colors flex items-center gap-2">
                                    Features
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal / Resources */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-foreground">Resources</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                                    Medical Disclaimer <ShieldAlert className="w-3 h-3" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-rose-500/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} CardioAI. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full border border-black/5 dark:border-white/5">
                        Made with <Heart className="h-3 w-3 text-rose-500 fill-rose-500 animate-pulse" /> by Team Cardio
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 group"
            aria-label={label}
        >
            <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </Link>
    );
}