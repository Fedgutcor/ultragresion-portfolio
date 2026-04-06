import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type PostType = 'writing' | 'audio' | 'video' | 'document' | 'project';

export interface Post {
  slug: string;
  title: string;
  date: string;
  type: PostType;
  summary: string;
  tags: string[];
  soundcloud_url?: string;
  video_url?: string;
  pdf_url?: string;
  cover?: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content/posts');

export function getAllPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx'));
  return files
    .map(file => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8');
      const { data } = matter(raw);
      return { slug: file.replace('.mdx', ''), ...data } as Post;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
