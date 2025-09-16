import { motion } from "framer-motion";

const SimpleTimeline = () => {
  // Data timeline para nabi
  const prophets = [
    {
      id: 1,
      name: "Nabi Adam AS",
      period: "Manusia pertama",
      description:
        "Nabi pertama umat manusia, diciptakan oleh Allah SWT tanpa ayah dan ibu.",
    },
    {
      id: 2,
      name: "Nabi Ibrahim AS",
      period: "Bapak para Nabi",
      description:
        "Dikenal sebagai Khalilullah (kekasih Allah), pembangun Ka'bah.",
    },
    {
      id: 3,
      name: "Nabi Musa AS",
      period: "Penerima Taurat",
      description:
        "Pemimpin Bani Israel, menerima kitab Taurat di Gunung Sinai.",
    },
    {
      id: 4,
      name: "Nabi Isa AS",
      period: "Diutus untuk Bani Israel",
      description:
        "Dilahirkan tanpa ayah, menerima kitab Injil, dan diangkat oleh Allah ke langit.",
    },
    {
      id: 5,
      name: "Nabi Muhammad SAW",
      period: "Nabi terakhir",
      description: "Penutup para nabi dan rasul, penerima wahyu Al-Qur'an.",
    },
  ];

  // Variants untuk animasi container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  // Variants untuk animasi item
  const itemVariants = {
    hidden: {
      y: 30,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.5,
      },
    },
  };

  // Variants untuk animasi garis timeline
  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-blue-50 to-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3 font-serif">
            Sejarah Para Nabi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Perjalanan dakwah para utusan Allah dalam menyebarkan risalah ilahi
          </p>
        </motion.div>

        {/* Timeline container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Garis timeline dengan animasi */}
          <motion.div
            variants={lineVariants}
            className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-600 shadow-lg md:left-1/2 md:-translate-x-1/2 origin-top"
            style={{ transformOrigin: "top center" }}
          ></motion.div>

          {/* Daftar nabi */}
          <div className="space-y-16">
            {prophets.map((prophet, index) => (
              <motion.div
                key={prophet.id}
                variants={itemVariants}
                className="flex items-start relative group"
              >
                {/* Titik timeline dengan efek glow */}
                <div className="absolute left-4 h-7 w-7 rounded-full bg-white border-4 border-blue-500 z-10 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                </div>

                {/* Efek glow untuk titik timeline */}
                <div className="absolute left-4 h-7 w-7 rounded-full bg-blue-200 opacity-0 group-hover:opacity-100 z-0 md:left-1/2 md:-translate-x-1/2 transition-opacity duration-300 animate-pulse"></div>

                {/* Kartu konten dengan animasi hover */}
                <div
                  className={`ml-14 bg-white rounded-xl shadow-md p-5 border border-gray-100 w-full transition-all duration-300 hover:shadow-lg hover:border-blue-100 md:ml-0 md:w-5/6 md:mx-auto ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800 text-xl mb-1">
                        {prophet.name}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm mb-2">
                        {prophet.period}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {prophet.description}
                      </p>
                    </div>
                    <div className="bg-blue-50 text-blue-700 font-bold h-8 w-8 rounded-full flex items-center justify-center text-xs ml-4 flex-shrink-0">
                      {prophet.id}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SimpleTimeline;
