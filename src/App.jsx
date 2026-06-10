import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronDown,
  Sparkles,
  MessageCircle,
  Menu,
  X,
  CheckCircle2,
  Zap,
  Activity,
  Maximize2,
  Target,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100063713103271",
  },
  { name: "TikTok", url: "https://www.tiktok.com/@ly_ngoc_huong" },
  { name: "Zalo", url: "https://zalo.me/0943059167" },
];
// --- HÌNH ẢNH CAO CẤP & THỰC TẾ ---
const IMAGES = {
  logo: "/images/lgHHS.png",
  hero: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1600",
  acne_treatment: "/images/acne_treatment.jpg",
  celluma_real: "/images/celluma.jpg",
  acne_gallery: [
  "/images/acne1.jpg",
  "/images/acne2.jpg",
  "/images/acne3.jpg",
  "/images/acne4.jpg",
],

celluma_gallery: [
  "/images/celluma1.jpg",
  "/images/celluma2.jpg",
  "/images/celluma3.jpg",
],

  hifu_gallery: [
    "/images/hifu1.jpg",
    "/images/hifu2.jpg",
    "/images/hifu3.jpg",
    "/images/hifu4.jpg",
  ],

  // Gallery kết quả (Chỉ hình ảnh)
  results_images: [
    {
      id: 1,
      url: "/images/bf1.jpg",
      title: "HIFU làm săn nọng cằm",
      size: "large",
    },
    {
      id: 2,
      url: "/images/bf2.jpg",
      title: "Tạo hình cằm tự nhiên",
      size: "small",
    },
    {
      id: 3,
      url: "/images/bf3.jpg",
      title: "Cân chỉnh cằm lệch",
      size: "small",
    },
    {
      id: 4,
      url: "/images/bf4.jpg",
      title: "Peel nách",
      size: "small",
    },
    {
      id: 5,
      url: "/images/bf5.jpg",
      title: "Làm đầy môi tự nhiên",
      size: "small",
    },
  ],
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHifuImg, setActiveHifuImg] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activePricingTab, setActivePricingTab] = useState("skincare");

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const skincarePricing = [
    { name: "Nặn Mụn Cơ Bản", price: "250", unit: "k", desc: "Làm sạch da cơ bản" },
    { name: "Nặn Mụn Oxygen", price: "380", unit: "k", desc: "Phục hồi + giảm viêm" },
    { name: "Nặn Mụn 4F", price: "650", unit: "k", desc: "Điều trị mụn chuyên sâu" },
    { name: "Nặn Mụn Skymedic", price: "1200", unit: "k", desc: "Công nghệ cao phục hồi da" },
    { name: "Nặn Mụn Aquasure", price: "550", unit: "k", desc: "Làm sạch + cấp ẩm" },
    { name: "Peel Da", price: "2200", unit: "k", desc: "Tái tạo da, giảm thâm" },
    { name: "Meso Therapy", price: "2500 - 4000", unit: "k", desc: "Cấy dưỡng chất chuyên sâu" },
    { name: "Siêu Cấp Ẩm", price: "850", unit: "k", desc: "Cấp ẩm phục hồi da" },
    { name: "Peel Body (Nách/Mông/Lưng)", price: "2500 - 3000", unit: "k", desc: "Làm sáng và giảm thâm body" },
  ];

  const hairRemovalPricing = {
    package: [
      { name: "Trán", price: "1.200", unit: "k", desc: "Liệu trình triệt lông trán sạch mịn (Bảo hành)" },
      { name: "Mép", price: "1.200", unit: "k", desc: "Liệu trình triệt lông mép nhẹ nhàng (Bảo hành)" },
      { name: "Cằm", price: "1.200", unit: "k", desc: "Liệu trình triệt lông vùng cằm (Bảo hành)" },
      { name: "Mặt", price: "2.800", unit: "k", desc: "Liệu trình triệt lông toàn mặt sáng da (Bảo hành)" },
      { name: "Nách", price: "2.200", unit: "k", desc: "Liệu trình triệt lông nách sáng mịn (Bảo hành)" },
      { name: "Lưng", price: "2.300", unit: "k", desc: "Liệu trình triệt lông vùng lưng mịn màng (Bảo hành)" },
      { name: "Bụng", price: "2.300", unit: "k", desc: "Liệu trình triệt lông vùng bụng (Bảo hành)" },
      { name: "Nửa 2 tay", price: "2.500", unit: "k", desc: "Liệu trình triệt lông nửa 2 tay (Bảo hành)" },
      { name: "Cả 2 tay", price: "3.200", unit: "k", desc: "Liệu trình triệt lông cả 2 tay (Bảo hành)" },
      { name: "Nửa 2 chân", price: "3.200", unit: "k", desc: "Liệu trình triệt lông nửa 2 chân (Bảo hành)" },
      { name: "Cả 2 chân", price: "4.600", unit: "k", desc: "Liệu trình triệt lông cả 2 chân (Bảo hành)" },
      { name: "Bikini", price: "4.800", unit: "k", desc: "Liệu trình triệt lông vùng bikini an toàn (Bảo hành)" },
      { name: "Triệt toàn thân", price: "15.000", unit: "k", desc: "Liệu trình triệt lông toàn thân trọn gói (Bảo hành)" }
    ],
    single: [
      { name: "Mặt", price: "300", unit: "k/buổi", desc: "Triệt lông mặt buổi lẻ" },
      { name: "Nách", price: "300", unit: "k/buổi", desc: "Triệt lông nách buổi lẻ" },
      { name: "Tay", price: "400", unit: "k/buổi", desc: "Triệt lông tay buổi lẻ" },
      { name: "Chân", price: "600", unit: "k/buổi", desc: "Triệt lông chân buổi lẻ" },
      { name: "Bikini", price: "400", unit: "k/buổi", desc: "Triệt lông bikini buổi lẻ" }
    ]
  };

  return (
    <div
      className="min-h-screen bg-[#FDFBF9] text-[#2D2D2D] selection:bg-[#D4AF37] selection:text-white"
      style={{ fontFamily: '"Montserrat", sans-serif' }}
    >
      {/* HEADER */}
      <nav className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 font-medium">
        <div className="bg-white/90 backdrop-blur-md border border-white/40 shadow-sm rounded-full px-4 md:px-6 py-2 md:py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={IMAGES.logo}
              alt="Hương House Spa"
              className="h-8 md:h-10 w-auto object-contain"
            />
            <span
              className="text-sm md:text-xl font-bold tracking-tighter uppercase text-[#2D2D2D]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              HƯƠNG <span className="text-[#D4AF37]">HOUSE</span> SPA
            </span>
          </div>

          <div className="hidden lg:flex gap-6 items-center text-[10px] uppercase tracking-[0.15em] font-bold">
            <a href="#acne" className="hover:text-[#D4AF37] transition-colors">
              Trị Mụn
            </a>
            <a href="#tech" className="hover:text-[#D4AF37] transition-colors">
              Công Nghệ
            </a>
            <a
              href="#pricing"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Bảng Giá
            </a>
            <a
              href="#results"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Kết Quả
            </a>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <a
              href="https://zalo.me/0901234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#0068FF] text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-all"
            >
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
      </nav>
      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-white z-50 shadow-2xl p-6 flex flex-col gap-6 lg:hidden"
            >
              {/* Close button */}
              <div className="flex justify-end">
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* Menu links */}
              <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
                <a href="#acne" onClick={() => setIsMenuOpen(false)}>
                  Trị Mụn
                </a>
                <a href="#tech" onClick={() => setIsMenuOpen(false)}>
                  Công Nghệ
                </a>
                <a href="#pricing" onClick={() => setIsMenuOpen(false)}>
                  Bảng Giá
                </a>
                <a href="#results" onClick={() => setIsMenuOpen(false)}>
                  Kết Quả
                </a>
              </div>

              {/* CTA */}
              <a
                href="https://zalo.me/0943059167"
                target="_blank"
                className="mt-6 bg-[#D4AF37] text-white py-4 rounded-2xl font-bold text-center uppercase tracking-widest"
              >
                Tư vấn ngay
              </a>

              {/* Social */}
              <div className="mt-auto flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    className="text-xs border px-3 py-2 rounded-full"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Hương House Spa Hero"
            className="w-full h-full object-cover object-center"
          />
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
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                BẢNG GIÁ NIÊM YẾT - DỊCH VỤ CHUYÊN NGHIỆP
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
              Trị Mụn - Mờ Thâm <br />
              <span className="italic text-[#D4AF37] font-normal">
                 Sạch Sâu Lỗ Chân Lông
              </span>
            </h1>

            <p className="text-sm md:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Kết hợp các hoạt chất hỗ trợ trị mụn - thâm - sạch sâu thoáng lỗ chân lông
</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#pricing" className="bg-[#2D2D2D] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-sm md:text-base shadow-2xl hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-2 group tracking-wide no-underline">
                XEM BẢNG GIÁ CHI TIẾT{" "}
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE SERVICE: LẤY NHÂN MỤN (RESTORED) */}
      <section id="acne" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.acne_treatment}
                  alt="Lấy nhân mụn bằng tay"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {IMAGES.acne_gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Hình ảnh điều trị mụn thực tế ${i + 1} tại Hương House Spa`}
                    className="w-full h-24 object-cover rounded-xl"
                  />
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
                Dịch vụ cốt lõi
              </span>
              <h2
                className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Kỹ Thuật Lấy Nhân Mụn <br />
                <span className="italic text-[#D4AF37] font-normal">
                  Bằng Tay Chuyên Nghiệp
                </span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Kỹ thuật chuyên nghiệp",
                    desc: "Từng nốt mụn được xử lý khéo léo bằng tay, lấy sạch chân mụn mà không gây dập nát mô da.",
                  },
                  {
                    title: "Hạn chế tối đa tổn thương",
                    desc: "Không dùng kim chích bừa bãi, giảm thiểu nguy cơ để lại sẹo rỗ và vết thâm sâu.",
                  },
                  {
                    title: "Làm sạch sâu từng lỗ chân lông",
                    desc: "Kết hợp hút bã nhờn và mụn cám, giúp bề mặt da thông thoáng ngay lập tức.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="bg-[#FAF7F2] group-hover:bg-[#D4AF37] transition-colors w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
                      <Target
                        className="text-[#D4AF37] group-hover:text-white"
                        size={20}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: HI-TECH EQUIPMENTS */}
      <section
        id="tech"
        className="py-20 md:py-32 bg-[#FDFBF9] overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">
              Trang thiết bị hiện đại
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Công Nghệ <br />
              <span className="italic text-[#D4AF37] font-normal">
                Đỉnh Cao Từ Hàn Quốc & Mỹ
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Máy HIFU Ultraformer III */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-8"
            >
              <div className="relative group">
                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeHifuImg}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(e, info) => {
                        if (info.offset.x < -50) {
                          setActiveHifuImg((prev) => (prev + 1) % IMAGES.hifu_gallery.length);
                        } else if (info.offset.x > 50) {
                          setActiveHifuImg((prev) =>
                            prev === 0 ? IMAGES.hifu_gallery.length - 1 : prev - 1
                          );
                        }
                      }}
                      src={IMAGES.hifu_gallery[activeHifuImg]}
                      alt={`Công nghệ nâng cơ trẻ hóa da HIFU Ultraformer III - hình ảnh thực tế ${activeHifuImg + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
                    />
                  </AnimatePresence>
                </div>
                <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
                  {IMAGES.hifu_gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveHifuImg(idx)}
                      className={`h-1.5 rounded-full transition-all ${activeHifuImg === idx ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/50"}`}
                    />
                  ))}
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-4">
                  <Activity size={20} />
                  <span className="font-bold text-[10px] uppercase tracking-widest italic">
                    Công nghệ MMFU từ Hàn Quốc
                  </span>
                </div>
                <h3
                  className="text-2xl md:text-4xl font-bold mb-4"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  HIFU Ultraformer III
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light mb-6">
                  Sóng siêu âm hội tụ giúp nâng cơ mặt, xóa nhăn và thon gọn
                  đường viền hàm tức thì.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Nâng cơ tầng sâu",
                    "Xóa nhăn đuôi mắt",
                    "Trẻ hóa làn da",
                    "Tạo mặt V-line",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-[10px] font-bold uppercase text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />{" "}
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Máy Celluma Skymedic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-8 lg:mt-24"
            >
              <div className="relative">
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-[#FAF7F2]">
                  <img
                    src={IMAGES.celluma_real}
                    alt="Celluma Face Real"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {IMAGES.celluma_gallery.map((img, i) => (
                    <img key={i} src={img} alt={`Hình ảnh liệu trình trị liệu mụn bằng ánh sáng Celluma ${i + 1}`} className="rounded-xl h-28 object-cover" />
                  ))}
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-4">
                  <Zap size={20} />
                  <span className="font-bold text-[10px] uppercase tracking-widest italic">
                    Chứng nhận bởi FDA Hoa Kỳ
                  </span>
                </div>
                <h3
                  className="text-2xl md:text-4xl font-bold mb-4"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Ánh Sáng Trị Liệu Celluma
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light mb-6">
                  Công nghệ LED sinh học giúp tiêu diệt vi khuẩn mụn và giảm
                  viêm đỏ ngay lập tức.
                </p>
                <div className="space-y-4">
                  {[
                    "Ánh sáng Xanh: Diệt khuẩn mụn.",
                    "Ánh sáng Đỏ: Giảm thâm, tăng sinh Collagen.",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-[#FAF7F2] p-4 rounded-2xl"
                    >
                      <CheckCircle2
                        className="text-[#D4AF37] shrink-0"
                        size={18}
                      />
                      <p className="text-xs font-semibold">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">
            Menu Dịch Vụ
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-10"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Bảng Giá Niêm Yết
          </h2>

          {/* TABS SELECTOR */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
            <button
              onClick={() => setActivePricingTab("skincare")}
              className={`px-6 py-3 rounded-full font-semibold text-[10px] md:text-xs tracking-wider uppercase transition-all duration-300 shadow-sm ${
                activePricingTab === "skincare"
                  ? "bg-[#D4AF37] text-white"
                  : "bg-[#FAF7F2] text-[#2D2D2D] hover:bg-[#FAF7F2]/80"
              }`}
            >
              Chăm Sóc & Điều Trị Da
            </button>
            <button
              onClick={() => setActivePricingTab("hairRemoval")}
              className={`px-6 py-3 rounded-full font-semibold text-[10px] md:text-xs tracking-wider uppercase transition-all duration-300 shadow-sm ${
                activePricingTab === "hairRemoval"
                  ? "bg-[#D4AF37] text-white"
                  : "bg-[#FAF7F2] text-[#2D2D2D] hover:bg-[#FAF7F2]/80"
              }`}
            >
              Triệt Lông (Diode Laser)
            </button>
          </div>

          {activePricingTab === "skincare" ? (
            <div className="max-w-4xl mx-auto space-y-2 animate-fadeIn">
              {skincarePricing.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-6 border-b border-gray-50 group hover:px-6 transition-all hover:bg-[#FAF7F2] rounded-3xl"
                >
                  <div className="text-left">
                    <h4 className="font-bold text-sm md:text-lg uppercase">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-[10px]">{item.desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-bold text-[#2D2D2D] text-lg md:text-2xl">
                      {item.price}
                    </span>
                    <span className="text-[#D4AF37] font-bold text-sm ml-1">
                      {item.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto text-left animate-fadeIn">
              {/* Diode laser technology highlights */}
              <div className="bg-[#FAF7F2] p-6 rounded-[2rem] mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-bold text-sm md:text-lg text-[#2D2D2D] mb-1">
                    Công nghệ Diode Laser & Đầu Triệt Lạnh
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Sử dụng bước sóng laser thông minh triệt sạch tận gốc nang lông. Đầu triệt lạnh làm dịu da tức thì, không gây bỏng rát hay đau đớn, se khít lỗ chân lông và làm sáng mịn vùng da trị liệu.
                  </p>
                </div>
                <div className="bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest shrink-0">
                  Bảo Hành Trọn Gói
                </div>
              </div>

              {/* Sub-section 1: Liệu trình trọn gói */}
              <div className="mb-12">
                <h3 className="font-bold text-base md:text-lg text-[#2D2D2D] border-l-4 border-[#D4AF37] pl-3 mb-6 uppercase tracking-wider">
                  Liệu Trình Trọn Gói (Bảo hành)
                </h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                  {hairRemovalPricing.package.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-4 border-b border-gray-50 group hover:px-4 transition-all hover:bg-[#FAF7F2] rounded-2xl"
                    >
                      <div className="text-left">
                        <h4 className="font-bold text-xs md:text-sm uppercase">
                          {item.name}
                        </h4>
                        <p className="text-gray-400 text-[9px]">{item.desc}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-bold text-[#2D2D2D] text-sm md:text-base">
                          {item.price}
                        </span>
                        <span className="text-[#D4AF37] font-bold text-[10px] ml-1">
                          {item.unit}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-section 2: Giá lẻ 1 buổi */}
              <div>
                <h3 className="font-bold text-base md:text-lg text-[#2D2D2D] border-l-4 border-[#D4AF37] pl-3 mb-6 uppercase tracking-wider">
                  Giá Lẻ 1 Buổi Trải Nghiệm
                </h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                  {hairRemovalPricing.single.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-4 border-b border-gray-50 group hover:px-4 transition-all hover:bg-[#FAF7F2] rounded-2xl"
                    >
                      <div className="text-left">
                        <h4 className="font-bold text-xs md:text-sm uppercase">
                          {item.name}
                        </h4>
                        <p className="text-gray-400 text-[9px]">{item.desc}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-bold text-[#2D2D2D] text-sm md:text-base">
                          {item.price}
                        </span>
                        <span className="text-[#D4AF37] font-bold text-[10px] ml-1">
                          {item.unit}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* GALLERY SECTION (IMAGE ONLY) */}
      <section id="results" className="py-20 md:py-32 bg-[#FAF7F2]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">
              Hình ảnh thực tế
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold italic"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Kết Quả Khách Hàng
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {IMAGES.results_images.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 0.98 }}
                onClick={() => setSelectedImg(item)}
                className={`flex flex-col group cursor-pointer
                   ${item.size === "large" ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}
                 `}
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-lg flex-1">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ minHeight: item.size === "large" ? "400px" : "200px" }}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-4 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 size={20} className="text-[#D4AF37]" />
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-center text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[#2D2D2D] group-hover:text-[#D4AF37] transition-colors line-clamp-1">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
           <a
  href="https://www.facebook.com/profile.php?id=100063713103271"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#2D2D2D] text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-all shadow-xl inline-block"
>
  XEM THÊM TRÊN FACEBOOK
</a>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (Tối ưu tỷ lệ văn bản/HTML) */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">
              Giải đáp thắc mắc
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold italic"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Câu Hỏi Thường Gặp
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Quy trình điều trị mụn tại Hương House Spa bao gồm những bước nào?",
                a: "Quy trình điều trị mụn chuyên sâu tại Hương House Spa được thiết kế chuẩn y khoa gồm 14 bước nghiêm ngặt: Tẩy trang làm sạch, rửa mặt dịu nhẹ, tẩy tế bào chết enzyme, xông hơi giãn nở lỗ chân lông, hút bã nhờn mụn cám, sát khuẩn bề mặt da, tiến hành lấy nhân mụn bằng tay khéo léo giúp hạn chế đau và tổn thương da tối đa, đi điện tím diệt khuẩn, đắp mặt nạ thảo dược làm dịu giảm sưng đỏ, chiếu ánh sáng sinh học Celluma diệt khuẩn mụn tầng sâu, thoa dưỡng chất phục hồi da và kem chống nắng bảo vệ da toàn diện."
              },
              {
                q: "Kỹ thuật lấy nhân mụn bằng tay tại Hương House Spa có ưu điểm gì so với phương pháp thông thường?",
                a: "Chúng tôi tự hào áp dụng kỹ thuật lấy nhân mụn bằng tay chuyên nghiệp, tỉ mỉ. Khác với việc tự nặn mụn hoặc dùng cây nặn mụn kim loại dễ gây rách mô tế bào, kỹ thuật thủ công giúp kiểm soát lực tác động chính xác lên từng nốt mụn. Phương pháp này giúp lấy sạch hoàn toàn chân cồi mụn mà không gây dập nát các mô da xung quanh, giảm thiểu hơn 90% nguy cơ để lại sẹo rỗ, vết thâm sâu và hạn chế tối đa việc mụn tái phát trở lại tại cùng vị trí."
              },
              {
                q: "Công nghệ nâng cơ HIFU Ultraformer III hoạt động như thế nào và duy trì được bao lâu?",
                a: "Công nghệ HIFU Ultraformer III sử dụng sóng siêu âm hội tụ cường độ cao tác động trực tiếp vào lớp cơ nông SMAS ở độ sâu 3.0mm đến 4.5mm dưới da. Nhiệt lượng sinh ra kích thích sản sinh collagen và elastin mới mạnh mẽ, giúp nâng đỡ vùng da chảy xệ, thon gọn viền hàm và xóa mờ nếp nhăn hiệu quả. Hiệu quả trẻ hóa da có thể cảm nhận ngay lập tức sau liệu trình đầu tiên và duy trì kéo dài từ 1 đến 2 năm tùy thuộc vào cơ địa và chế độ chăm sóc da của từng khách hàng."
              },
              {
                q: "Công nghệ ánh sáng trị liệu Celluma mang lại lợi ích gì cho làn da mụn và nhạy cảm?",
                a: "Máy chiếu ánh sáng sinh học Celluma được chứng nhận bởi FDA Hoa Kỳ, sử dụng các bước sóng ánh sáng thông minh để trị liệu da. Trong đó, ánh sáng xanh lam (Blue light) có khả năng xuyên sâu tiêu diệt vi khuẩn P.acnes gây mụn, giảm sưng viêm nhanh chóng. Ánh sáng đỏ (Red light) giúp kích thích tuần hoàn máu, đẩy nhanh quá trình phục hồi các tổn thương da sau nặn mụn, hỗ trợ mờ thâm và tăng sinh collagen giúp da săn chắc, sáng khỏe hơn."
              },
              {
                q: "Tại sao tôi nên thực hiện peel da hóa học (Chemical Peel) tại spa thay vì tự làm tại nhà?",
                a: "Peel da hóa học sử dụng các hoạt chất axit lành tính như AHA, BHA, hay Retinol để loại bỏ tế bào sừng già cỗi, thúc đẩy tái tạo tế bào mới. Tại Hương House Spa, các chuyên viên giàu kinh nghiệm sẽ trực tiếp thăm khám và đánh giá tình trạng da để lựa chọn đúng nồng độ hoạt chất phù hợp. Quá trình peel da được kiểm soát thời gian nghiêm ngặt kết hợp các bước trung hòa da và làm dịu ngay lập tức, đảm bảo an toàn tuyệt đối, tránh tình trạng bỏng hóa chất, tăng sắc tố hoặc làm mỏng yếu hàng rào bảo vệ da vốn rất dễ xảy ra khi tự peel da tại nhà."
              }
            ].map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-[#FAF7F2] rounded-3xl overflow-hidden bg-[#FAF7F2]/50 hover:bg-[#FAF7F2] transition-colors duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 text-[#2D2D2D]"
                  >
                    <span className="font-bold text-sm md:text-base tracking-wide leading-snug">
                      {faq.q}
                    </span>
                    <span className="shrink-0 p-1.5 bg-white rounded-full shadow-sm text-[#D4AF37]">
                      {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-white/50 text-[#555555] text-xs md:text-sm leading-relaxed font-light">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIGHTBOX (IMAGE POPUP) */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-[#D4AF37] transition-colors p-2 bg-white/10 rounded-full">
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full max-h-[85vh] relative flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.url}
                alt={selectedImg.title}
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-6 text-center">
                <p className="text-white text-lg font-bold tracking-widest uppercase border-b border-[#D4AF37] pb-2 inline-block">
                  {selectedImg.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="bg-white pt-16 pb-32 md:pb-20 border-t border-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img
                src={IMAGES.logo}
                alt="Hương House Spa"
                className="h-10 w-auto object-contain"
              />
              <span
                className="text-2xl font-bold tracking-tighter uppercase"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                HƯƠNG <span className="text-[#D4AF37]">HOUSE</span> SPA
              </span>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
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
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-[#D4AF37]">
              Công nghệ nổi bật
            </h4>
            <ul className="space-y-3 text-xs text-gray-500 font-medium">
              <li>HIFU Ultraformer III</li>
              <li>Celluma Skymedic</li>
              <li>Peel Châu Âu</li>
              <li>Meso Therapy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-[#D4AF37]">
              Liên hệ
            </h4>
            <p className="text-xs text-gray-500 leading-7 font-medium">
  Đường Nguyễn Trãi, KP 4 Hiệp Đồng <br />
  Xã Định Quán, Đồng Nai <br />
  <span className="text-gray-400">
    (Sau chợ Định Quán - chợ Cầu Trắng, hướng Nhà thi đấu đa năng)
  </span>
  <br />
  <span className="text-[#2D2D2D] font-bold">
    Hotline:
  </span>
  <br/>
  <a 
  href="tel:0943059167"
  className="text-[#2D2D2D] font-bold block hover:text-[#D4AF37] transition-colors"
>
   094 305 91 67
</a>

<a 
  href="tel:0965610552"
  className="text-[#2D2D2D] font-bold block hover:text-[#D4AF37] transition-colors"
>
   0965 610 552
</a>
</p>
          </div>
        </div>
      </footer>

      {/* MOBILE ACTIONS */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-xl border-t border-gray-100 p-4 flex gap-3">
        <button className="flex-[3] bg-[#D4AF37] text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest">
          {" "}
          <a
            href="https://zalo.me/0943059167"
            className="flex-[3] bg-[#D4AF37] text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center"
          >
            ĐẶT LỊCH NGAY
          </a>
        </button>
        <a
          href="https://zalo.me/0943059167"
          className="flex-1 bg-[#0068FF] text-white rounded-2xl flex items-center justify-center"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
};

export default App;
