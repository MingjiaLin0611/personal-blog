import { Link } from 'react-router-dom'
import { posts } from '../content/posts'
import { PostCard } from '../components/PostCard'
export function HomePage() { return <div className="page"><section className="hero"><div className="eyebrow">Personal engineering notebook</div><h1>记录问题，分享思考，持续积累。</h1><p className="lead">这里是我的个人技术博客，记录软件工程、Web 开发以及长期学习中的实践与笔记。</p><div className="hero-actions"><Link className="button" to="/posts">阅读文章</Link><Link className="button secondary" to="/about">了解我</Link></div></section><section><div className="section-title"><h2>最近文章</h2><Link to="/posts">查看全部 →</Link></div><div className="post-grid">{posts.slice(0, 3).map((post) => <PostCard post={post} key={post.slug} />)}</div></section></div> }
