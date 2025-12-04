import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faPhone,
    faBuilding,
    faInfoCircle,
    faClock,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const isActiveLink = (path) => {
        return location.pathname === path
    }

    const navlinks = [
        {
            name: "Beranda",
            link: "/"
        },
        {
            name: "Layanan Properti",
            link: "/layanan"
        },
        {
            name: "Tentang Kami",
            link: "/tentang-kami"
        },
        {
            name: "Kontak",
            link: "/kontak"
        }
    ]

    const mobileIcons = [faHome, faBuilding, faInfoCircle, faPhone]

    return (
        <header className="bg-[#1A1A1A]/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 border-b border-[#FFFFFF15]">
            <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-2.5 xs:py-3 sm:py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="flex items-center gap-2 xs:gap-2.5 sm:gap-3"
                        >
                            <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center overflow-hidden shadow-lg flex-shrink-0 border border-[#FFFFFF10]">
                                <img
                                    src="/logo.jpg"
                                    alt="Sonia Property Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <div className="flex items-baseline gap-1">
                                    <h1 className="font-script text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-semibold 
      bg-gradient-to-r from-[#C2185B] to-[#E91E63] bg-clip-text text-transparent">
                                        Sonia
                                    </h1>

                                    <span className="font-spartan font-extrabold text-lg xs:text-xl sm:text-2xl lg:text-3xl 
      tracking-tight uppercase 
      bg-gradient-to-r from-[#D4AF37] to-[#F9E28F] bg-clip-text text-transparent">
                                        Property
                                    </span>
                                </div>

                                <span className="font-spartan font-bold text-[10px] xs:text-[11px] sm:text-[12px] lg:text-[13px]
    tracking-wide uppercase 
    bg-gradient-to-r from-[#D4AF37] to-[#F9E28F] bg-clip-text text-transparent">
                                    and asset management
                                </span>
                            </div>
                        </Link>
                    </div>

                    <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
                        {navlinks.map((item, index) => {
                            const isActive = isActiveLink(item.link)
                            return (
                                isActive ? (
                                    <span
                                        key={index}
                                        className={`font-bold text-[#E4725A] underline-offset-4 border-b-2 border-[#E4725A] text-sm xl:text-base tracking-normal font-sans py-2 cursor-default`}
                                    >
                                        {item.name}
                                    </span>
                                ) : (
                                    <Link
                                        key={index}
                                        to={item.link}
                                        className={`font-semibold transition-all duration-300 py-2 border-b-2 text-sm xl:text-base tracking-normal font-sans text-[#CCCCCC] hover:text-[#E4725A] border-transparent hover:border-[#E4725A]`}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            )
                        })}

                        <a
                            href="https://wa.me/62817730219"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#E4725A] to-[#D8896A] hover:from-[#D8896A] hover:to-[#E4725A] text-white px-3 xs:px-4 xl:px-5 py-1.5 xs:py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ml-2 xs:ml-3 text-xs xl:text-sm min-h-[36px] xs:min-h-[40px] flex items-center tracking-wide font-sans"
                        >
                            <FontAwesomeIcon icon={faPhone} className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                            <span className="ml-1 xs:ml-1.5">Hubungi Kami</span>
                        </a>
                    </nav>

                    <div className="flex items-center space-x-2 lg:hidden">
                        <button
                            className="text-[#CCCCCC] hover:text-[#E4725A] transition-all duration-300 p-1 xs:p-1.5"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                        >
                            <div className={`w-5 h-4 flex flex-col justify-between transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-180' : ''}`}>
                                <span className={`w-full h-0.5 bg-[#CCCCCC] transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-1.5 bg-[#E4725A]' : ''}`}></span>
                                <span className={`w-full h-0.5 bg-[#CCCCCC] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`w-full h-0.5 bg-[#CCCCCC] transition-all duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5 bg-[#E4725A]' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                <div className={`lg:hidden absolute top-full left-0 w-full bg-[#1A1A1A]/95 backdrop-blur-sm shadow-2xl border-t border-[#FFFFFF15] transition-all duration-500 ease-in-out transform ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                    }`}>
                    <nav className="flex flex-col py-2 xs:py-3 sm:py-4 bg-[#1A1A1A]/95">
                        {navlinks.map((item, index) => {
                            const isActive = isActiveLink(item.link)
                            const iconName = mobileIcons[index]

                            return (
                                isActive ? (
                                    <span
                                        key={index}
                                        className={`text-[#E4725A] font-bold bg-gradient-to-r from-[#E4725A]/10 to-[#D8896A]/10 border-l-4 border-[#E4725A] underline-offset-4 py-2 xs:py-2.5 sm:py-3 px-4 xs:px-5 sm:px-6 flex items-center gap-2 xs:gap-2.5 text-sm xs:text-base sm:text-base tracking-normal font-sans cursor-default`}
                                    >
                                        <FontAwesomeIcon icon={iconName} className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                                        {item.name}
                                    </span>
                                ) : (
                                    <Link
                                        key={index}
                                        to={item.link}
                                        className={`transition-all duration-300 py-2 xs:py-2.5 sm:py-3 px-4 xs:px-5 sm:px-6 border-l-4 flex items-center gap-2 xs:gap-2.5 text-sm xs:text-base sm:text-base tracking-normal font-sans text-[#CCCCCC] hover:bg-gradient-to-r hover:from-[#E4725A]/5 hover:to-[#D8896A]/5 border-transparent hover:border-[#E4725A]`}
                                        onClick={closeMobileMenu}
                                    >
                                        <FontAwesomeIcon icon={iconName} className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                                        {item.name}
                                    </Link>
                                )
                            )
                        })}

                        <div className="flex flex-col gap-2 xs:gap-2.5 px-4 xs:px-5 sm:px-6 pt-2 xs:pt-3 sm:pt-4 mt-1 xs:mt-1 sm:mt-2 border-t border-[#FFFFFF15]">
                            <a
                                href="https://wa.me/62817730219"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileMenu}
                                className="bg-gradient-to-r from-[#E4725A] to-[#D8896A] hover:from-[#D8896A] hover:to-[#E4725A] text-white py-2 xs:py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-xs xs:text-sm sm:text-sm min-h-[40px] xs:min-h-[44px] flex items-center justify-center tracking-wide font-sans"
                            >
                                <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4 sm:h-4" />
                                <span className="ml-1.5 xs:ml-1.5">Hubungi Kami</span>
                            </a>
                            <Link
                                onClick={closeMobileMenu}
                                to={"/layanan"}
                                className="border-2 border-[#D6A676] text-[#D6A676] hover:bg-[#D6A676] hover:text-[#1A1A1A] py-2 xs:py-2.5 rounded-lg font-semibold transition-all duration-300 text-xs xs:text-sm sm:text-sm min-h-[40px] xs:min-h-[44px] flex items-center justify-center tracking-wide font-sans"
                            >
                                <FontAwesomeIcon icon={faBuilding} className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4 sm:h-4" />
                                <span className="ml-1.5 xs:ml-1.5">Lihat Layanan</span>
                            </Link>
                        </div>

                        <div className="px-4 xs:px-5 sm:px-6 pt-2 xs:pt-3 sm:pt-4 mt-1 xs:mt-1 sm:mt-2 border-t border-[#FFFFFF15]">
                            <div className="flex flex-col gap-1 xs:gap-1.5 text-xs text-[#A7A7A7] tracking-normal font-sans">
                                <div className="flex items-center gap-1.5">
                                    <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                                    <span>0817-730-219</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                                    <span>Senin-Jumat: 09.00 – 16.00</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                                    <span>Cirebon, Jawa Barat</span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 z-40 lg:hidden"
                        onClick={closeMobileMenu}
                    ></div>
                )}
            </div>
        </header>
    )
}