import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { getAllSlugs, getPostBySlug } from '@/lib/content';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} — Ultragresion`,
    description: post.meta.summary,
  };
}

const TYPE_ICONS: Record<string, string> = {
  writing: '✍',
  audio: '◎',
  video: '▶',
  document: '▤',
  project: '⬡',
};

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { meta, content } = post;

  return (
    <main className="min-h-screen px-6 py-8 max-w-3xl mx-auto">
      {/* Back */}
      <a href="/blog" className="text-xs text-slate-500 hover:text-[#00F0FF] tracking-widest mb-8 block transition-colors">
        ← BLOG
      </a>

      <div className="accent-line mb-8" />

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[#00F0FF] text-lg">{TYPE_ICONS[meta.type] ?? '·'}</span>
          <span className="text-[10px] text-slate-600 tracking-widest uppercase">{meta.type}</span>
          <span className="text-[10px] text-slate-600 ml-auto">{meta.date}</span>
        </div>
        <h1 className="text-xl font-bold text-white tracking-wide leading-snug mb-3">
          {meta.title}
        </h1>
        <p className="text-sm text-slate-400">{meta.summary}</p>
        {meta.tags && meta.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-3">
            {meta.tags.map(tag => (
              <span key={tag} className="text-[10px] text-slate-600 border border-white/10 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="accent-line mb-8" />

      {/* Media embeds by type */}
      {meta.type === 'audio' && meta.soundcloud_url && (
        <div className="mb-8">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(meta.soundcloud_url)}&color=%2300F0FF&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false`}
            className="border border-[#00F0FF22]"
          />
        </div>
      )}

      {meta.type === 'video' && meta.video_url && (
        <div className="mb-8 aspect-video w-full border border-[#00F0FF22] overflow-hidden">
          <iframe
            src={meta.video_url}
            className="w-full h-full"
            allowFullScreen
            title={meta.title}
          />
        </div>
      )}

      {meta.type === 'document' && meta.pdf_url && (
        <div className="mb-8">
          <a
            href={meta.pdf_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#00F0FF] border border-[#00F0FF44] px-4 py-2 hover:bg-[#00F0FF0D] transition-all tracking-widest"
          >
            ▤ VER DOCUMENTO ↗
          </a>
        </div>
      )}

      {/* MDX content */}
      <article className="prose-post">
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
