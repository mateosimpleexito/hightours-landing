export default function Footer() {
  return (
    <footer className="bg-navy-dark w-full py-16 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-8 flex flex-col items-center gap-6 text-center">
        <div className="text-white font-headline text-2xl tracking-widest uppercase">
          High Tours
        </div>
        <div className="space-y-2">
          <p className="text-slate-400 text-sm tracking-wide">
            © 2008–2026 High Tours · ORUS GROUP SAC · Huánuco, Perú
          </p>
          <p className="text-slate-500 text-sm font-medium">
            concierge@hightours.com · +51 987 654 321
          </p>
        </div>
      </div>
    </footer>
  )
}
