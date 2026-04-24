import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  MessageCircle,
  Menu,
  X,
  Phone,
  CheckCircle2,
  Home,
  Zap,
  Target,
  HeartPulse,
  Flame,
  Infinity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- HÌNH ẢNH CAO CẤP ---
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1600",
  acne_treatment: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
  peel_skin: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=800",
  meso: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
  hifu: "https://images.unsplash.com/photo-1519415510236-85592ada7b08?auto=format&fit=crop&q=80&w=1200",
  hair_removal: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?auto=format&fit=crop&q=80&w=800",
  before: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=600",
  after: "public/images/sau1.jpg",
};

const App = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    if (!x) return;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  const navLinks = [
    { name: "Trị Mụn", href: "#acne" },
    { name: "Điều Trị Da", href: "#treatments" },
    { name: "Trẻ Hóa", href: "#hifu" },
    { name: "Triệt Lông", href: "#laser" },
    { name: "Kết Quả", href: "#results" }
  ];

  // --- QUẢN LÝ LINK MẠNG XÃ HỘI ---
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100063713103271' },
    { name: 'TikTok', url: 'https://tiktok.com/@huonghousespa' },
    { name: 'Zalo', url: 'https://zalo.me/0901234567' }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#2D2D2D] selection:bg-[#D4AF37] selection:text-white" style={{ fontFamily: '"Montserrat", sans-serif' }}>
      
      {/* HEADER */}
      <nav className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 font-medium">
        <div className="bg-white/90 backdrop-blur-md border border-white/40 shadow-sm rounded-full px-4 md:px-6 py-2 md:py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#D4AF37] p-1.5 rounded-lg shrink-0">
              <Home className="text-white w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="text-sm md:text-xl font-bold tracking-tighter uppercase text-[#2D2D2D]" style={{ fontFamily: '"Playfair Display", serif' }}>
              HƯƠNG <span className="text-[#D4AF37]">HOUSE</span> SPA
            </span>
          </div>
          
          <div className="hidden lg:flex gap-6 items-center text-[10px] uppercase tracking-[0.15em] font-bold">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-[#D4AF37] transition-colors">{link.name}</a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <a href={socialLinks[2].url} target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 bg-[#0068FF] text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-all">
              <MessageCircle size={14} /> Zalo Tư Vấn
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#2D2D2D] hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 right-0 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 flex flex-col gap-4 lg:hidden"
            >
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base border-b border-gray-50 pb-2 hover:text-[#D4AF37] font-semibold"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-[#D4AF37] text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs mt-2">
                Đặt lịch lấy nhân mụn ngay
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.hero} alt="Hương House Spa Hero" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#FDFBF9]/95 via-[#FDFBF9]/70 md:via-[#FDFBF9]/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full mb-6">
              <Sparkles size={16} />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Sạch mụn - Sáng thâm - Tự tin tỏa sáng</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
              Trị Mụn Tận Gốc <br />
              <span className="italic text-[#D4AF37] font-normal">Không Thâm, Không Đau</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
              Kỹ thuật <strong>Lấy nhân mụn bằng tay</strong> chuẩn y khoa tại Hương House giúp giải quyết triệt để ổ viêm, kết hợp Peel tái tạo giúp da sạch thâm, mịn màng chỉ sau liệu trình đầu tiên.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#2D2D2D] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-sm md:text-base shadow-2xl hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-2 group tracking-wide">
                ĐẶT LỊCH LẤY NHÂN MỤN <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#results" className="bg-white text-[#2D2D2D] border border-gray-200 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-sm md:text-base hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2 group tracking-wide shadow-sm">
                XEM KẾT QUẢ THẬT
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6 text-[10px] font-bold uppercase tracking-widest opacity-60">
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-600" /> Không sưng đỏ</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-600" /> Dụng cụ riêng biệt</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-600" /> Hiệu quả nhanh</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE SERVICE: LẤY NHÂN MỤN */}
      <section id="acne" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img src={IMAGES.acne_treatment} alt="Lấy nhân mụn bằng tay" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-xl max-w-xs hidden md:block border border-gray-50">
                <p className="text-[#D4AF37] text-3xl font-bold mb-2 italic" style={{ fontFamily: '"Playfair Display", serif' }}>100%</p>
                <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">Khách hàng hài lòng với kỹ thuật lấy mụn không thâm.</p>
              </div>
            </div>
            <div>
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Dịch vụ nổi bật nhất</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                Kỹ Thuật Lấy Nhân Mụn <br /><span className="italic text-[#D4AF37] font-normal">Bằng Tay Chuyên Nghiệp</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Kỹ thuật chuẩn y khoa", desc: "Từng nốt mụn được xử lý khéo léo bằng tay, lấy sạch chân mụn mà không gây dập nát mô da." },
                  { title: "Hạn chế tối đa tổn thương", desc: "Không dùng kim chích bừa bãi, giảm thiểu nguy cơ để lại sẹo rỗ và vết thâm sâu." },
                  { title: "Làm sạch sâu từng lỗ chân lông", desc: "Kết hợp hút bã nhờn và mụn cám, giúp bề mặt da thông thoáng ngay lập tức." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="bg-[#FAF7F2] group-hover:bg-[#D4AF37] transition-colors w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
                      <Target className="text-[#D4AF37] group-hover:text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-10 bg-[#2D2D2D] text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest hover:bg-[#D4AF37] transition-all shadow-lg uppercase">
                Đặt lịch soi da miễn phí
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GROUP: ĐIỀU TRỊ DA */}
      <section id="treatments" className="py-20 md:py-32 bg-[#FAF7F2]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>Phác Đồ Điều Trị Chuyên Sâu</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-light">Ứng dụng công nghệ và hoạt chất hiện đại giúp phục hồi và tái tạo làn da từ bên trong.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Peel Da */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
              <div className="h-48 overflow-hidden rounded-2xl mb-6">
                <img src={IMAGES.peel_skin} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Peel mụn thâm" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">Peel Mụn - Thâm</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">Sử dụng các hoạt chất chuyên biệt giúp gom cồi mụn nhanh, mờ thâm nám và đồng đều màu da.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide opacity-70"><CheckCircle2 size={14} className="text-[#D4AF37]" /> Giảm mụn viêm</li>
                <li className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide opacity-70"><CheckCircle2 size={14} className="text-[#D4AF37]" /> Mờ thâm cấp tốc</li>
                <li className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide opacity-70"><CheckCircle2 size={14} className="text-[#D4AF37]" /> Tái tạo nền da</li>
              </ul>
              <button className="w-full py-4 border border-gray-100 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all">Tìm hiểu thêm</button>
            </div>

            {/* Meso */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
              <div className="h-48 overflow-hidden rounded-2xl mb-6">
                <img src={IMAGES.meso} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Meso therapy" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">Meso Căng Bóng</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">Đưa trực tiếp dưỡng chất vào sâu trong da, giúp cấp ẩm tức thì và phục hồi hàng rào bảo vệ da.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide opacity-70"><CheckCircle2 size={14} className="text-[#D4AF37]" /> Cấp ẩm chuyên sâu</li>
                <li className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide opacity-70"><CheckCircle2 size={14} className="text-[#D4AF37]" /> Phục hồi da yếu</li>
                <li className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide opacity-70"><CheckCircle2 size={14} className="text-[#D4AF37]" /> Da sáng khỏe</li>
              </ul>
              <button className="w-full py-4 border border-gray-100 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all">Tìm hiểu thêm</button>
            </div>

            {/* Triệt Lông */}
            <div id="laser" className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
              <div className="h-48 overflow-hidden rounded-2xl mb-6">
                <img src={IMAGES.hair_removal} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Triệt lông laser" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">Triệt Lông Diode</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">Công nghệ Laser đầu lạnh, không đau rát, triệt sạch gốc nang lông và làm sáng vùng da dưới cánh tay.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide opacity-70"><CheckCircle2 size={14} className="text-[#D4AF37]" /> Không đau - Không rát</li>
                <li className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide opacity-70"><CheckCircle2 size={14} className="text-[#D4AF37]" /> Hiệu quả lâu dài</li>
                <li className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide opacity-70"><CheckCircle2 size={14} className="text-[#D4AF37]" /> Se khít lỗ chân lông</li>
              </ul>
              <button className="w-full py-4 border border-gray-100 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all">Tìm hiểu thêm</button>
            </div>
          </div>
        </div>
      </section>

      {/* UPSELL: HIFU TRẺ HÓA */}
      <section id="hifu" className="py-20 md:py-32 bg-[#2D2D2D] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-block bg-[#D4AF37] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">Dịch vụ cao cấp</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
              Nâng Cơ Trẻ Hóa <br />
              <span className="italic text-[#D4AF37] font-normal">Công Nghệ HIFU</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-lg mb-10 leading-relaxed font-light">
              Giải pháp vàng cho làn da chớm lão hóa. HIFU giúp nâng cơ không xâm lấn, xóa mờ nếp nhăn và tạo hình khuôn mặt V-line thon gọn mà không cần nghỉ dưỡng.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <Zap className="text-[#D4AF37] mt-1" size={18} />
                <p className="text-xs font-bold uppercase tracking-widest">Nâng cơ <br/>tức thì</p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-[#D4AF37] mt-1" size={18} />
                <p className="text-xs font-bold uppercase tracking-widest">Săn chắc <br/>từ bên trong</p>
              </div>
            </div>
            <button className="bg-[#D4AF37] text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest hover:bg-white hover:text-[#2D2D2D] transition-all">
              ĐẶT LỊCH TRẢI NGHIỆM
            </button>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden aspect-[4/5] md:aspect-auto">
              <img src={IMAGES.hifu} className="w-full h-full md:h-[600px] object-cover opacity-80" alt="HIFU Treatment" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/20 rounded-full animate-ping pointer-events-none" />
          </div>
        </div>
      </section>

      {/* RESULTS: BEFORE/AFTER */}
      <section id="results" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 mb-16 text-center">
            <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">Nhân chứng sống</span>
            <h2 className="text-3xl md:text-5xl font-bold italic" style={{ fontFamily: '"Playfair Display", serif' }}>Kết Quả Thật - Khách Hàng Thật</h2>
        </div>

        <div 
          className="relative max-w-4xl mx-auto h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden cursor-ew-resize border-8 border-[#FAF7F2] shadow-2xl"
          ref={sliderRef}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          <div className="absolute inset-0">
            <img src={IMAGES.after} className="w-full h-full object-cover" alt="Sau điều trị" />
            <div className="absolute top-6 right-6 bg-green-500/90 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Sau: 4 buổi</div>
          </div>
          
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
            <img 
              src={IMAGES.before} 
              className="w-full h-[400px] md:h-[600px] object-cover max-w-none" 
              alt="Trước điều trị" 
              style={{ width: sliderRef.current ? sliderRef.current.offsetWidth : '100vw' }} 
            />
            <div className="absolute top-6 left-6 bg-red-500/90 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Trước: Mụn & Thâm</div>
          </div>

          <div className="absolute inset-y-0 w-1 bg-white z-20" style={{ left: `${sliderPos}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-2xl text-[#2D2D2D]">
              <div className="flex gap-1.5 items-center">
                <div className="w-1 h-4 md:h-6 bg-[#D4AF37] rounded-full" />
                <div className="w-1 h-4 md:h-6 bg-[#D4AF37] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-4 md:gap-8 overflow-x-auto pb-4 px-6 no-scrollbar">
           {[1,2,3,4,5].map(i => (
             <div key={i} className="min-w-[150px] md:min-w-[200px] h-[150px] md:h-[200px] bg-gray-100 rounded-3xl overflow-hidden shadow-sm">
                <img src={`https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=60&w=300&rand=${i}`} className="w-full h-full object-cover" alt="Khách hàng" />
             </div>
           ))}
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="py-20 md:py-32 bg-[#FAF7F2]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16" style={{ fontFamily: '"Playfair Display", serif' }}>Cam Kết Vàng Tại Hương House</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Flame className="text-[#D4AF37]" size={32} />
              </div>
              <h4 className="font-bold uppercase tracking-widest mb-4">Không thâm sau lấy mụn</h4>
              <p className="text-gray-500 text-sm font-light leading-relaxed">Quy trình xử lý nhân mụn khép kín và kỹ thuật tay nghề cao đảm bảo không để lại thâm sẹo.</p>
            </div>
            <div>
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <ShieldCheck className="text-[#D4AF37]" size={32} />
              </div>
              <h4 className="font-bold uppercase tracking-widest mb-4">An toàn tuyệt đối</h4>
              <p className="text-gray-500 text-sm font-light leading-relaxed">Sử dụng dụng cụ dùng một lần và dược mỹ phẩm chính hãng có chứng nhận y khoa.</p>
            </div>
            <div>
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Infinity className="text-[#D4AF37]" size={32} />
              </div>
              <h4 className="font-bold uppercase tracking-widest mb-4">Hiệu quả rõ rệt</h4>
              <p className="text-gray-500 text-sm font-light leading-relaxed">Cam kết sự thay đổi của làn da bằng văn bản sau mỗi liệu trình điều trị.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-[1.1]" style={{ fontFamily: '"Playfair Display", serif' }}>
             Bắt Đầu Hành Trình <br />
             <span className="text-[#D4AF37] font-normal italic">Thay Đổi Làn Da</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <button className="w-full sm:w-auto bg-[#2D2D2D] text-white px-12 md:px-16 py-6 md:py-7 rounded-full font-bold text-lg md:text-xl hover:bg-[#D4AF37] transition-all shadow-2xl tracking-wider">
               ĐẶT LỊCH NGAY
             </button>
             <a href={socialLinks[2].url} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#0068FF] text-white px-12 md:px-16 py-6 md:py-7 rounded-full font-bold text-lg md:text-xl hover:bg-blue-600 transition-all shadow-2xl flex items-center justify-center gap-3">
               <MessageCircle size={24} /> NHẮN ZALO
             </a>
          </div>
          <p className="mt-10 text-xs md:text-sm text-gray-400 font-bold uppercase tracking-[0.4em]">Số lượng ưu đãi có hạn mỗi ngày</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white pt-16 pb-32 md:pb-20 border-t border-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Home className="text-[#D4AF37] w-6 h-6" />
              <span className="text-2xl font-bold tracking-tighter uppercase" style={{ fontFamily: '"Playfair Display", serif' }}>HƯƠNG <span className="text-[#D4AF37]">HOUSE</span> SPA</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mb-8 leading-relaxed font-light italic">
              "Làn da đẹp không tự nhiên mà có, nó đến từ sự chăm sóc tận tâm tại Hương House."
            </p>
            
            {/* --- CẬP NHẬT PHẦN MẠNG XÃ HỘI --- */}
            <div className="flex gap-4">
               {socialLinks.map(social => (
                 <a 
                   key={social.name} 
                   href={social.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="px-4 py-2 border border-gray-100 rounded-full text-[10px] font-bold hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all cursor-pointer tracking-widest uppercase block"
                 >
                   {social.name}
                 </a>
               ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-[#D4AF37]">Dịch vụ</h4>
            <ul className="space-y-3 text-xs text-gray-500 font-medium">
              <li>Lấy nhân mụn bằng tay</li>
              <li>Peel mụn - thâm</li>
              <li>Meso phục hồi</li>
              <li>Trẻ hóa HIFU</li>
              <li>Triệt lông Laser</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-[#D4AF37]">Liên hệ</h4>
            <p className="text-xs text-gray-500 leading-7 font-medium mb-4">
              123 Đường Sắc Đẹp, Quận 1, TP. HCM<br />
              <span className="text-[#2D2D2D] font-bold">Hotline: 094 305 91 67</span>
            </p>
            <p className="text-xs text-gray-500 leading-7 font-medium">
              Mở cửa: 09:00 - 20:00<br />
              (Tất cả các ngày trong tuần)
            </p>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE ACTIONS */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-xl border-t border-gray-100 p-4 flex gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <button className="flex-[3] bg-[#D4AF37] text-white py-4 rounded-2xl font-bold shadow-lg text-[10px] uppercase tracking-[0.2em]">
          Lấy Mụn Ngay
        </button>
        <a href={socialLinks[2].url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#0068FF] text-white rounded-2xl flex items-center justify-center shadow-lg">
          <MessageCircle size={24} />
        </a>
        <a href="tel:0901234567" className="flex-1 bg-[#2D2D2D] text-white rounded-2xl flex items-center justify-center shadow-lg">
          <Phone size={24} />
        </a>
      </div>

    </div>
  );
};

export default App;