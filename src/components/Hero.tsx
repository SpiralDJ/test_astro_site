import { motion } from "framer-motion";
export default function Hero({ title, subtitle }) {
  return (
    <section className="p-12">
      <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>
        {title}
      </motion.h1>
      <p>{subtitle}</p>
    </section>
  );
}
