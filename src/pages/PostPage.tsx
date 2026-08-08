import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { findPost } from '../content/posts'
export function PostPage() { const { slug } = useParams(); const post = slug ? findPost(slug) : undefined; if (!post) return <div className="page"><h1>文章不存在</h1><Link to="/posts">返回文章列表</Link></div>; return <article className="page article"><div className="meta">{post.date} · {post.tags.join(' / ')}</div><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><div className="article-body"><ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown></div></article> }
