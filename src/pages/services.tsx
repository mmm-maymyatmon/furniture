import { motion } from "motion/react"

const services = [
  {
    title: "Free Delivery",
    description: "We deliver furniture to your doorstep at no extra cost within the city.",
    icon: "🚚",
  },
  {
    title: "Custom Furniture",
    description: "Customize furniture size, color, and material to fit your space perfectly.",
    icon: "🛠️",
  },
  {
    title: "Assembly Service",
    description: "Professional assembly service included with every order.",
    icon: "🔧",
  },
  {
    title: "Interior Design Help",
    description: "Get expert advice on how to style your home with our products.",
    icon: "🛋️",
  },
];

export default function Services() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Services</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-card border shadow p-6 rounded-2xl hover:shadow-lg transition"
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
              easing: "ease-in-out",
            }}
            whileHover={{ scale: 1.05 }}
          >
            
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className=" mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
