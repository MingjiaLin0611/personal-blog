import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { PostsPage } from './pages/PostsPage'
import { PostPage } from './pages/PostPage'
import { AboutPage } from './pages/AboutPage'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:slug" element={<PostPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<main className="page"><h1>页面不存在</h1><Link to="/">回到首页</Link></main>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
