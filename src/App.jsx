import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Users, 
  Clock, 
  Sparkles, 
  Flower2, 
  MessageCircle,
  Menu,
  X,
  Phone,
  CheckCircle2,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- HÌNH ẢNH CAO CẤP ---
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1544161515-4ae6ce6db874?auto=format&fit=crop&q=80&w=1600",
  treatment: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
  before: "../public/images/truoc1.jpg",
  after: "../public/images/sau1.jpg",
  spa_interior: "../public/images/hinh1.jpg"
};

const App = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sliderRef = useRef(null);

  // Thêm Google Fonts vào head
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Xử lý kéo thanh Before/After
  const handleMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    if (!x) return;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  const navLinks = [
    { name: "Liệu trình", href: "#services" },
    { name: "Về chúng tôi", href: "#about" },
    { name: "Kết quả", href: "#results" }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#2D2D2D] selection:bg-[#D4AF37] selection:text-white" style={{ fontFamily: '"Montserrat", sans-serif' }}>
      
      {/* 1. STICKY HEADER */}
      <nav className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 font-medium">
        <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-sm rounded-full px-4 md:px-6 py-2 md:py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#D4AF37] p-1.5 rounded-lg shrink-0">
              <Home className="text-white w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="text-sm md:text-xl font-bold tracking-tighter uppercase text-[#2D2D2D] whitespace-nowrap" style={{ fontFamily: '"Playfair Display", serif' }}>
              HƯƠNG <span className="text-[#D4AF37]">HOUSE</span> SPA
            </span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center text-[11px] uppercase tracking-[0.2em]">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-[#D4AF37] transition-colors">{link.name}</a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="hidden sm:block bg-[#2D2D2D] text-white px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-bold hover:bg-[#D4AF37] transition-all uppercase tracking-widest">
              Đặt chỗ
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#2D2D2D] hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 right-0 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 flex flex-col gap-4 md:hidden"
            >
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg border-b border-gray-50 pb-2 hover:text-[#D4AF37]"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-[#D4AF37] text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs mt-2">
                Đặt lịch tư vấn ngay
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-20">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.hero} alt="Hương House Spa Hero" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#FDFBF9]/95 via-[#FDFBF9]/60 md:via-[#FDFBF9]/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center md:text-left"
          >
            <span className="inline-block text-[#D4AF37] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 text-[10px] md:text-xs">
              Kiến tạo vẻ đẹp từ tâm
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
              Nơi Vẻ Đẹp <br />
              <span className="italic text-[#D4AF37] font-normal">Trở Về Nhà</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-600 mb-8 md:10 leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
              Tại <strong>Hương House Spa</strong>, chúng tôi nâng niu làn da bạn như chính người thân trong gia đình. Trải nghiệm sự thư thái tuyệt đối và kết quả thẩm mỹ chuẩn y khoa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#D4AF37] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-sm md:text-lg shadow-xl shadow-[#D4AF37]/30 hover:bg-[#B8962D] transition-all flex items-center justify-center gap-2 group tracking-wide">
                ƯU ĐÃI TRẢI NGHIỆM <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center gap-4 text-[11px] md:text-xs font-semibold tracking-wider uppercase opacity-70">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />)}
              </div>
              <p>5,000+ phụ nữ đã tin tưởng Hương House</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. TRUST STRIP */}
      <div className="bg-white py-8 md:py-12 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { val: "10+", label: "Năm Kinh Nghiệm" },
              { val: "100%", label: "Dược Mỹ Phẩm Sạch" },
              { val: "5.0★", label: "Đánh Giá Cao" },
              { val: "FDA", label: "Chuẩn Hoa Kỳ" }
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-1">
                <div className="text-xl md:text-3xl font-bold text-[#D4AF37]" style={{ fontFamily: '"Playfair Display", serif' }}>{item.val}</div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold opacity-50">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. ABOUT */}
      <section id="about" className="py-16 md:py-24 bg-[#FAF7F2]">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 md:8 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                Vì Làn Da Bạn <br />
                <span className="italic text-[#D4AF37] font-normal">Xứng Đáng Được Yêu Thương</span>
             </h2>
             <div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-600 leading-relaxed font-light">
                <p>Nhiều khách hàng đến với <strong>Hương House Spa</strong> sau khi đã thử đủ mọi loại mỹ phẩm đắt tiền nhưng không hiệu quả, hoặc lo sợ những can thiệp thẩm mỹ quá đà làm mất đi vẻ tự nhiên.</p>
                <p>Chúng tôi thấu hiểu điều đó. Mỗi liệu trình được thiết kế như một "bản giao hưởng" giúp bạn tìm lại phiên bản rạng rỡ nhất.</p>
             </div>
             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                    <CheckCircle2 className="text-[#D4AF37] shrink-0" size={18} />
                    <div>
                        <h4 className="font-bold text-[10px] uppercase tracking-widest mb-0.5">Triết lý</h4>
                        <p className="text-[11px] text-gray-500 font-medium italic">Đẹp từ gốc, bền vững.</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                    <CheckCircle2 className="text-[#D4AF37] shrink-0" size={18} />
                    <div>
                        <h4 className="font-bold text-[10px] uppercase tracking-widest mb-0.5">Dịch vụ</h4>
                        <p className="text-[11px] text-gray-500 font-medium italic">Tận tâm như người thân.</p>
                    </div>
                </div>
             </div>
          </div>
          <div className="relative order-1 lg:order-2">
             <div className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto">
                <img src={IMAGES.spa_interior} alt="Hương House Spa Interior" className="w-full h-full md:h-[600px] object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 mb-10 md:mb-16 text-center">
            <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">Dịch vụ mũi nhọn</span>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: '"Playfair Display", serif' }}>Liệu Trình Chuyên Sâu</h2>
        </div>
        
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2rem] md:rounded-[2.5rem] h-[350px] md:h-auto shadow-lg">
            <img src={IMAGES.treatment} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Skin Rejuvenation" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10 text-white">
              <h3 className="text-xl md:text-3xl font-bold mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>Trẻ Hóa Da Đa Tầng</h3>
              <p className="text-xs md:text-sm opacity-80 mb-4 font-light tracking-wide">Nâng cơ xóa nhăn thế hệ mới chuẩn y khoa.</p>
              <button className="text-white border-b border-white/40 hover:border-[#D4AF37] hover:text-[#D4AF37] w-fit text-[10px] font-bold uppercase tracking-[0.2em] pb-1 transition-colors">Chi tiết</button>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-[#FAF7F2] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between hover:bg-[#D4AF37] group transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
             <div>
               <Sparkles className="text-[#D4AF37] group-hover:text-white mb-4 w-6 h-6 md:w-8 md:h-8" />
               <h3 className="text-lg md:text-2xl font-bold mb-2 group-hover:text-white transition-colors" style={{ fontFamily: '"Playfair Display", serif' }}>Điều Trị Sắc Tố & Nám</h3>
               <p className="text-gray-500 text-xs md:text-sm group-hover:text-white/80 font-light italic">Phác đồ chuyên sâu cho làn da sáng mịn rạng ngời.</p>
             </div>
             <ChevronRight className="self-end text-[#D4AF37] group-hover:text-white transition-colors mt-4" />
          </div>

          <div className="bg-[#FAF7F2] rounded-[2rem] p-6 flex flex-col justify-center text-center shadow-sm">
             <div className="text-2xl md:text-4xl font-bold mb-1 text-[#D4AF37]" style={{ fontFamily: '"Playfair Display", serif' }}>90'</div>
             <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] opacity-60">Thải Độc Da</p>
          </div>

          <div className="bg-[#2D2D2D] rounded-[2rem] p-6 flex flex-col justify-center text-center text-white shadow-lg">
             <div className="text-lg md:text-xl font-bold mb-1" style={{ fontFamily: '"Playfair Display", serif' }}>Dược Mỹ Phẩm</div>
             <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] opacity-50">Chính Hãng 100%</p>
          </div>
        </div>
      </section>

      {/* 6. BEFORE/AFTER */}
      <section id="results" className="py-16 md:py-24 bg-[#2D2D2D] text-white overflow-hidden">
        <div className="container mx-auto px-6 mb-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 italic" style={{ fontFamily: '"Playfair Display", serif' }}>Kết Quả Thực Tế</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto px-4 font-light tracking-wide uppercase">Di chuyển thanh trượt để thấy sự thay đổi rõ rệt</p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto h-[350px] md:h-[550px] rounded-[2rem] md:rounded-[3rem] overflow-hidden cursor-ew-resize border-2 md:border-4 border-white/5 mx-4 md:mx-auto"
          ref={sliderRef}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          <div className="absolute inset-0">
            <img src={IMAGES.after} className="w-full h-full object-cover" alt="After" />
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]">Sau điều trị</div>
          </div>
          
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
            <img 
              src={IMAGES.before} 
              className="w-full h-[350px] md:h-[550px] object-cover max-w-none" 
              alt="Before" 
              style={{ width: sliderRef.current ? sliderRef.current.offsetWidth : '100vw' }} 
            />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]">Trước điều trị</div>
          </div>

          <div className="absolute inset-y-0 w-0.5 bg-white z-20" style={{ left: `${sliderPos}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-2xl text-[#2D2D2D]">
              <div className="flex gap-1.5 items-center">
                <div className="w-0.5 h-3 md:h-5 bg-[#D4AF37] rounded-full" />
                <div className="w-0.5 h-3 md:h-5 bg-[#D4AF37] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 md:py-32 bg-[#FAF7F2] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight px-4" style={{ fontFamily: '"Playfair Display", serif' }}>
             Ghé Thăm Ngôi Nhà Của <br />
             <span className="text-[#D4AF37] font-normal italic">Vẻ Đẹp Rạng Rỡ</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed px-4 font-light italic">
            "Chúng tôi luôn có một tách trà thơm và phác đồ chuyên biệt chờ đón bạn."
          </p>
          <div className="flex flex-col items-center gap-6">
             <button className="w-full sm:w-auto bg-[#2D2D2D] text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-bold text-base md:text-xl hover:bg-[#D4AF37] transition-all shadow-xl tracking-wider">
               ĐẶT LỊCH TƯ VẤN NGAY
             </button>
             <p className="text-[9px] md:text-[11px] text-gray-400 uppercase tracking-[0.3em] font-bold">Cam kết kết quả bằng văn bản</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white pt-16 pb-32 md:pb-24 border-t border-gray-100 font-light">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          <div className="md:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <Home className="text-[#D4AF37] w-5 h-5" />
              <span className="text-xl font-bold tracking-tighter uppercase" style={{ fontFamily: '"Playfair Display", serif' }}>HƯƠNG <span className="text-[#D4AF37]">HOUSE</span> SPA</span>
            </div>
            <p className="text-gray-400 text-xs md:text-sm max-w-sm mb-8 mx-auto md:mx-0 leading-relaxed font-medium italic">
              Nơi hội tụ của chuyên gia tâm huyết và công nghệ hiện đại bậc nhất.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
               {['FB', 'IG', 'ZL'].map(social => (
                 <div key={social} className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[10px] font-bold hover:bg-[#D4AF37] hover:text-white transition-colors cursor-pointer tracking-widest">{social}</div>
               ))}
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-6 text-[#D4AF37]">Liên Hệ</h4>
            <p className="text-xs text-gray-500 leading-7 font-medium">
              123 Đường Sắc Đẹp, Quận 1, TP. HCM<br />
              Hotline: <span className="text-[#2D2D2D]">090 123 4567</span>
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-6 text-[#D4AF37]">Giờ Mở Cửa</h4>
            <p className="text-xs text-gray-500 leading-7 font-medium">
              T2 - T7: <span className="text-[#2D2D2D]">09:00 - 20:00</span><br />
              Chủ Nhật: <span className="text-[#2D2D2D]">09:00 - 18:00</span>
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTIONS */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-40 flex-col gap-4">
        <button className="bg-[#0068FF] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all">
          <MessageCircle size={24} />
        </button>
        <button className="bg-[#4CAF50] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all">
          <Phone size={24} />
        </button>
      </div>

      {/* STICKY BOTTOM BAR (MOBILE ONLY) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-xl border-t border-gray-100 p-4 flex gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <button className="flex-[3] bg-[#D4AF37] text-white py-4 rounded-2xl font-bold shadow-lg text-[10px] uppercase tracking-[0.2em] active:scale-95 transition-transform">
          Nhận Ưu Đãi 50%
        </button>
        <button className="flex-1 bg-[#2D2D2D] text-white rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-transform">
          <Phone size={20} />
        </button>
      </div>

    </div>
  );
};

export default App;