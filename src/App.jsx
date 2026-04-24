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
  Infinity,
  Clock,
  Plus,
  Minus
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- HÌNH ẢNH CAO CẤP ---
const IMAGES = {
  logo: "/public/images/lgHHS.png",
  hero: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1600",
  acne_treatment: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
  peel_skin: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=800",
  meso: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
  hifu: "https://images.unsplash.com/photo-1519415510236-85592ada7b08?auto=format&fit=crop&q=80&w=1200",
  hair_removal: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?auto=format&fit=crop&q=80&w=800",
  before: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=800",
  after: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
  gallery: [
    "images/bf1.jpg",
    "images/bf5.jpg",
    "images/bf3.jpg",
    "images/bf4.jpg"
  ]
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left gap-4"
      >
        <span className="font-bold text-sm md:text-base uppercase tracking-tight">{question}</span>
        {isOpen ? <Minus size={18} className="text-[#D4AF37]" /> : <Plus size={18} className="text-gray-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-sm mt-4 leading-relaxed font-light">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
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
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  const navLinks = [
    { name: "Trị Mụn", href: "#acne" },
    { name: "Quy Trình", href: "#process" },
    { name: "Bảng Giá", href: "#pricing" },
    { name: "Kết Quả", href: "#results" },
    { name: "Hỏi Đáp", href: "#faq" }
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100063713103271' },
    { name: 'TikTok', url: 'https://tiktok.com/@huonghousespa' },
    { name: 'Zalo', url: 'https://zalo.me/0943059167' }
  ];

  // Bảng giá lấy từ hình ảnh thực tế
  const pricingData = [
    { name: "Nặn Mụn Cơ Bản", price: "250", unit: "k", desc: "Vệ sinh da và lấy nhân mụn chuẩn y khoa." },
    { name: "Nặn Mụn Oxygen", price: "380", unit: "k", desc: "Cung cấp oxy tươi giúp da phục hồi, giảm sưng." },
    { name: "Nặn Mụn 4F", price: "650", unit: "k", desc: "Phác đồ điều trị chuyên sâu cho mụn viêm nặng." },
    { name: "Pumpkin Peel", price: "650", unit: "k", desc: "Thay da sinh học bằng bí đỏ, sáng da mờ thâm." },
    { name: "Peel Châu Âu", price: "2.200", unit: "k", desc: "Công nghệ tái tạo da cao cấp từ Châu Âu." },
    { name: "Meso Therapy", price: "2.500", unit: "k", desc: "Cấy tinh chất nuôi dưỡng da từ sâu bên trong." },
    { name: "Siêu Cấp Ẩm", price: "650", unit: "k", desc: "Hồi sinh làn da khô ráp, thiếu sức sống." }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#2D2D2D] selection:bg-[#D4AF37] selection:text-white" style={{ fontFamily: '"Montserrat", sans-serif' }}>
      
      {/* HEADER */}
      <nav className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 font-medium">
        <div className="bg-white/90 backdrop-blur-md border border-white/40 shadow-sm rounded-full px-4 md:px-6 py-2 md:py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={IMAGES.logo} alt="Hương House Spa" className="h-8 md:h-10 w-auto object-contain" />
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
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">BẢNG GIÁ NIÊM YẾT - DỊCH VỤ CHUYÊN NGHIỆP</span>
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
                XEM BẢNG GIÁ CHI TIẾT <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
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
            </div>
            <div>
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Dịch vụ cốt lõi</span>
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
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT PROCESS */}
      <section id="process" className="py-20 md:py-32 bg-[#FAF7F2]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">Tận tâm trong từng bước</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>Quy Trình Trị Mụn <br /><span className="italic text-[#D4AF37] font-normal">Chuẩn Y Khoa</span></h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Thăm Khám", desc: "Soi da và phân tích tình trạng mụn để đưa ra phác đồ điều trị riêng biệt." },
              { step: "02", title: "Làm Sạch", desc: "Tẩy trang, rửa mặt và tẩy tế bào chết bằng dược mỹ phẩm dịu nhẹ." },
              { step: "03", title: "Xử Lý Mụn", desc: "Kỹ thuật lấy nhân mụn bằng tay khéo léo, làm sạch sâu ổ viêm không để lại thâm." },
              { step: "04", title: "Phục Hồi", desc: "Điện di tinh chất hoặc đắp mặt nạ làm dịu, giúp da phục hồi ngay tức thì." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 relative overflow-hidden group">
                <span className="absolute -top-4 -right-4 text-8xl font-bold text-gray-50 group-hover:text-[#D4AF37]/5 transition-colors z-0 select-none">{item.step}</span>
                <div className="relative z-10">
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#D4AF37]" /> {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING - UPDATED FROM IMAGE */}
      <section id="pricing" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-gray-50">
            <div className="text-center mb-16">
              <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">Menu Dịch Vụ</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>Bảng Giá Tại Hương House</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full mt-4" />
            </div>
            
            <div className="space-y-1">
              {pricingData.map((item, i) => (
                <div key={i} className="flex justify-between items-center gap-4 py-6 border-b border-gray-50 group hover:px-4 transition-all hover:bg-[#FAF7F2] rounded-2xl">
                  <div>
                    <h4 className="font-bold text-sm md:text-xl mb-1 group-hover:text-[#D4AF37] transition-colors tracking-tight uppercase" style={{ fontFamily: '"Playfair Display", serif' }}>{item.name}</h4>
                    <p className="text-gray-400 text-[10px] md:text-xs font-light italic">{item.desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-bold text-[#2D2D2D] text-lg md:text-2xl">{item.price}</span>
                    <span className="text-[#D4AF37] font-bold text-sm md:text-base ml-1">{item.unit}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 flex flex-col items-center">
              <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-8 text-center italic">Giá trên đã bao gồm toàn bộ liệu trình, cam kết không phát sinh chi phí.</p>
              <button className="bg-[#2D2D2D] text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-all shadow-xl">
                NHẬN TƯ VẤN PHÁC ĐỒ MIỄN PHÍ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS: BEFORE/AFTER SLIDER */}
      <section id="results" className="py-20 md:py-32 bg-[#FAF7F2]">
        <div className="container mx-auto px-6 mb-16 text-center">
            <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">Chứng thực hiệu quả</span>
            <h2 className="text-3xl md:text-5xl font-bold italic" style={{ fontFamily: '"Playfair Display", serif' }}>Kết Quả Thật - Khách Hàng Thật</h2>
        </div>

        <div 
          className="relative max-w-4xl mx-auto h-[400px] md:h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden cursor-ew-resize border-8 border-white shadow-2xl select-none"
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

          <div className="absolute inset-y-0 w-1 bg-white z-10 shadow-[0_0_10px_rgba(0,0,0,0.3)]" style={{ left: `${sliderPos}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl text-[#2D2D2D]">
              <div className="flex gap-1 items-center">
                <div className="w-1 h-4 md:h-5 bg-[#D4AF37] rounded-full" />
                <div className="w-1 h-4 md:h-5 bg-[#D4AF37] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {IMAGES.gallery.map((img, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="group relative aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg bg-white"
              >
                <img src={img} alt={`Kết quả khách hàng ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold italic" style={{ fontFamily: '"Playfair Display", serif' }}>Câu Hỏi Thường Gặp</h2>
          </div>
          <div className="space-y-2">
            <FAQItem 
              question="Nặn mụn cơ bản tại Hương House khác gì tự nặn ở nhà?" 
              answer="Tại Hương House, chúng tôi sử dụng kỹ thuật lấy nhân mụn bằng tay chuẩn y khoa, lấy sạch tận gốc chân mụn mà không gây dập nát mô da, kết hợp tiệt trùng bằng ánh sáng Bio-Light giúp ngăn mụn tái phát và không để lại sẹo."
            />
            <FAQItem 
              question="Meso Therapy có phù hợp với da đang bị mụn không?" 
              answer="Meso Therapy rất tốt cho việc phục hồi da sau mụn. Tuy nhiên, nếu da đang có mụn viêm nặng, chúng tôi sẽ ưu tiên điều trị sạch mụn trước bằng các liệu trình như Nặn mụn 4F hoặc Peel Châu Âu, sau đó mới tiến hành Meso để phục hồi và làm sáng da."
            />
            <FAQItem 
              question="Peel da bí đỏ (Pumpkin Peel) có làm bong tróc da nhiều không?" 
              answer="Pumpkin Peel là phương pháp thay da sinh học nhẹ nhàng, chủ yếu loại bỏ tế bào sừng chết và làm sáng da. Da chỉ hơi khô nhẹ trong 1-2 ngày đầu và không bị bong tróc từng mảng như các loại peel nồng độ cao khác."
            />
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="py-20 md:py-32 bg-[#FAF7F2]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16" style={{ fontFamily: '"Playfair Display", serif' }}>Cam Kết Vàng Tại Hương House</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { icon: <Flame size={32} />, title: "Tận tâm xử lý", desc: "Kỹ thuật tay nghề cao đảm bảo không để lại thâm sẹo." },
              { icon: <ShieldCheck size={32} />, title: "An toàn tuyệt đối", desc: "Dụng cụ dùng một lần và dược mỹ phẩm chính hãng." },
              { icon: <Infinity size={32} />, title: "Hiệu quả rõ rệt", desc: "Cam kết sự thay đổi của làn da sau mỗi liệu trình." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md text-[#D4AF37]">
                  {item.icon}
                </div>
                <h4 className="font-bold uppercase tracking-widest mb-4 text-sm">{item.title}</h4>
                <p className="text-gray-500 text-xs font-light leading-relaxed max-w-[250px]">{item.desc}</p>
              </div>
            ))}
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
             <button className="w-full sm:w-auto bg-[#2D2D2D] text-white px-12 md:px-16 py-6 md:py-7 rounded-full font-bold text-lg md:text-xl hover:bg-[#D4AF37] transition-all shadow-2xl tracking-wider uppercase">
               ĐẶT LỊCH NGAY
             </button>
             <a href={socialLinks[2].url} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#0068FF] text-white px-12 md:px-16 py-6 md:py-7 rounded-full font-bold text-lg md:text-xl hover:bg-blue-600 transition-all shadow-2xl flex items-center justify-center gap-3 uppercase">
               <MessageCircle size={24} /> NHẮN ZALO
             </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white pt-16 pb-32 md:pb-20 border-t border-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={IMAGES.logo} alt="Hương House Spa" className="h-10 w-auto object-contain" />
              <span className="text-2xl font-bold tracking-tighter uppercase" style={{ fontFamily: '"Playfair Display", serif' }}>HƯƠNG <span className="text-[#D4AF37]">HOUSE</span> SPA</span>
            </div>
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
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-[#D4AF37]">Dịch vụ hot</h4>
            <ul className="space-y-3 text-xs text-gray-500 font-medium">
              <li>Nặn mụn Oxygen</li>
              <li>Peel Châu Âu</li>
              <li>Meso Therapy</li>
              <li>Siêu cấp ẩm</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-[#D4AF37]">Liên hệ</h4>
            <p className="text-xs text-gray-500 leading-7 font-medium">
              123 Đường Sắc Đẹp, Quận 1, TP. HCM<br />
              <span className="text-[#2D2D2D] font-bold">Hotline: 094 305 9167</span>
            </p>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE ACTIONS */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-xl border-t border-gray-100 p-4 flex gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <button className="flex-[3] bg-[#D4AF37] text-white py-4 rounded-2xl font-bold shadow-lg text-[10px] uppercase tracking-[0.2em]">
          Tư vấn phác đồ
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