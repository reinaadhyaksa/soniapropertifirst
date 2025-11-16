import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
    faMapMarkerAlt,
    faInfoCircle,
    faClock,
    faUserFriends,
    faHeadset
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Form() {
    const [formData, setFormData] = useState({
        nama: '',
        telepon: '',
        email: '',
        subjek: '',
        pesan: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Format pesan untuk WhatsApp
        const phoneNumber = "62817730219";
        const subjectText = getSubjectText(formData.subjek);

        const message = `Halo Sonia Property, saya ingin berkonsultasi mengenai properti.

*Data Diri:*
👤 Nama: ${formData.nama}
📞 Telepon: ${formData.telepon}
📧 Email: ${formData.email}

*Subjek Konsultasi:*
${subjectText}

*Pesan Detail:*
${formData.pesan}

Saya berharap bisa segera dihubungi untuk informasi lebih lanjut. Terima kasih!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Buka WhatsApp
        window.open(whatsappURL, '_blank');

        // Reset form
        setFormData({
            nama: '',
            telepon: '',
            email: '',
            subjek: '',
            pesan: ''
        })
    }

    const additionalInfo = [
        {
            icon: faClock,
            title: "Jam Operasional Sonia Property",
            content: (
                <>
                    <p className="text-gray-600 text-xs sm:text-sm">Senin - Jumat: 09.00 – 16.00 WIB</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Sabtu & Minggu: Tutup</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Hari Libur Nasional: Tutup</p>
                </>
            )
        },
        {
            icon: faUserFriends,
            title: "Konsultasi Properti Langsung",
            content: (
                <p className="text-gray-600 text-xs sm:text-sm">
                    Untuk konsultasi properti langsung di Cirebon, disarankan membuat janji terlebih dahulu melalui telepon atau WhatsApp.
                </p>
            )
        },
        {
            icon: faHeadset,
            title: "Dukungan Profesional",
            content: (
                <p className="text-gray-600 text-xs sm:text-sm">
                    Untuk pertanyaan seputar properti Cirebon, hubungi kami selama jam operasional untuk layanan terbaik.
                </p>
            )
        }
    ]

    // Fungsi untuk mendapatkan teks subjek yang lebih deskriptif
    const getSubjectText = (subjectValue) => {
        const subjectMap = {
            'jual': '🏠 Ingin Menjual Properti di Cirebon',
            'beli': '💰 Ingin Membeli Properti di Cirebon',
            'sewa': '🔑 Ingin Menyewa Properti di Cirebon',
            'konsultasi': '💬 Konsultasi Properti Cirebon',
            'agen': '👥 Bergabung sebagai Agen Sonia Property',
            'lainnya': '📋 Lainnya'
        };
        return subjectMap[subjectValue] || subjectValue;
    }

    // Fungsi untuk membuka peta di tab baru
    const openMapInNewTab = () => {
        const mapUrl = "https://www.google.com/maps?q=Sonia+Property/@-6.6967326,108.5474767,17z&hl=id&entry=ttu";
        window.open(mapUrl, '_blank', 'noopener,noreferrer');
    }

    return (
        <section className="section-padding bg-gradient-to-br from-[#FAFAFA] to-white" aria-labelledby="contact-form-heading">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Contact Form */}
                    <div>
                        <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
                            {/* Form Header */}
                            <div className="text-center mb-6 md:mb-8">
                                <div className="inline-flex items-center bg-[#800000] text-white rounded-full px-4 py-2 md:px-6 md:py-2 mb-3 md:mb-4 shadow-lg text-sm sm:text-base font-sans">
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4 h-4" />
                                    <span className="font-semibold">Kirim Pesan</span>
                                </div>
                                <h2 id="contact-form-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight font-serif">
                                    Hubungi <span className="text-[#800000]">Sonia Property</span>
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base font-sans">
                                    Isi formulir di bawah ini dan tim <strong className="text-[#800000] font-semibold">Sonia Property</strong> akan menghubungi Anda secepatnya untuk konsultasi properti.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" itemScope itemType="https://schema.org/ContactPage">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label htmlFor="nama" className="block text-gray-700 font-semibold mb-2 md:mb-3 text-sm sm:text-base font-sans">
                                            Nama Lengkap *
                                        </label>
                                        <input
                                            type="text"
                                            id="nama"
                                            name="nama"
                                            value={formData.nama}
                                            onChange={handleChange}
                                            className="w-full px-3 py-3 md:px-4 md:py-4 border border-gray-200 rounded-lg form-input focus:outline-none focus:border-[#800000] focus:ring-4 focus:ring-[#800000]/20 transition-all duration-300 bg-gray-50/50 hover:bg-white text-sm sm:text-base font-sans"
                                            placeholder="Masukkan nama lengkap"
                                            required
                                            itemProp="name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="telepon" className="block text-gray-700 font-semibold mb-2 md:mb-3 text-sm sm:text-base font-sans">
                                            Nomor Telepon *
                                        </label>
                                        <input
                                            type="tel"
                                            id="telepon"
                                            name="telepon"
                                            value={formData.telepon}
                                            onChange={handleChange}
                                            className="w-full px-3 py-3 md:px-4 md:py-4 border border-gray-200 rounded-lg form-input focus:outline-none focus:border-[#800000] focus:ring-4 focus:ring-[#800000]/20 transition-all duration-300 bg-gray-50/50 hover:bg-white text-sm sm:text-base font-sans"
                                            placeholder="Contoh: 081234567890"
                                            required
                                            itemProp="telephone"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 md:mb-3 text-sm sm:text-base font-sans">
                                        Alamat Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 py-3 md:px-4 md:py-4 border border-gray-200 rounded-lg form-input focus:outline-none focus:border-[#800000] focus:ring-4 focus:ring-[#800000]/20 transition-all duration-300 bg-gray-50/50 hover:bg-white text-sm sm:text-base font-sans"
                                        placeholder="nama@email.com"
                                        required
                                        itemProp="email"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subjek" className="block text-gray-700 font-semibold mb-2 md:mb-3 text-sm sm:text-base font-sans">
                                        Subjek Konsultasi Properti *
                                    </label>
                                    <select
                                        id="subjek"
                                        name="subjek"
                                        value={formData.subjek}
                                        onChange={handleChange}
                                        className="w-full px-3 py-3 md:px-4 md:py-4 border border-gray-200 rounded-lg form-input focus:outline-none focus:border-[#800000] focus:ring-4 focus:ring-[#800000]/20 transition-all duration-300 bg-gray-50/50 hover:bg-white appearance-none text-sm sm:text-base font-sans"
                                        required
                                        itemProp="description"
                                    >
                                        <option value="">Pilih subjek pesan</option>
                                        <option value="jual">Ingin Menjual Properti di Cirebon</option>
                                        <option value="beli">Ingin Membeli Properti di Cirebon</option>
                                        <option value="sewa">Ingin Menyewa Properti di Cirebon</option>
                                        <option value="konsultasi">Konsultasi Properti Cirebon</option>
                                        <option value="agen">Bergabung sebagai Agen Sonia Property</option>
                                        <option value="lainnya">Lainnya</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="pesan" className="block text-gray-700 font-semibold mb-2 md:mb-3 text-sm sm:text-base font-sans">
                                        Pesan Detail *
                                    </label>
                                    <textarea
                                        id="pesan"
                                        name="pesan"
                                        value={formData.pesan}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-3 py-3 md:px-4 md:py-4 border border-gray-200 rounded-lg form-input focus:outline-none focus:border-[#800000] focus:ring-4 focus:ring-[#800000]/20 transition-all duration-300 bg-gray-50/50 hover:bg-white resize-none text-sm sm:text-base font-sans"
                                        placeholder="Tulis pesan detail Anda tentang properti Cirebon di sini..."
                                        required
                                        itemProp="text"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 md:py-4 bg-gradient-to-r from-[#800000] to-[#B22222] text-white font-semibold rounded-lg hover:from-[#A52A2A] hover:to-[#A52A2A] transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center group text-sm sm:text-base lg:text-sm xl:text-base font-sans"
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} className="mr-2 md:mr-3 text-sm md:text-base group-hover:scale-110 transition-transform" aria-hidden="true" />
                                    Kirim via WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Map & Additional Info */}
                    <div>
                        <div className="space-y-6 md:space-y-8">
                            {/* Map Section */}
                            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-gray-100">
                                <div className="flex items-center mb-4 md:mb-6">
                                    <div className="bg-gradient-to-r from-[#800000] to-[#B22222] p-2 md:p-3 rounded-lg mr-3 md:mr-4 shadow-md">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-lg md:text-xl w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight font-serif">
                                            Lokasi Kantor <span className="text-[#800000]">Sonia Property</span>
                                        </h2>
                                        <p className="text-gray-600 text-sm sm:text-base font-sans">Kunjungi kantor kami di Cirebon</p>
                                    </div>
                                </div>

                                <div className="map-container rounded-lg overflow-hidden shadow-md border border-gray-200 mb-4">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.789258918302!2d108.5449018!3d-6.6967326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee30afba038f1%3A0xcee4c661f502c260!2sSonia%20Property!5e0!3m2!1sid!2sid!4v1698765432107!5m2!1sid!2sid"
                                        width="100%"
                                        height="250"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Lokasi Kantor Sonia Property di Cirebon"
                                        aria-label="Peta lokasi kantor Sonia Property di Cirebon"
                                    ></iframe>
                                </div>

                                {/* Tombol untuk membuka peta lebih besar */}
                                <button
                                    onClick={openMapInNewTab}
                                    className="w-full py-3 bg-gradient-to-r from-[#800000] to-[#B22222] text-white font-semibold rounded-lg hover:from-[#A52A2A] hover:to-[#A52A2A] transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center group text-sm sm:text-base font-sans"
                                    aria-label="Buka peta lokasi Sonia Property di Google Maps"
                                >
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
                                    Buka Peta Lengkap di Google Maps
                                </button>

                                {/* Alamat lengkap */}
                                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Alamat Lengkap:</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        Jl. Kavling Raya No.83, Adidharma, <br />
                                        Gunungjati, Cirebon 45151, <br />
                                        Jawa Barat, Indonesia
                                    </p>
                                </div>
                            </div>

                            {/* Additional Contact Info */}
                            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
                                <div className="text-center mb-6 md:mb-8">
                                    <div className="inline-flex items-center bg-gradient-to-r from-[#B22222] to-[#D4AF37] text-white rounded-full px-4 py-2 md:px-6 md:py-2 shadow-lg text-sm sm:text-base font-sans">
                                        <FontAwesomeIcon icon={faInfoCircle} className="mr-2 w-4 h-4" />
                                        <span className="font-semibold">Informasi Tambahan</span>
                                    </div>
                                </div>

                                <div className="space-y-4 md:space-y-6">
                                    {additionalInfo.map((info, index) => (
                                        <article key={index} className="flex items-start group hover:bg-[#FAFAFA] p-3 md:p-4 rounded-lg transition-all duration-300">
                                            <div className="bg-gradient-to-r from-[#800000] to-[#B22222] p-2 md:p-3 rounded-lg mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                                <FontAwesomeIcon
                                                    icon={info.icon}
                                                    className="text-white text-base md:text-lg w-4 h-4 md:w-5 md:h-5"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 group-hover:text-[#800000] transition-colors duration-300 text-sm sm:text-base leading-tight font-sans">
                                                    {info.title}
                                                </h4>
                                                <div className="text-gray-600 leading-relaxed text-xs sm:text-sm font-sans">
                                                    {info.content}
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}