import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
          <Route path="*" element={<div className="page" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
