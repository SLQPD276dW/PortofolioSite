import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MemoApp from './MemoApp';
import OneCanvas from './OneCanvas';
import Navbar from './Navbar';
import Skills from './Skills';
import Profile from './Profile';
import Blog from './Blog';
import ViteWebGL2Template from './ViteWebGL2Template';

function RouterConfig() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<App />} />
          <Route path="memo-app" element={<MemoApp />} />
          <Route path="one-canvas" element={<OneCanvas />} />
          <Route path="skills" element={<Skills />} />
          <Route path="profile" element={<Profile />} />
          <Route path="blog" element={<Blog />} />
          <Route path="webgl2vitetemplate" element={<ViteWebGL2Template />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterConfig;
