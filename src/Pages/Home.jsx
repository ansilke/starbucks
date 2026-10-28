import React, { useEffect, useState, useRef } from "react";
import aboutBgVideo from '../assets/aboutbg.mp4';

// Slide dataset containing full titles, image assets, gradient themes, custom text colors, and multiline flags
const slides = [
  {
    id: "green",
    badge: "MATCHA CREAM LATTE",
    titleType: "multiline",
    text1: "Matcha Cream",
    text2: "Latte",
    specialWideLatte: true,
    image:
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1788538166/image_58_j9ageq.png",
    bgGradient: "from-[#017143] via-[#015835] to-[#003620]",
    cardGradient: "from-[#017143] via-[#015835] to-[#003620]",
    menuBgGradient: "from-[#006241]/15 via-[#006241]/10 to-[#F3F4F6]",
    glowColor: "rgba(1, 113, 67, 0.6)",
    spotColor: "rgba(0, 200, 100, 0.25)",
    textColor: "#FFFFFF",
    price: 240,
    calories: "240 kcal",
    rating: "4.8 ★",
    description:
      "A smooth and creamy blend of premium ceremonial grade matcha with steamed milk and rich sweet cream foam.",
  },
  {
    id: "mango",
    badge: "MANGO CREAM FRAPPUCCINO",
    titleType: "multiline",
    text1: "Mango Cream",
    text2: "Frappuccino",
    image:
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1788538274/image_55_gses0l.png",
    bgGradient: "from-[#FFAC28] via-[#e59419] to-[#995d00]",
    cardGradient: "from-[#FFAC28] via-[#e29317] to-[#8B4513]",
    menuBgGradient: "from-[#006241]/15 via-[#006241]/10 to-[#F3F4F6]",
    glowColor: "rgba(255, 210, 120, 0.65)",
    spotColor: "rgba(255, 172, 40, 0.35)",
    textColor: "#8B4513",
    price: 260,
    calories: "280 kcal",
    rating: "4.9 ★",
    description:
      "Tropical sweet mango puree blended with ice, milk, and topped with a luscious layer of whipped cream.",
  },
  {
    id: "strawberry",
    badge: "STRAWBERRY CREAM FRAPPUCCINO",
    titleType: "multiline",
    text1: "Strawberry Cream",
    text2: "Frappuccino",
    specialNarrowStrawberry: true,
    tallStrawberry: true,
    image:
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1788539781/image_56_jrbyqr.png",
    bgGradient: "from-[#D04A3F] via-[#a8352b] to-[#6b1c15]",
    cardGradient: "from-[#D04A3F] via-[#b53a30] to-[#5a1410]",
    menuBgGradient: "from-[#006241]/15 via-[#006241]/10 to-[#F3F4F6]",
    glowColor: "rgba(240, 80, 80, 0.55)",
    spotColor: "rgba(255, 140, 140, 0.35)",
    textColor: "#FFFFFF",
    price: 280,
    calories: "310 kcal",
    rating: "4.7 ★",
    description:
      "A delightful combination of sun-ripened strawberry puree, milk, and ice blended together with vanilla syrup.",
  },
  {
    id: "blue",
    badge: "VANILLA CREAM FRAPPUCCINO",
    titleType: "multiline",
    text1: "Vanilla Cream",
    text2: "Frappuccino",
    image:
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1788541513/image_57_p7ywn0.png",
    bgGradient: "from-[#50728c] via-[#354f63] to-[#1c2e3d]",
    cardGradient: "from-[#50728c] via-[#3c596f] to-[#FFD700]",
    menuBgGradient: "from-[#006241]/15 via-[#006241]/10 to-[#F3F4F6]",
    glowColor: "rgba(164, 184, 199, 0.55)",
    spotColor: "rgba(200, 220, 235, 0.3)",
    textColor: "#FFD700",
    price: 250,
    calories: "250 kcal",
    rating: "4.9 ★",
    description:
      "Classic vanilla bean blended with rich milk and ice, finished with sweetened whipped cream.",
  },
  {
    id: "frappuccino",
    badge: "MATCHA CREAM FRAPPUCCINO",
    titleType: "multiline",
    text1: "Matcha Cream",
    text2: "Frappuccino",
    image:
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1788545717/image_60_ykvda0.png",
    bgGradient: "from-[#A3A5A1] via-[#858783] to-[#595b57]",
    cardGradient: "from-[#A3A5A1] via-[#8f918d] to-[#13200D]",
    menuBgGradient: "from-[#006241]/15 via-[#006241]/10 to-[#F3F4F6]",
    glowColor: "rgba(180, 190, 180, 0.55)",
    spotColor: "rgba(210, 220, 210, 0.3)",
    textColor: "#13200D",
    price: 270,
    calories: "290 kcal",
    rating: "4.8 ★",
    description:
      "Sweetened premium matcha green tea blended with milk and ice for an energizing refreshing treat.",
  },
];

