import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="主导航">
        <div className="nav-links">
          <NavLink to="/" end>首页</NavLink>
          <span aria-hidden="true">/</span>
          <NavLink to="/posts">笔记</NavLink>
          <span aria-hidden="true">/</span>
          <NavLink to="/about">关于</NavLink>
        </div>
      </nav>
    </header>
  )
}
