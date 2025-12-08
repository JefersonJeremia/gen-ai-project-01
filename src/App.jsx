import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import FullStack from './pages/services/FullStack';
import MobileApp from './pages/services/MobileApp';
import UiUx from './pages/services/UiUx';
import DigitalMarketing from './pages/services/DigitalMarketing';
import ContentWriting from './pages/services/ContentWriting';
import SocialMedia from './pages/services/SocialMedia';
import SEO from './pages/services/SEO';
import Ecommerce from './pages/services/Ecommerce';
import BlogPost from './pages/BlogPost';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/freelancerhub/app/v1/home" replace />} />
        <Route path="/freelancerhub/app/v1" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/full-stack-development" element={<FullStack />} />
          <Route path="services/mobile-app-development" element={<MobileApp />} />
          <Route path="services/ui-ux-design" element={<UiUx />} />
          <Route path="services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="services/content-writing" element={<ContentWriting />} />
          <Route path="services/social-media-management" element={<SocialMedia />} />
          <Route path="services/seo" element={<SEO />} />
          <Route path="services/ecommerce" element={<Ecommerce />} />
          {/* Sub-services routes will be added here */}
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}