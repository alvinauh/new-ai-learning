import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Brain, Shield } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit = (
  { icon, title, description }: BenefitProps = {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Default Benefit",
    description: "This is a placeholder description for the benefit.",
  },
) => {
  // Generate a unique image for each benefit based on title
  const getImageUrl = () => {
    const imageMap = {
      "Cognitive Development": "1517048676732-d65bc937f952",
      "Future-Ready Skills": "1581090464777-f72c2741cd6c",
      "Digital Safety": "1550745165-9bc0b252726f",
      "Parental Confidence": "1543269865-cbf427effbad",
      "Default Benefit": "1517048676732-d65bc937f952",
    };
    const imageId = imageMap[title] || imageMap["Default Benefit"];
    return `https://images.unsplash.com/photo-${imageId}?w=300&q=80&auto=format`;
  };

  return (
    <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-muted-foreground text-center mb-4">{description}</p>
      <div className="w-full h-40 rounded-lg overflow-hidden">
        <img
          src={getImageUrl()}
          alt={`${title} illustration`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const Testimonial = (
  { quote, author, role }: { quote: string; author: string; role: string } = {
    quote:
      "AI-Learn has transformed how my child thinks about technology. It's not just about using it, but understanding it.",
    author: "Sarah Johnson",
    role: "Parent of Junior AI Student",
  },
) => {
  return (
    <div className="bg-primary/5 p-6 rounded-xl">
      <p className="italic mb-4 text-muted-foreground">"{quote}"</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Statistic = (
  { value, label }: { value: string; label: string } = {
    value: "85%",
    label: "of parents believe AI education is essential",
  },
) => {
  return (
    <div className="text-center p-4">
      <p className="text-3xl font-bold text-primary mb-1">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Cognitive Development",
      description:
        "AI education enhances problem-solving skills and computational thinking in children of all ages.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Future-Ready Skills",
      description:
        "Prepare your child for a world where AI literacy will be as fundamental as reading and writing.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Digital Safety",
      description:
        "Learn to navigate AI tools safely and responsibly, understanding both benefits and limitations.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Parental Confidence",
      description:
        "Gain the knowledge to guide your child through the evolving digital landscape with confidence.",
    },
  ];

  const statistics = [
    { value: "85%", label: "of parents believe AI education is essential" },
    { value: "3x", label: "faster learning with AI-assisted education" },
    { value: "94%", label: "of our students show increased tech confidence" },
  ];

  const testimonials = [
    {
      quote:
        "AI-Learn has transformed how my child thinks about technology. It's not just about using it, but understanding it.",
      author: "Sarah Johnson",
      role: "Parent of Junior AI Student",
    },
    {
      quote:
        "As a parent with limited tech knowledge, the parent-focused course gave me the confidence to support my child's learning journey.",
      author: "Michael Chen",
      role: "Parent Course Graduate",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 font-display"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why AI Education Matters
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Equipping the next generation with the knowledge and skills to
            thrive in an AI-driven world
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Benefit
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            The Impact of AI Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Statistic value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <h3 className="text-2xl font-semibold text-center mb-8">
          What Parents Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Testimonial
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
