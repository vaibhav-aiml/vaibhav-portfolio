import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-surface-container-high border border-gold/40 flex items-center justify-center mb-6 shadow-xl">
        <span className="font-devanagari text-2xl text-primary font-bold">४०४</span>
      </div>
      <h1 className="font-headline-lg text-4xl md:text-5xl font-bold text-on-surface mb-3">
        Page Not Found
      </h1>
      <p className="text-on-surface-variant font-body-md text-sm md:text-base max-w-md mb-8">
        The architectural pavilion you are seeking does not exist in this palace coordinate.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-surface font-label-caps text-label-caps uppercase tracking-wider font-bold shadow-lg diya-glow"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Court (Home)</span>
      </Link>
    </div>
  );
}
