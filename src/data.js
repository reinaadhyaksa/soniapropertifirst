export const features = [
    {
        icon: "shield",
        title: "Aman & Terpercaya",
        description: "Keamanan transaksi terjamin dengan verifikasi agen dan properti resmi."
    },
    {
        icon: "handshake",
        title: "Agen Profesional",
        description: "Didukung agen properti berpengalaman dan bersertifikasi di Cirebon."
    },
    {
        icon: "chart",
        title: "Analisis Pasar",
        description: "Dapatkan wawasan harga pasar dan tren properti terbaru di Cirebon."
    },
    {
        icon: "headset",
        title: "Dukungan Profesional",
        description: "Tim support responsif siap membantu selama jam operasional."
    },
    {
        icon: "mobile",
        title: "Akses Dimana Saja",
        description: "Optimasi pengalaman mobile dan desktop tanpa batas."
    }
];

export const propertyTypes = [
    {
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        title: "Rumah",
        description: "Temukan rumah idaman untuk keluarga Anda.",
        count: "150+"
    },
    {
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        title: "Ruko",
        description: "Properti komersial untuk bisnis Anda.",
        count: "80+"
    },
    {
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        title: "Tanah",
        description: "Investasi masa depan dengan tanah kosong.",
        count: "120+"
    },
    {
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        title: "Apartemen",
        description: "Hidup modern dengan fasilitas lengkap.",
        count: "90+"
    }
];
 
