import type { Post } from '../types/post'

const files = import.meta.glob('/content/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const metadata: Record<string, Omit<Post, 'content'>> = {
  '/content/posts/handwritten-note.md': {
    title: '一段手写的 Markdown 笔记',
    date: '2026-08-09',
    excerpt: '这篇文章没有 frontmatter，文章信息由博客代码静态配置。',
    tags: ['Markdown', 'React'],
    slug: 'handwritten-note',
    draft: false,
  },
}

export const posts: Post[] = Object.entries(metadata)
  .map(([path, post]) => ({ ...post, content: files[path] }))
  .filter((post) => post.content && !post.draft)
  .sort((a, b) => b.date.localeCompare(a.date))

export const findPost = (slug: string) => posts.find((post) => post.slug === slug)
