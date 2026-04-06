'use client';

export default function GlobalError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body className="bg-[#050505] text-white font-mono flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-xs text-[#00F0FF] tracking-widest mb-4">ERROR</p>
          <p className="text-slate-400 text-sm mb-6">{props.error.message ?? 'Something went wrong.'}</p>
          <button
            onClick={props.reset}
            className="text-xs tracking-widest text-[#00F0FF] border border-[#00F0FF44] px-6 py-2 hover:border-[#00F0FF]"
          >
            REINTENTAR
          </button>
        </div>
      </body>
    </html>
  );
}