export const propertiesForSale = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        images: [
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        ],
        title: "Rumah Modern Type 45 di Cirebon",
        location: "Jl. Kavling Raya No.83, Adidharma, Kec. Gunungjati, Kabupaten Cirebon",
        price: "Rp 850 Juta",
        priceValue: 850000000,
        details: {
            beds: 3,
            baths: 2,
            area: "180m²",
            landArea: "200m²",
            yearBuilt: 2020,
            floors: 2
        },
        type: "Dijual",
        category: "Rumah",
        badgeColor: "bg-[#800000]",
        status: "Tersedia",
        description: "Rumah modern dengan desain minimalis yang elegan, terletak di lokasi strategis Cirebon. Dilengkapi dengan 3 kamar tidur, 2 kamar mandi, ruang keluarga yang luas, dan taman hijau yang asri. Dekat dengan pusat perbelanjaan, sekolah, dan fasilitas umum lainnya. Kondisi bangunan masih sangat baik dengan material berkualitas tinggi. Cocok untuk keluarga muda atau investasi jangka panjang.",
        features: [
            "Parkir Mobil 2 unit",
            "Taman depan dan belakang",
            "Dapur modern",
            "Ruang keluarga luas",
            "Kamar mandi air panas",
            "Listrik 2200 Watt",
            "Air PDAM",
            "Security system",
            "Gardu darurat",
            "Sumur bor"
        ],
        specifications: {
            building: {
                structure: "Beton bertulang",
                floor: "Keramik 60x60",
                wall: "Bata hebel",
                roof: "Genteng beton",
                ceiling: "Gypsum board"
            },
            facilities: {
                electricity: "2200 Watt",
                water: "PDAM + Sumur bor",
                telephone: "Ready",
                internet: "Fiber optic ready"
            },
            environment: {
                roadAccess: "Aspal 8m",
                security: "24 jam",
                garbage: "Setiap hari",
                floodRisk: "Rendah"
            }
        },
        locationDetails: {
            latitude: -6.7141,
            longitude: 108.5695,
            address: "Jl. Kavling Raya No.83, Adidharma, Kec. Gunungjati",
            district: "Gunungjati",
            subDistrict: "Adidharma",
            zipCode: "45151"
        },
        contact: {
            agentName: "Sonia Property Team",
            agentPhone: "0811-2400-219",
            agentEmail: "soniaproperty.assetmanagement@gmail.com"
        },
        additionalInfo: {
            certificate: "SHM",
            electricity: "2200 Watt",
            water: "PDAM",
            orientation: "Timur",
            facing: "Jalan raya",
            buildingAge: "3 tahun"
        }
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        images: [
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        ],
        title: "Ruko Strategis 2 Lantai di Cirebon",
        location: "Jl. Kavling Raya No.83, Adidharma, Kec. Gunungjati, Cirebon",
        price: "Rp 1,2 Miliar",
        priceValue: 1200000000,
        priceNote: "Nego sampai deal",
        details: {
            floors: "2 Lantai",
            area: "250m²",
            landArea: "120m²",
            yearBuilt: 2018,
            shopUnits: 1
        },
        type: "Dijual",
        category: "Ruko",
        badgeColor: "bg-[#800000]",
        status: "Terjual",
        description: "Ruko strategis di pusat bisnis Cirebon dengan akses jalan yang mudah. Bangunan 2 lantai cocok untuk berbagai jenis usaha seperti retail, kantor, atau showroom. Kondisi bangunan terawat dengan sistem listrik dan air yang memadai. Lantai pertama untuk usaha, lantai kedua untuk kantor atau gudang. Lokasi sangat strategis di jalur utama kota Cirebon.",
        features: [
            "Lokasi strategis",
            "Akses jalan mudah",
            "Listrik 4400 Watt",
            "Parkir luas",
            "Toilet masing-masing lantai",
            "Security system",
            "Frontage 8 meter",
            "Dekat pusat perbelanjaan",
            "Akses truk",
            "Fiber optic ready"
        ],
        specifications: {
            building: {
                structure: "Beton bertulang",
                floor: "Granit",
                wall: "Bata merah",
                roof: "Flat concrete",
                ceiling: "Gypsum + Plafon PVC"
            },
            facilities: {
                electricity: "4400 Watt",
                water: "PDAM",
                telephone: "4 lines",
                internet: "Fiber optic ready",
                ac: "Central AC ready"
            },
            environment: {
                roadAccess: "Aspal 12m",
                security: "Ronda malam",
                garbage: "Setiap hari",
                businessArea: "Komplek ruko"
            }
        },
        locationDetails: {
            latitude: -6.7141,
            longitude: 108.5695,
            address: "Jl. Kavling Raya No.83, Adidharma, Kec. Gunungjati",
            district: "Gunungjati",
            subDistrict: "Adidharma",
            zipCode: "45151"
        },
        contact: {
            agentName: "Sonia Property Team",
            agentPhone: "0811-2400-219",
            agentEmail: "soniaproperty.assetmanagement@gmail.com"
        },
        additionalInfo: {
            certificate: "SHM",
            electricity: "4400 Watt",
            water: "PDAM",
            buildingAge: "5 tahun",
            frontage: "8 meter",
            depth: "15 meter"
        }
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1180&q=80",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1174&q=80"
        ],
        title: "Tanah Kavling Siap Bangun di Cirebon",
        location: "Perumahan Griya Asri, Adidharma, Kec. Gunungjati, Cirebon",
        price: "Rp 350 Juta",
        priceValue: 350000000,
        priceNote: "per 200m²",
        details: {
            area: "2000m²",
            landArea: "2000m²",
            units: 10,
            pricePerM2: "1.75 Juta"
        },
        type: "Dijual",
        category: "Tanah",
        badgeColor: "bg-[#800000]",
        status: "Tersedia",
        description: "Tanah kavling siap bangun di area Cirebon yang sedang berkembang. Lokasi dekat dengan jalan utama, cocok untuk investasi jangka panjang atau pembangunan rumah impian. Sertifikat lengkap dan proses hukum yang jelas. Lingkungan yang asri dan nyaman, dekat dengan fasilitas pendidikan dan kesehatan. Sudah tersedia akses jalan dan utilitas dasar.",
        features: [
            "Sertifikat SHM",
            "Akses jalan aspal",
            "Listrik sudah tersedia",
            "Air sumur bor",
            "Lingkungan asri",
            "Dekat sekolah",
            "Dekat puskesmas",
            "Rencana tata kota jelas",
            "Ijin MB sudah ada",
            "Bebas banjir"
        ],
        specifications: {
            land: {
                certificate: "SHM",
                landType: "Daratan",
                topography: "Datar",
                soilType: "Tanah merah",
                drainage: "Baik"
            },
            utilities: {
                electricity: "Tersedia di lokasi",
                water: "Sumur bor",
                road: "Aspal 8m",
                telephone: "Ready",
                internet: "4G available"
            },
            environment: {
                floodRisk: "Sangat rendah",
                landStatus: "Bebas sengketa",
                development: "Perumahan terencana",
                facilities: "Area komersial nearby"
            }
        },
        locationDetails: {
            latitude: -6.7141,
            longitude: 108.5695,
            address: "Perumahan Griya Asri Blok A, Adidharma, Cirebon",
            district: "Gunungjati",
            subDistrict: "Adidharma",
            zipCode: "45151"
        },
        contact: {
            agentName: "Sonia Property Team",
            agentPhone: "0811-2400-219",
            agentEmail: "soniaproperty.assetmanagement@gmail.com"
        },
        additionalInfo: {
            certificate: "SHM",
            landSize: "2000m² total, 200m² per kavling",
            landShape: "Persegi panjang",
            landStatus: "Bebas sengketa",
            developmentPlan: "Perumahan cluster"
        }
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80",
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80",
            "https://images.unsplash.com/photo-1628133287836-40bd5453bed1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1158&q=80"
        ],
        title: "Apartemen Luxurious di CBD Cirebon",
        location: "Sudirman Central Business District, Cirebon",
        price: "Rp 1,8 Miliar",
        priceValue: 1800000000,
        details: {
            beds: 3,
            baths: 2,
            area: "95m²",
            floors: 15,
            unit: "15A"
        },
        type: "Dijual",
        category: "Apartemen",
        badgeColor: "bg-[#800000]",
        status: "Tersedia",
        description: "Apartemen luxurious di jantung Central Business District Cirebon dengan view kota yang menakjubkan. Unit berada di lantai tinggi dengan pemandangan 180 derajat. Dilengkapi dengan fasilitas premium seperti swimming pool, gym, lounge, dan security 24 jam. Cocok untuk investasi atau tempat tinggal dengan standar hidup tinggi.",
        features: [
            "Swimming pool",
            "Fitness center",
            "Security 24/7",
            "Car park basement",
            "View kota",
            "Smart home system",
            "Central AC",
            "Floor to ceiling window",
            "Private balcony",
            "Concierge service"
        ],
        specifications: {
            building: {
                structure: "Reinforced concrete",
                floor: "Parquet wood",
                wall: "Wallpaper premium",
                ceiling: "Gypsum masterpiece",
                window: "Double glazing"
            },
            facilities: {
                electricity: "5500 Watt",
                water: "Central system",
                ac: "Central AC",
                internet: "Fiber optic",
                security: "CCTV + Access card"
            },
            environment: {
                floor: "Lantai 15",
                view: "City view",
                orientation: "Timur Laut",
                facility: "Premium amenities"
            }
        },
        locationDetails: {
            latitude: -6.7141,
            longitude: 108.5695,
            address: "SCBD Tower, Lantai 15 Unit A, Cirebon",
            district: "Gunungjati",
            subDistrict: "Adidharma",
            zipCode: "45151"
        },
        contact: {
            agentName: "Sonia Property Team",
            agentPhone: "0811-2400-219",
            agentEmail: "soniaproperty.assetmanagement@gmail.com"
        },
        additionalInfo: {
            certificate: "Strata title",
            maintenanceFee: "Rp 1.2 juta/bulan",
            buildingAge: "2 tahun",
            floor: "Lantai 15",
            view: "City view 180°"
        }
    }
];

