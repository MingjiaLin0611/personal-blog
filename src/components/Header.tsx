import { Link } from 'react-router-dom'
export function Header() { return <header className="site-header"><nav className="nav"><Link className="brand" to="/">Lin / Notes</Link><div className="nav-links"><Link to="/posts">文章</Link><Link to="/about">关于</Link></div></nav></header> }
