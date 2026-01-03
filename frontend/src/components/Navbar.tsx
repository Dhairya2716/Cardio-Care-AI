import Link from 'next/link';
import { HeartPulse } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <HeartPulse className="h-8 w-8 text-rose-500" />
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-violet-500">
                                CardioAI
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            <Link href="/" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Home
                            </Link>
                            <Link href="/predict" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Predict
                            </Link>
                            <Link href="/eda" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                EDA
                            </Link>
                            <Link href="/disclaimer" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Disclaimer
                            </Link>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
