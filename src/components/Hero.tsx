import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="container relative mx-auto px-5 h-[calc(100vh-96px)] tablet:h-[calc(100vh-176px)] pb-10 tablet:pb-32 content-center">
      <motion.h1
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 8,
          delay: 0.2,
        }}
        className="font-bold text-[60px] tablet:text-[120px] flex items-center justify-center text-[#F69197]"
      >
        DAJ GŁOS
      </motion.h1>
      <motion.img
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 8,
          delay: 0.2,
        }}
        src="Microphone.png"
        alt="Zdjęcie mikrofonu"
        className="relative z-30 mx-auto"
      />
      <motion.h2
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 8,
          delay: 0.2,
        }}
        className="font-bold text-center mt-5 tablet:mt-10 text-[50px] tablet:text-[100px] flex items-center justify-center text-[#F69197]"
      >
        Studio <br />
        Podcastowe
      </motion.h2>

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 8,
          delay: 0.2,
        }}
        src="Ellipse.png"
        alt="Elipsa pod mikrofonem"
        className="absolute left-1/2 transform -translate-x-1/2 w-[200px] tablet:w-[300px] tablet:h-[150px] h-[100px] bottom-[250px] tablet:bottom-[400px] bg-[#FFB39E] rounded-full blur-[50px] z-10"
      />
    </div>
  );
};

export default Hero;