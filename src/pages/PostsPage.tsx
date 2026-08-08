import { posts } from '../content/posts'
import { PostCard } from '../components/PostCard'
export function PostsPage() { return <div className="page"><div className="eyebrow">Archive</div><h1>所有文章</h1><div className="post-grid">{posts.map((post) => <PostCard post={post} key={post.slug} />)}</div></div> }
