import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "@/data";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define the shape of a counter item if not already defined
interface CounterItem {
  value: number;
  suffix: string;
  label: string;
}

const AnimatedCounter = () => {
  // Main wrapper ref
  const counterRef = useRef<HTMLDivElement | null>(null);

  // Refs for individual counter items
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      if (!counter) return;

      const numberElement = counter.querySelector<HTMLDivElement>(".counter-number");
      const item: CounterItem = counterItems[index];

      if (!numberElement) return;

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Animate the counting
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#counter",
          start: "top center",
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    });
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32 w-full max-w-full mx-auto">
      <div className="mx-auto flex flex-col gap-4 lg:flex-row justify-between md:w-[80%] lg:w-full max-w-full">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) countersRef.current[index] = el;
            }}
            className="bg-blue-950 border border-white/[0.1] items-center w-full rounded-lg p-10 flex flex-col justify-center"
            style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0{item.suffix}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
