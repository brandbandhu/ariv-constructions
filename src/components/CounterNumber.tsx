import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterNumberProps {
  target: number;
  suffix?: string;
  label: string;
}

const CounterNumber = ({ target, suffix = "+", label }: CounterNumberProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-heading font-bold text-accent">
        {count}
        {suffix}
      </div>
      <div className="text-sm uppercase tracking-wider text-primary-foreground/70 mt-2">
        {label}
      </div>
    </motion.div>
  );
};

export default CounterNumber;
