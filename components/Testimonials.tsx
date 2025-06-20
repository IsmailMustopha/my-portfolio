import { testimonials } from '@/data';
import TitleHeader from "./TitleHeader";
import GlowCard from "./GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center bg-black-100 section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          sub="⭐️ Customer feedback highlights"
        />
        <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

        <div className="grid-3-cols mt-16 lg:columns-3 md:columns-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="h-full border border-white-50 rounded-lg flex flex-col mb-5">
              <GlowCard card={testimonial} index={index}>
                <div className="flex items-center  gap-3 mt-auto">
                  <div className={`${testimonial.imgPath.includes("mit-logo") ? "bg-white p-1 rounded-full" : ""}`}>
                    <img
                      src={testimonial.imgPath}
                      alt=""
                      className={`${testimonial.imgPath.includes("mit-logo") ? "w-12 h-12 object-contain" : "w-12 h-12 object-cover rounded-full"}`}
                    />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-white-50 text-sm">{testimonial.mentions}</p>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
