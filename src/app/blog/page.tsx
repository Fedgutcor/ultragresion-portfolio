import Link from 'next/link';
import { getAllPosts } from '@/lib/content';

const TYPE_ICONS: Record<string, string> = {
  writing: '✍',
  audio: '◎',
  video: '▶',
  document: '▤',
  project: '⬡',
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="min-h-screen px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold tracking-widest uppercase mb-2">Feed</h1>
      <div className="accent-line mb-8" />
      <ul className="flex flex-col gap-6">
        {posts.map(post => (
          <li key={post.slug} className="border-b border-white/5 pb-6">
            <Link href={`/blog/${post.slug}`} className="group flex gap-4 items-start">
              <span className="text-[#00F0FF] text-lg mt-0.5">{TYPE_ICONS[post.type] ?? '·'}</span>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                  {post.title}
                </p>
                <p className="text-xs text-slate-500 mt-1">{post.summary}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-slate-600 border border-white/10 px-2 py-0.5 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="ml-auto text-[10px] text-slate-600 whitespace-nowrap">{post.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
