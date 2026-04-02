import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Module from './pages/Module'
import Lesson from './pages/Lesson'
import Capstone from './pages/Capstone'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/module/:moduleSlug" element={<Module />} />
        <Route path="/module/:moduleSlug/lesson/:lessonSlug" element={<Lesson />} />
        <Route path="/capstone" element={<Capstone />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