export const propertiesForRent = [
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80"
        ],
        title: "Apartemen Modern 2BR di Cirebon",
        location: "Kawasan Sukajadi, Cirebon, Jawa Barat",
        price: "Rp 5 Juta/bulan",
        priceValue: 5000000,
        priceNote: "Minimum kontrak 1 tahun",
        details: {
            beds: 2,
            baths: 1,
            area: "75m²",
            floors: 8,
            unit: "8B"
        },
        type: "Disewa",
        category: "Apartemen",
        badgeColor: "bg-[#B22222]",
        status: "Tersedia",
        description: "Apartemen modern di jantung kota Cirebon dengan fasilitas lengkap termasuk kolam renang, gym, dan area parkir yang aman. Unit menghadap ke arah kota dengan pemandangan yang indah. Cocok untuk profesional muda atau pasangan. Lokasi strategis dekat dengan perkantoran dan pusat bisnis. Interior sudah fully furnished dengan perabotan berkualitas.",
        features: [
            "Fully furnished",
            "Swimming pool",
            "Fitness center",
            "Security 24/7",
            "Car park",
            "Near shopping mall",
            "Internet included",
            "AC each room",
            "Kitchen set",
            "Laundry facility"
        ],
        specifications: {
            building: {
                structure: "Reinforced concrete",
                floor: "Vinyl wood",
                wall: "Wallpaper",
                ceiling: "Gypsum",
                furniture: "Full set"
            },
            facilities: {
                electricity: "Included",
                water: "Included",
                internet: "Included",
                ac: "2 unit",
                tv: "LED 32 inch"
            },
            environment: {
                floor: "Lantai 8",
                view: "City view",
                security: "24/7 CCTV",
                access: "Card system"
            }
        },
        locationDetails: {
            latitude: -6.7141,
            longitude: 108.5695,
            address: "Apartemen Sukajadi Residence, Lantai 8 Unit B, Cirebon",
            district: "Gunungjati",
            subDistrict: "Adidharma",
            zipCode: "45151"
        },
        contact: {
            agentName: "Sonia Property Team",
            agentPhone: "0811-2400-219",
            agentEmail: "soniaproperty.assetmanagement@gmail.com"
        },
        additionalInfo: {
            contract: "Minimum 1 tahun",
            deposit: "2 bulan",
            advance: "1 bulan",
            furniture: "Fully furnished",
            maintenance: "Termasuk biaya apartemen"
        }
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        images: [
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1158&q=80",
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        ],
        title: "Rumah Type 36 Nyaman di Cirebon",
        location: "Perumahan Taman Cirebon Indah, Adidharma, Cirebon",
        price: "Rp 2,5 Juta/bulan",
        priceValue: 2500000,
        priceNote: "Free biaya listrik dan air",
        details: {
            beds: 2,
            baths: 1,
            area: "36m²",
            landArea: "60m²",
            yearBuilt: 2015
        },
        type: "Disewa",
        category: "Rumah",
        badgeColor: "bg-[#B22222]",
        status: "Tersewa",
        description: "Rumah type 36 yang nyaman di kawasan Cirebon. Lingkungan yang asri dan aman, dekat dengan pasar tradisional dan sekolah. Rumah dalam kondisi bersih dan terawat, siap huni dengan perabotan dasar yang memadai. Cocok untuk keluarga kecil atau pekerja yang mencari tempat tinggal yang nyaman dengan budget terjangkau.",
        features: [
            "Semi furnished",
            "Parkir mobil 1",
            "Parkir motor 2",
            "Taman kecil",
            "Dapur lengkap",
            "Water heater",
            "Listrik 1300 Watt",
            "Air PDAM",
            "Dekat pasar",
            "Lingkungan aman"
        ],
        specifications: {
            building: {
                structure: "Bata merah",
                floor: "Keramik",
                wall: "Cat tembok",
                roof: "Genteng",
                ceiling: "Plafon PVC"
            },
            facilities: {
                electricity: "1300 Watt",
                water: "PDAM",
                furniture: "Semi furnished",
                kitchen: "Kitchen set",
                bathroom: "Water heater"
            },
            environment: {
                security: "Ronda malam",
                garbage: "Setiap hari",
                neighborhood: "Perumahan",
                access: "Jalan aspal 6m"
            }
        },
        locationDetails: {
            latitude: -6.7141,
            longitude: 108.5695,
            address: "Perumahan Taman Cirebon Indah Blok C No. 12, Adidharma",
            district: "Gunungjati",
            subDistrict: "Adidharma",
            zipCode: "45151"
        },
        contact: {
            agentName: "Sonia Property Team",
            agentPhone: "0811-2400-219",
            agentEmail: "soniaproperty.assetmanagement@gmail.com"
        },
        additionalInfo: {
            contract: "Minimum 1 tahun",
            deposit: "1 bulan",
            advance: "1 bulan",
            utilities: "Listrik dan air free",
            furniture: "Semi furnished"
        }
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
        images: [
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        ],
        title: "Ruko Komersial 2 Lantai di Cirebon",
        location: "Jl. Pahlawan, Adidharma, Kec. Gunungjati, Cirebon",
        price: "Rp 8 Juta/bulan",
        priceValue: 8000000,
        priceNote: "Include biaya kebersihan",
        details: {
            floors: "2 Lantai",
            area: "180m²",
            landArea: "90m²",
            yearBuilt: 2017,
            shopUnits: 1
        },
        type: "Disewa",
        category: "Ruko",
        badgeColor: "bg-[#B22222]",
        status: "Tersedia",
        description: "Ruko komersial strategis di pusat bisnis Cirebon. Lantai pertama cocok untuk toko atau showroom, lantai kedua dapat digunakan sebagai kantor atau gudang. Lokasi ramai dengan akses transportasi yang mudah. Cocok untuk berbagai jenis usaha retail, jasa, atau kantor. Kondisi bangunan terawat dengan fasilitas lengkap.",
        features: [
            "Lokasi strategis",
            "Akses jalan mudah",
            "Listrik 3300 Watt",
            "Parkir depan",
            "Toilet masing-masing lantai",
            "Front glass",
            "Mezzanine possible",
            "Dekat pelabuhan",
            "Akses truk",
            "Zoning komersial"
        ],
        specifications: {
            building: {
                structure: "Beton bertulang",
                floor: "Granit lantai 1, keramik lantai 2",
                wall: "Bata merah",
                roof: "Genteng",
                ceiling: "Plafon gypsum"
            },
            facilities: {
                electricity: "3300 Watt",
                water: "PDAM",
                toilet: "2 unit",
                security: "Rolling door",
                signage: "Front billboard"
            },
            environment: {
                roadAccess: "Aspal 10m",
                businessArea: "Pusat kota",
                parking: "Parkir depan",
                traffic: "Ramai"
            }
        },
        locationDetails: {
            latitude: -6.7141,
            longitude: 108.5695,
            address: "Jl. Pahlawan No. 88, Adidharma, Cirebon",
            district: "Gunungjati",
            subDistrict: "Adidharma",
            zipCode: "45151"
        },
        contact: {
            agentName: "Sonia Property Team",
            agentPhone: "0811-2400-219",
            agentEmail: "soniaproperty.assetmanagement@gmail.com"
        },
        additionalInfo: {
            contract: "Minimum 2 tahun",
            deposit: "3 bulan",
            advance: "1 bulan",
            utilities: "Kebersihan included",
            signage: "Boleh pasang billboard"
        }
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1084&q=80",
        images: [
            "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1084&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        ],
        title: "Kantor Modern di Plaza Cirebon",
        location: "Plaza Cirebon, Adidharma, Kec. Gunungjati, Cirebon",
        price: "Rp 12 Juta/bulan",
        priceValue: 12000000,
        priceNote: "Include maintenance dan security",
        details: {
            area: "120m²",
            rooms: 4,
            toilets: 2,
            floors: 12,
            unit: "1201"
        },
        type: "Disewa",
        category: "Kantor",
        badgeColor: "bg-[#B22222]",
        status: "Tersedia",
        description: "Kantor modern di gedung perkantoran premium Plaza Cirebon. Lokasi sangat strategis di jantung bisnis kota dengan akses mudah ke berbagai fasilitas. Unit siap pakai dengan partisi sudah terpasang, AC central, dan internet fiber optic. Cocok untuk perusahaan, startup, atau kantor perwakilan.",
        features: [
            "Lokasi premium CBD",
            "AC central",
            "Internet fiber optic",
            "Reception area",
            "Meeting room",
            "Pantry",
            "Security 24/7",
            "Elevator",
            "Parkir basement",
            "Maintenance included"
        ],
        specifications: {
            building: {
                structure: "Grade A office",
                floor: "Carpet",
                wall: "Gypsum partition",
                ceiling: "False ceiling",
                window: "Curtain wall"
            },
            facilities: {
                electricity: "Included",
                water: "Included",
                internet: "Fiber optic",
                ac: "Central AC",
                cleaning: "Daily cleaning"
            },
            environment: {
                building: "Grade A office",
                floor: "Lantai 12",
                view: "City view",
                access: "24/7 access"
            }
        },
        locationDetails: {
            latitude: -6.7141,
            longitude: 108.5695,
            address: "Plaza Cirebon, Lantai 12 Unit 1201, Adidharma",
            district: "Gunungjati",
            subDistrict: "Adidharma",
            zipCode: "45151"
        },
        contact: {
            agentName: "Sonia Property Team",
            agentPhone: "0811-2400-219",
            agentEmail: "soniaproperty.assetmanagement@gmail.com"
        },
        additionalInfo: {
            contract: "Minimum 1 tahun",
            deposit: "2 bulan",
            advance: "1 bulan",
            included: "Maintenance & security",
            furniture: "Semi furnished"
        }
    }
];