const menuSlides = [
  {
    id: "menu-matcha",
    badge: "MATCHA CREAM LATTE",
    title1: "Matcha Cream",
    title2: "Latte",
    image:
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1788538166/image_58_j9ageq.png",
    price: 240,
    calories: "240 kcal",
    rating: "4.8 ★",
    description:
      "A smooth and creamy blend of premium ceremonial grade matcha with steamed milk and rich sweet cream foam.",
  },
  {
    id: "menu-mango",
    badge: "MANGO CREAM FRAPPUCCINO",
    title1: "Mango Cream",
    title2: "Frappuccino",
    image:
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1788538274/image_55_gses0l.png",
    price: 260,
    calories: "280 kcal",
    rating: "4.9 ★",
    description:
      "Tropical sweet mango puree blended with ice, milk, and topped with a luscious layer of whipped cream.",
  },
  {
    id: "menu-strawberry",
    badge: "STRAWBERRY CREAM FRAPPUCCINO",
    title1: "Strawberry Cream",
    title2: "Frappuccino",
    image:
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1788539781/image_56_jrbyqr.png",
    price: 280,
    calories: "310 kcal",
    rating: "4.7 ★",
    description:
      "A delightful combination of sun-ripened strawberry puree, milk, and ice blended together with vanilla syrup.",
  },
  {
    id: "menu-vanilla",
    badge: "VANILLA CREAM FRAPPUCCINO",
    title1: "Vanilla Cream",
    title2: "Frappuccino",
    image:
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1788541513/image_57_p7ywn0.png",
    price: 250,
    calories: "250 kcal",
    rating: "4.9 ★",
    description:
      "Classic vanilla bean blended with rich milk and ice, finished with sweetened whipped cream.",
  },
  {
    id: "menu-matcha-frap",
    badge: "MATCHA CREAM FRAPPUCCINO",
    title1: "Matcha Cream",
    title2: "Frappuccino",
    image:
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1788545717/image_60_ykvda0.png",
    price: 270,
    calories: "290 kcal",
    rating: "4.8 ★",
    description:
      "Sweetened premium matcha green tea blended with milk and ice for an energizing refreshing treat.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [drinkState, setDrinkState] = useState("top");
  const [showText, setShowText] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isStickyHeader, setIsStickyHeader] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [menuIndex, setMenuIndex] = useState(0);
  const [menuAnimStage, setMenuAnimStage] = useState("entering");
  const [menuInView, setMenuInView] = useState(false);

  // Swipe gesture state variables
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const aboutRef = useRef(null);
  const menuSectionRef = useRef(null);

  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // ഇവിടെ 1.5 എന്നത് വീഡിയോയുടെ സ്പീഡ് ആണ്.
      // കൂടുതൽ സ്പീഡ് വേണമെങ്കിൽ 2.0 എന്നോ, കുറയ്ക്കണമെങ്കിൽ 1.2 എന്നോ മാറ്റാം.
      videoRef.current.playbackRate = 3;
    }
  }, []);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window) {
      window.history.scrollRestoration = "manual";
    }
    const mountTimer = setTimeout(() => {
      setHasMounted(true);
    }, 60);
    return () => clearTimeout(mountTimer);
  }, []);

  useEffect(() => {
    if (isCartOpen || isMapModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen, isMapModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;

      if (scrollY > windowH * 0.75) {
        setIsStickyHeader(true);
      } else {
        setIsStickyHeader(false);
      }

      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        if (rect.top < windowH * 0.75) {
          setAboutVisible(true);
        }
      }

      if (menuSectionRef.current) {
        const rect = menuSectionRef.current.getBoundingClientRect();
        if (rect.top < windowH * 0.65 && rect.bottom > 0) {
          if (!menuInView) {
            setMenuInView(true);
            setMenuAnimStage("entering");
            setTimeout(() => {
              setMenuAnimStage("stable");
            }, 100);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuInView]);

  useEffect(() => {
    if (!hasMounted) return;

    setDrinkState("top");
    setShowText(false);

    const dropTimer = setTimeout(() => {
      setDrinkState("center");
    }, 60);

    const textAppearTimer = setTimeout(() => {
      setShowText(true);
    }, 950);

    const drinkExitTimer = setTimeout(() => {
      setDrinkState("exiting");
      setShowText(false);
    }, 3800);

    const slideLoopTimer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4200);

    return () => {
      clearTimeout(dropTimer);
      clearTimeout(textAppearTimer);
      clearTimeout(drinkExitTimer);
      clearTimeout(slideLoopTimer);
    };
  }, [activeIndex, hasMounted]);

  const handleNextMenuSlide = () => {
    if (menuAnimStage !== "stable") return;
    setMenuAnimStage("exiting-right");
    setTimeout(() => {
      setMenuIndex((prev) => (prev + 1) % menuSlides.length);
      setMenuAnimStage("entering-left");
      setTimeout(() => {
        setMenuAnimStage("stable");
      }, 50);
    }, 650);
  };

  const handlePrevMenuSlide = () => {
    if (menuAnimStage !== "stable") return;
    setMenuAnimStage("exiting-left");
    setTimeout(() => {
      setMenuIndex(
        (prev) => (prev - 1 + menuSlides.length) % menuSlides.length,
      );
      setMenuAnimStage("entering-right");
      setTimeout(() => {
        setMenuAnimStage("stable");
      }, 50);
    }, 650);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches ? e.targetTouches[0].clientX : e.clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches ? e.targetTouches[0].clientX : e.clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNextMenuSlide();
    } else if (distance < -minSwipeDistance) {
      handlePrevMenuSlide();
    }

    setTouchStartX(0);
    setTouchEndX(0);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    setNotification(`${item.badge} successfully added to cart!`);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (!element) return;

    const startPosition = window.pageYOffset;
    const targetPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);

      const ease =
        percentage < 0.5
          ? 4 * percentage * percentage * percentage
          : (percentage - 1) * (2 * percentage - 2) * (2 * percentage - 2) + 1;

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const currentSlide = slides[activeIndex];
  const currentMenu = menuSlides[menuIndex];

  return (
    <div className="relative w-full min-h-screen bg-[#F8F9FA] select-none font-sans text-neutral-800 overflow-x-hidden">
      {notification && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[140] bg-[#006241] text-white px-4 py-2.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl flex items-center border border-emerald-400/35 transition-all duration-500 animate-slideUp max-w-[85vw] sm:max-w-md">
          <span className="text-[11px] sm:text-xs font-semibold tracking-wide">
            {notification}
          </span>
        </div>
      )}

      {/* Map Popup Modal - Starbucks Green & White Theme */}
      {isMapModalOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-emerald-200 flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 bg-[#006241] border-b border-emerald-700 text-white">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg">
                  Starbucks Store
                </h3>
              </div>
              <button
                onClick={() => setIsMapModalOpen(false)}
                className="w-9 h-9 rounded-full bg-emerald-800 hover:bg-emerald-900 flex items-center justify-center text-white font-bold transition-colors cursor-pointer text-sm"
              >
                ✕
              </button>
            </div>
            <div className="relative w-full flex-1 bg-neutral-100">
              <iframe
                title="Starbucks Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8562304918737!2d-122.34177992348508!3d47.60878197119199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab2d4c0c1b7%3A0x6b4f762306d86016!2s1912%20Pike%20Pl%2C%20Seattle%2C%20WA%2098101%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter contrast-105"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="px-6 py-3 bg-emerald-50 border-t border-emerald-200 text-neutral-700 text-xs flex justify-between items-center">
              <span>📍 1912 Pike Place, Seattle, WA 98101, USA</span>
              <span className="text-[#006241] font-bold">
                Open Now • Closes 9:00 PM
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 sm:px-12 py-4 sm:py-5 transition-all duration-300 ${
          isStickyHeader
            ? "bg-white/90 backdrop-blur-md border-b border-neutral-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.06)] text-neutral-900"
            : "bg-transparent text-white"
        }`}
      >
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={(e) => handleNavClick(e, "hero")}
        >
          <img
            src="https://res.cloudinary.com/daadrhhk9/image/upload/v1788543835/image_61_cutu1e.png"
            alt="Logo"
            className="w-9 sm:w-11 h-auto object-contain filter drop-shadow-sm"
          />
          <span
            className={` tracking-wide text-base sm:text-lg font-bold ${isStickyHeader ? "text-neutral-900" : "text-white"}`}
          >
            STARBUCKS
          </span>
        </div>

        <nav
          className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide ml-auto ${isStickyHeader ? "text-neutral-900 font-semibold" : "text-white/90"}`}
        >
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="hover:opacity-75 transition-colors cursor-pointer"
          >
            Home
          </a>

          <a
            href="#menu"
            onClick={(e) => handleNavClick(e, "menu")}
            className="hover:opacity-75 transition-colors cursor-pointer"
          >
            Menu
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="hover:opacity-75 transition-colors cursor-pointer"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hover:opacity-75 transition-colors cursor-pointer"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl focus:outline-none transition-colors relative z-[110] ${isStickyHeader ? "text-neutral-900" : "text-white"}`}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full right-6 w-52 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-neutral-200 p-4 flex flex-col gap-3 md:hidden z-[110] animate-fadeIn">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "hero")}
              className="text-sm font-semibold text-neutral-800 hover:text-[#006241] py-1 border-b border-neutral-200/50"
            >
              Home
            </a>
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, "menu")}
              className="text-sm font-semibold text-neutral-800 hover:text-[#006241] py-1 border-b border-neutral-200/50"
            >
              Menu
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-sm font-semibold text-neutral-800 hover:text-[#006241] py-1 border-b border-neutral-200/50"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-sm font-semibold text-neutral-800 hover:text-[#006241] py-1"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full h-screen min-h-[650px] max-h-[1080px] overflow-hidden flex flex-col items-center justify-center"
      >
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-gradient-to-b ${slide.bgGradient} transition-opacity duration-[1800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              idx === activeIndex ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
          />
        ))}

        <div
          className="absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none z-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${currentSlide.glowColor} 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full transition-all duration-[1800ms] ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none z-0"
          style={{
            background: `radial-gradient(ellipse at 50% 35%, ${currentSlide.spotColor}, transparent 60%)`,
          }}
        />

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

          .font-vintage-script {
            font-family: 'Great Vibes', cursive;
          }

          @keyframes ultraSmoothFloat {
            0%, 100% {
              transform: translateY(0px) rotate(-8deg);
            }
            50% {
              transform: translateY(-10px) rotate(-8deg);
            }
          }

          .animate-ultra-smooth-float {
            animation: ultraSmoothFloat 4.2s cubic-bezier(0.45, 0, 0.55, 1) infinite;
          }
        `}</style>

        <div className="relative z-20 flex flex-col items-center justify-center mt-8 sm:mt-0 w-full h-[240px] sm:h-[380px]">
          <div
            style={{ willChange: "transform" }}
            className={`absolute transform-gpu flex flex-col items-center ${
              drinkState === "top"
                ? "-translate-y-[120vh] rotate-[-8deg] transition-none"
                : drinkState === "center"
                  ? "translate-y-0 rotate-[-8deg] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : "translate-y-[140vh] rotate-[-8deg] transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0,0.67,1)]"
            }`}
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.badge}
              className={`w-[120px] sm:w-[200px] md:w-[240px] lg:w-[280px] object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.58)] ${
                drinkState === "center" ? "animate-ultra-smooth-float" : ""
              }`}
            />
          </div>
        </div>

        <div className="absolute z-10 flex items-center justify-center w-full px-4 text-center pointer-events-none top-[65%] sm:inset-0 sm:m-auto sm:top-0">
          <h1
            style={{ color: currentSlide.textColor }}
            className={`font-vintage-script tracking-normal ${
              currentSlide.id === "strawberry"
                ? "text-[12vw] sm:text-[13vw]"
                : currentSlide.id === "mango"
                  ? "text-[12vw] sm:text-[14vw]"
                  : currentSlide.id === "green"
                    ? "text-[12vw] sm:text-[14.5vw]"
                    : currentSlide.id === "blue"
                      ? "text-[12vw] sm:text-[13.5vw]"
                      : currentSlide.id === "frappuccino"
                        ? "text-[12vw] sm:text-[13.5vw]"
                        : "text-[12vw] sm:text-[13.5vw]"
            } ${currentSlide.tallStrawberry ? "leading-[1.15] sm:leading-[1.2]" : "leading-none"} drop-shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
              showText
                ? "opacity-90 scale-100 translate-y-0 blur-0"
                : "opacity-0 scale-95 translate-y-2 blur-[4px]"
            }`}
          >
            {currentSlide.titleType === "multiline" ? (
              <span
                className={`block ${currentSlide.tallStrawberry ? "space-y-2" : "leading-[0.95]"}`}
              >
                <span
                  className={`block ${currentSlide.specialNarrowStrawberry ? "scale-x-[0.90] inline-block origin-center" : ""}`}
                >
                  {currentSlide.text1}
                </span>
                <span
                  className={`block ${currentSlide.tallStrawberry ? "mt-2.5" : "mt-1"} ${currentSlide.specialWideLatte ? "scale-x-[1.18] sm:scale-x-[1.22] inline-block origin-center" : currentSlide.specialNarrowStrawberry ? "scale-x-[0.90] inline-block origin-center" : ""}`}
                >
                  {currentSlide.text2}
                </span>
              </span>
            ) : (
              currentSlide.text
            )}
          </h1>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 z-30 flex flex-col items-center gap-3">
          <span
            style={{ borderColor: `${currentSlide.textColor}40` }}
            className="text-white/95 text-[9.5px] sm:text-xs font-extrabold tracking-[0.25em] sm:tracking-[0.35em] uppercase bg-black/30 backdrop-blur-md px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border shadow-2xl transition-all duration-700 ease-in-out max-w-[90vw] truncate text-center"
          >
            {currentSlide.badge}
          </span>

          <div className="flex items-center gap-2 mt-1">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-500 ease-out cursor-pointer ${
                  idx === activeIndex
                    ? "w-7 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={slide.badge}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}

      {/* Ribbon Banner Section */}
      <div className="w-full bg-[#006241] text-white py-6 overflow-hidden select-none border-y border-white/10 relative flex items-center">
        {/* Embedded CSS Keyframes for seamless infinite animation */}
        <style>{`
    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    .animate-infinite-marquee {
      display: flex;
      width: max-content;
      animation: marquee 25s linear infinite;
    }

    .animate-infinite-marquee:hover {
      animation-play-state: paused;
    }
  `}</style>

        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#004d33] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#004d33] to-transparent z-10 pointer-events-none" />

        <div className="animate-infinite-marquee flex items-center gap-8">
          {[
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
          ].map((text, index) => (
            <div key={index} className="flex items-center gap-8 shrink-0">
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-widest uppercase font-sans text-white/95">
                {text}
              </span>
              <img
                src="https://res.cloudinary.com/daadrhhk9/image/upload/v1788543835/image_61_cutu1e.png"
                alt="Logo"
                className="w-9 sm:w-11 h-auto object-contain filter drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Menu Section */}
      <section
        id="menu"
        ref={menuSectionRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={(e) => {
          if (e.buttons === 1) handleTouchMove(e);
        }}
        onMouseUp={handleTouchEnd}
        className="relative w-full h-screen min-h-[620px] max-h-[850px] bg-white flex flex-col items-center justify-center overflow-hidden mx-auto pt-24 sm:pt-28 cursor-grab active:cursor-grabbing"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/daadrhhk9/image/upload/v1788592116/Group_139_3_btikdv.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-[135px] sm:top-32 right-5 sm:right-12 z-40">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative w-10 h-10 sm:w-11 sm:h-11 bg-[#006241] hover:bg-[#004d33] text-white rounded-full shadow-xl flex items-center justify-center transition-all transform hover:scale-105 cursor-pointer"
            title="View Cart"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-neutral-900 text-[10px] font-extrabold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow">
                {totalCartItems}
              </span>
            )}
          </button>
        </div>

        <div className="absolute top-28 sm:top-36 left-6 sm:left-16 lg:left-24 z-30 px-0">
          <h2 className="text-3xl sm:text-6xl font-extrabold tracking-tight font-vintage-script text-[#006241] drop-shadow-sm">
            Starbucks menu
          </h2>
        </div>

        {/* Left Side Content with Smooth Slide Animation */}
        <div
          className={`absolute left-5 sm:left-16 md:left-24 top-[32%] sm:top-[54%] -translate-y-1/2 sm:-translate-y-1/2 z-30 max-w-[210px] sm:max-w-sm transition-all duration-700 transform ${
            menuAnimStage === "stable"
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 -translate-x-16 scale-95"
          }`}
        >
          <span className="text-[9px] sm:text-xs font-extrabold uppercase tracking-widest text-[#006241] bg-emerald-100 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
            {currentMenu.badge}
          </span>
          <h3 className="text-lg sm:text-3xl font-extrabold text-neutral-900 mt-1.5 sm:mt-2 font-sans">
            {currentMenu.title1} {currentMenu.title2}
          </h3>
          <p className="text-[10px] sm:text-sm text-neutral-600 mt-1 sm:mt-3 leading-tight sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
            {currentMenu.description}
          </p>
          <div className="mt-2 sm:mt-4 flex items-center gap-3">
            <span className="text-[10px] sm:text-sm font-bold text-neutral-700 bg-neutral-100 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-xl">
              Rating: {currentMenu.rating}
            </span>
          </div>
        </div>

        {/* Right Side Content with Smooth Slide Animation */}
        <div
          className={`absolute right-5 sm:right-16 md:right-24 top-[32%] sm:top-[54%] -translate-y-1/2 sm:-translate-y-1/2 z-30 flex flex-col items-end text-right transition-all duration-700 transform ${
            menuAnimStage === "stable"
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-16 scale-95"
          }`}
        >
          <span className="text-xl sm:text-4xl font-extrabold text-[#006241]">
            ₹{currentMenu.price}
          </span>
          <span className="text-[10px] sm:text-xs font-semibold text-neutral-500 mt-0.5 sm:mt-1">
            Energy: {currentMenu.calories}
          </span>
          <button
            onClick={() => handleAddToCart(currentMenu)}
            className="mt-3 sm:mt-6 px-3.5 sm:px-6 py-2 sm:py-3 bg-[#006241] hover:bg-[#004d33] text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-xl sm:rounded-2xl shadow-xl transition-all transform hover:scale-105 cursor-pointer"
          >
            Add to Basket
          </button>
        </div>

        <div className="relative w-full h-full flex items-center justify-center pointer-events-none overflow-visible max-w-4xl mx-auto px-4 mt-12 sm:mt-8">
          <button
            onClick={handlePrevMenuSlide}
            disabled={menuAnimStage !== "stable"}
            className="absolute left-[15%] sm:left-[24%] md:left-[27%] top-[55%] sm:top-[52%] -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 bg-[#006241] hover:bg-[#004d33] text-white rounded-full shadow-xl flex items-center justify-center font-bold text-base sm:text-lg transition-all transform hover:scale-110 cursor-pointer pointer-events-auto z-40 disabled:opacity-50"
            aria-label="Previous Drink"
          >
            ‹
          </button>

          <button
            onClick={handleNextMenuSlide}
            disabled={menuAnimStage !== "stable"}
            className="absolute right-[15%] sm:right-[24%] md:right-[27%] top-[55%] sm:top-[52%] -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 bg-[#006241] hover:bg-[#004d33] text-white rounded-full shadow-xl flex items-center justify-center font-bold text-base sm:text-lg transition-all transform hover:scale-110 cursor-pointer pointer-events-auto z-40 disabled:opacity-50"
            aria-label="Next Drink"
          >
            ›
          </button>

          {/* Drink Bottle */}
          <div
            className={`absolute z-30 flex flex-col items-center justify-center transition-all ${
              menuAnimStage === "entering-left"
                ? "-translate-x-[160px] sm:-translate-x-[220px] translate-y-[30px] sm:translate-y-[50px] rotate-[35deg] scale-75 opacity-0 duration-0"
                : menuAnimStage === "entering-right"
                  ? "translate-x-[160px] sm:translate-x-[220px] translate-y-[30px] sm:translate-y-[50px] rotate-[-35deg] scale-75 opacity-0 duration-0"
                  : menuAnimStage === "exiting-right"
                    ? "translate-x-[180px] sm:translate-x-[240px] translate-y-[30px] sm:translate-y-[50px] rotate-[35deg] scale-75 opacity-0 transition-all duration-600 ease-in"
                    : menuAnimStage === "exiting-left"
                      ? "-translate-x-[180px] sm:-translate-x-[240px] translate-y-[30px] sm:translate-y-[50px] rotate-[-35deg] scale-75 opacity-0 transition-all duration-600 ease-in"
                      : menuAnimStage === "entering"
                        ? "translate-y-[150px] sm:translate-y-[200px] scale-75 opacity-0 transition-all duration-1000 ease-out"
                        : "translate-x-0 translate-y-[10px] sm:translate-y-[20px] rotate-0 scale-100 opacity-100 transition-all duration-1000 cubic-bezier(0.22,1,0.36,1)"
            }`}
          >
            <img
              src={currentMenu.image}
              alt={currentMenu.badge}
              className={`w-[110px] sm:w-[210px] md:w-[250px] h-auto object-contain filter drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)] ${
                menuAnimStage === "stable" ? "animate-ultra-smooth-float" : ""
              }`}
            />
            {/* Ground Shadow for Floating Effect */}
            <div
              className={`w-[80px] sm:w-[140px] h-[12px] sm:h-[18px] bg-black/35 rounded-[100%] blur-[6px] mt-2 sm:mt-3 transition-all duration-1000 ${
                menuAnimStage === "stable" ? "animate-pulse" : "opacity-50"
              }`}
            />
          </div>

          {/* Half-Round Curvature Arch Platform */}
          <div className="absolute bottom-0 w-full max-w-3xl h-[170px] sm:h-[260px] bg-gradient-to-t from-[#004d33] via-[#006241] to-[#007a52] rounded-t-[180px] sm:rounded-t-[280px] z-20 pointer-events-none shadow-[0_-10px_30px_rgba(0,0,0,0.2)] border-t border-emerald-400/20"></div>
        </div>
      </section>

      <div className="w-full bg-[#006241] text-white py-6 overflow-hidden select-none border-y border-white/10 relative flex items-center">
        {/* Embedded CSS Keyframes for seamless infinite animation */}
        <style>{`
    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    .animate-infinite-marquee {
      display: flex;
      width: max-content;
      animation: marquee 25s linear infinite;
    }

    .animate-infinite-marquee:hover {
      animation-play-state: paused;
    }
  `}</style>

        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#004d33] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#004d33] to-transparent z-10 pointer-events-none" />

        <div className="animate-infinite-marquee flex items-center gap-8">
          {[
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
          ].map((text, index) => (
            <div key={index} className="flex items-center gap-8 shrink-0">
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-widest uppercase font-sans text-white/95">
                {text}
              </span>
              <img
                src="https://res.cloudinary.com/daadrhhk9/image/upload/v1788543835/image_61_cutu1e.png"
                alt="Logo"
                className="w-9 sm:w-11 h-auto object-contain filter drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* about */}
      <section
        id="about"
        ref={aboutRef}
        className="relative w-full min-h-screen py-24 sm:py-32 px-6 sm:px-16 lg:px-24 flex items-center justify-start overflow-hidden bg-black"
      >
        {/* Background Video */}
       <video
  ref={videoRef}
  autoPlay
  muted
  playsInline
  onEnded={handleVideoEnd}
  className="absolute inset-0 w-full h-full object-cover z-0"
  style={{
    imageRendering: 'high-quality',
    transform: 'translateZ(0)', // GPU ആക്സിലറേഷനായി
    backfaceVisibility: 'hidden',
  }}
  src={aboutBgVideo}
/>
        {/* Overlay to ensure text readability */}
<div className="absolute inset-0 w-full h-full bg-black/10 z-10"></div>
        <div className="relative z-10 max-w-xl mx-0 text-left flex flex-col items-start w-full">
          <h2
            className={`text-3xl sm:text-6xl font-extrabold tracking-tight mt-2 font-vintage-script text-[#006241] drop-shadow-md transition-all duration-1000 transform ${
              aboutVisible && isVideoEnded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            About our passion
          </h2>

          <div
            className={`mt-4 sm:mt-6 space-y-4 bg-[#006241]/90 backdrop-blur-md border-white/30 rounded-4xl p-7 sm:space-y-6 text-gray-50 text-xs sm:text-base leading-relaxed max-w-3xl font-medium font-sans transition-all duration-500 delay-100 transform ${
              aboutVisible && isVideoEnded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <p className="transition-all duration-700 drop-shadow">
              Our story began in 1971 along the cobblestone streets of Seattle’s
              historic Pike Place Market. It was here where Starbucks first
              opened its doors with bins of fresh-roasted whole bean coffee from
              around the world. Our name was inspired by the classic tale
              “Moby-Dick,” evoking the seafaring tradition of the early coffee
              traders. Our logo, a twin-tailed siren who beckoned customers to
              experience our coffee.
            </p>
            <p className="transition-all duration-700 drop-shadow">
              Our next chapter began 12 years later when Howard Schultz first
              experienced Italy’s cafés on a trip to Milan. He returned to
              Seattle inspired to bring the warmth and artistry of Italian
              coffee culture to Starbucks. In 1987 we became a coffeehouse,
              dedicated to serving exceptional coffee with passion and care.
            </p>
            <p className="transition-all duration-700 drop-shadow">
              Over the decades that followed, Starbucks would grow to welcome
              millions of customers each week and become a part of the fabric of
              neighborhoods all around the world, making each day a little
              brighter by bringing people together over coffee.
            </p>
          </div>

          <div
            className={`mt-8 sm:mt-10 flex items-center gap-4 transition-all duration-1000 delay-500 transform ${
              aboutVisible && isVideoEnded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-14"
            }`}
          >
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, "menu")}
              className="px-8 py-3.5 bg-[#00422c] hover:bg-[#003725] text-white font-bold text-xs uppercase tracking-widest rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Explore Menu
            </a>
          </div>
        </div>
      </section>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center sm:justify-end bg-black/40 backdrop-blur-xs animate-fadeIn p-4 sm:p-6">
          <div className="w-[90%] max-w-[340px] sm:w-full sm:max-w-md bg-white max-h-[75vh] sm:max-h-[92vh] sm:h-full my-auto shadow-2xl rounded-3xl flex flex-col justify-between p-4 sm:p-6 overflow-y-auto animate-slide-in-right border border-neutral-100">
            <div>
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-neutral-200">
                <h3 className="text-base sm:text-xl font-extrabold text-neutral-900">
                  Your Shopping Cart
                </h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center font-bold text-neutral-700 transition-colors cursor-pointer text-xs"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 space-y-3">
                {cart.length === 0 ? (
                  <div className="text-center py-12 sm:py-20 text-neutral-400">
                    <p className="text-xs sm:text-sm font-medium">
                      Your cart is currently empty.
                    </p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-neutral-50 p-3 rounded-2xl border border-neutral-200/80 shadow-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <img
                          src={item.image}
                          alt={item.badge}
                          className="w-10 h-12 sm:w-12 sm:h-14 object-contain"
                        />
                        <div>
                          <h4 className="font-bold text-[11px] sm:text-xs text-neutral-900 line-clamp-1">
                            {item.badge}
                          </h4>
                          <span className="text-[10px] sm:text-[11px] text-[#006241] font-semibold">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-white border border-neutral-200 rounded-lg sm:rounded-xl overflow-hidden shadow-xs">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-2 py-0.5 text-[10px] sm:text-xs font-bold text-neutral-700 hover:bg-neutral-100"
                          >
                            -
                          </button>
                          <span className="px-2 sm:px-3 text-[10px] sm:text-xs font-bold text-neutral-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2 py-0.5 text-[10px] sm:text-xs font-bold text-neutral-700 hover:bg-neutral-100"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 text-[10px] sm:text-xs font-bold px-1"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200 mt-4">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-medium text-neutral-600">
                  The total amount:
                </span>
                <span className="text-base sm:text-xl font-extrabold text-[#006241]">
                  ₹{totalPrice}
                </span>
              </div>
              <button
                onClick={() => {
                  if (cart.length === 0) {
                    setNotification("Please add items to your cart first.");
                    setTimeout(() => setNotification(null), 3000);
                    return;
                  }
                  setNotification(
                    "Your items have been successfully checked out!",
                  );
                  setCart([]);
                  setIsCartOpen(false);
                  setTimeout(() => setNotification(null), 3500);
                }}
                className="w-full py-3 sm:py-3.5 bg-[#006241] hover:bg-[#004d33] text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider rounded-xl sm:rounded-2xl shadow-lg transition-all cursor-pointer"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full bg-[#006241] text-white py-6 overflow-hidden select-none border-y border-white/10 relative flex items-center">
        {/* Embedded CSS Keyframes for seamless infinite animation */}
        <style>{`
    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    .animate-infinite-marquee {
      display: flex;
      width: max-content;
      animation: marquee 25s linear infinite;
    }

    .animate-infinite-marquee:hover {
      animation-play-state: paused;
    }
  `}</style>

        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#004d33] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#004d33] to-transparent z-10 pointer-events-none" />

        <div className="animate-infinite-marquee flex items-center gap-8">
          {[
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
            "STARBUCKS",
          ].map((text, index) => (
            <div key={index} className="flex items-center gap-8 shrink-0">
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-widest uppercase font-sans text-white/95">
                {text}
              </span>
              <img
                src="https://res.cloudinary.com/daadrhhk9/image/upload/v1788543835/image_61_cutu1e.png"
                alt="Logo"
                className="w-9 sm:w-11 h-auto object-contain filter drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Map Section matching requested layout */}
      <section
        id="contact"
        className="relative w-full min-h-screen py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#F3F4F6] flex flex-col items-center justify-center"
      >
        <div className="max-w-6xl w-full mx-auto text-center mb-10">
          <span className="inline-block text-[#006241] font-bold tracking-[0.25em] text-xs uppercase bg-emerald-100 border border-emerald-500/30 px-4 py-1.5 rounded-full shadow-sm">
            Contact & Location
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 font-vintage-script text-[#006241]">
            Visit us & connect
          </h2>
        </div>

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Card: Contact Form with Glassmorphism Over Background */}
          <div
            className="relative w-full h-[430px] sm:h-[470px] rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center flex items-center justify-center p-6 sm:p-8"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/daadrhhk9/image/upload/v1788605019/Group_141_1_fbncan.png')`,
            }}
          >
            {/* Glassmorphism Form Card matching provided spec */}
            <div className="relative z-10 w-full h-[90%] bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1 font-sans drop-shadow">
                  Send a Message
                </h3>
                <p className="text-xs text-white/90 mb-4 drop-shadow">
                  We would love to hear from you. Drop us a note!
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNotification(
                    "Thank you! Your message has been sent successfully.",
                  );
                  setTimeout(() => setNotification(null), 3500);
                  e.target.reset();
                }}
                className="space-y-3"
              >
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full bg-white/25 backdrop-blur-sm border border-white/40 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-green-900 focus:bg-white/35 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address"
                    className="w-full bg-white/25 backdrop-blur-sm border border-white/40 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-green-900 focus:bg-white/35 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    rows="3"
                    required
                    placeholder="Your Message..."
                    className="w-full bg-white/25 backdrop-blur-sm border border-white/40 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-green-900 focus:bg-white/35 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#006241] hover:bg-[#004d33] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all transform hover:scale-[1.02] cursor-pointer"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Right Card: Map Preview with Clickable Popup Modal */}
          <div
            onClick={() => setIsMapModalOpen(true)}
            className="relative w-full h-[460px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center cursor-pointer group transition-all duration-300 transform hover:scale-[1.01]"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/daadrhhk9/image/upload/v1788604948/image_72_grro62.png')`,
            }}
            title="Click to open React Maps"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#006241]">
                  Store Location
                </span>
                <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                  1912 Pike Place, Seattle
                </h4>
              </div>
              <button className="px-4 py-2 bg-[#006241] text-white text-xs font-bold rounded-xl shadow-md group-hover:bg-[#004d33] transition-colors">
                View Map ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b291d] text-neutral-300 py-8 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between border-t border-[#133c2c] gap-6">
        {/* Left: Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/daadrhhk9/image/upload/v1788543835/image_61_cutu1e.png"
            alt="Starbucks Logo"
            className="h-9 w-9 object-contain rounded-full"
          />
          <span className="text-white font-bold tracking-wider text-base sm:text-lg">
            STARBUCKS
          </span>
        </div>

        {/* Center / Right: Contact Details & Copyright */}
        <div className="flex flex-col md:flex-row items-center h-36 gap-4 md:gap-8 text-xs text-neutral-400 text-center md:text-right">
          <div className="flex flex-wrap justify-center flex-col md:justify-end gap-4 sm:gap-6">
            <span> Location: 123 Matcha Street, Tokyo</span>
            <span> Phone: +1 (555) 123-4567</span>
            <span> Email: info@starbucks.com</span>
          </div>

          <p className="border-t md:border-t-0 md:border-l border-[#133c2c] pt-3 md:pt-0 md:pl-6">
            © 2026 Starbucks Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
