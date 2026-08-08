import { Link } from 'react-router-dom'
import type { Post } from '../types/post'
export function PostCard({ post }: { post: Post }) { return <Link className="post-card" to={`/posts/${post.slug}`}><div className="meta">{post.date}</div><h2>{post.title}</h2><p className="lead">{post.excerpt}</p><div className="tags">{post.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></Link> }