export const steps = [
    {
        number: "1",
        title: "Konsultasi & Pencarian",
        description: "Konsultasikan kebutuhan properti Anda dan temukan pilihan terbaik dengan bantuan tim profesional kami.",
        features: ["Analisis kebutuhan", "Rekomendasi properti", "Tur virtual", "Perbandingan harga"],
        duration: "1-2 Hari"
    },
    {
        number: "2",
        title: "Tur & Inspeksi",
        description: "Lakukan tur properti virtual atau fisik dengan panduan agen profesional Sonia Property.",
        features: ["Tur properti", "Inspeksi menyeluruh", "Analisis lingkungan", "Dokumentasi properti"],
        duration: "2-3 Hari"
    },
    {
        number: "3",
        title: "Negosiasi & Kontrak",
        description: "Proses negosiasi yang transparan dan pembuatan kontrak yang aman secara profesional.",
        features: ["Negosiasi harga", "Kontrak legal", "Verifikasi dokumen", "Proses aman"],
        duration: "3-5 Hari"
    },
    {
        number: "4",
        title: "Serah Terima Kunci",
        description: "Proses serah terima kunci yang mudah dengan dukungan layanan purna jual Sonia Property.",
        features: ["Proses notaris", "Serah terima", "Dokumen lengkap", "Layanan purna jual"],
        duration: "1-2 Hari"
    }
];

export const stats = [
    {
        number: "500+",
        label: "Properti Aktif"
    },
    {
        number: "1.2K+",
        label: "Klien Puas"
    },
    {
        number: "98%",
        label: "Tingkat Kepuasan"
    },
    {
        number: "24/7",
        label: "Layanan Digital"
    }
];

export const dataMisi = [
    "Menyediakan layanan properti profesional dan terpercaya di wilayah Cirebon",
    "Menghubungkan pembeli dan penjual properti dengan pendekatan personal di Cirebon",
    "Menyediakan informasi properti Cirebon yang akurat, transparan, dan terupdate",
    "Mendorong pertumbuhan pasar properti yang sehat dan berkelanjutan di Cirebon",
    "Memberikan layanan konsultasi properti yang komprehensif dan solutif"
]
export const values = [
    {
        icon: "fas fa-shield-alt",
        title: "Integritas & Kepercayaan",
        description: "Setiap transaksi properti dilakukan dengan transparansi penuh dan komitmen pada kejujuran."
    },
    {
        icon: "fas fa-lightbulb",
        title: "Inovasi Digital",
        description: "Terus mengembangkan teknologi untuk pengalaman properti yang lebih mudah dan efisien."
    },
    {
        icon: "fas fa-heart",
        title: "Kepuasan Klien",
        description: "Kebahagiaan dan kepuasan Anda adalah prioritas utama dalam setiap layanan kami."
    },
    {
        icon: "fas fa-chart-line",
        title: "Pertumbuhan Bersama",
        description: "Membangun kemitraan yang saling menguntungkan untuk perkembangan properti Riau."
    },
    {
        icon: "fas fa-handshake",
        title: "Kolaborasi Terbuka",
        description: "Bekerja sama dengan semua pihak untuk menciptakan ekosistem properti yang sehat."
    },
    {
        icon: "fas fa-medal",
        title: "Kualitas Terbaik",
        description: "Selalu memberikan layanan properti dengan standar kualitas tertinggi."
    },
    {
        icon: "fas fa-bolt",
        title: "Efisiensi Digital",
        description: "Memanfaatkan teknologi untuk proses properti yang cepat dan tanpa hambatan."
    },
    {
        icon: "fas fa-home",
        title: "Dedikasi Lokal",
        description: "Memahami kebutuhan properti Riau dengan pendekatan yang personal dan lokal."
    }
];