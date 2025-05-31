import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code, Brain, Users } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  ctaText: string;
  onClick?: () => void;
}

const CourseCard = ({
  title = "Course Title",
  description = "Course description goes here",
  benefits = ["Benefit 1", "Benefit 2", "Benefit 3"],
  icon,
  ctaText = "Learn More",
  onClick = () => {},
}: CourseCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              {icon}
            </div>
          </div>
          <CardTitle className="text-center text-xl font-bold text-primary">
            {title}
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            {description}
          </CardDescription>
          <div className="mt-4 rounded-lg overflow-hidden">
            <img
              src={`https://images.unsplash.com/photo-${title.includes("Junior") ? "1485546246426-74a2acc41b75" : title.includes("Senior") ? "1531482615713-2afd69097998" : "1516321497487-e288fb19713f"}?w=400&q=80&auto=format`}
              alt={`${title} illustration`}
              className="w-full h-40 object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-2 mt-1 text-primary">•</div>
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button onClick={onClick} className="w-full group" variant="default">
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

interface CourseCardsProps {
  onJuniorClick?: () => void;
  onSeniorClick?: () => void;
  onParentClick?: () => void;
}

const CourseCards = ({
  onJuniorClick = () => {},
  onSeniorClick = () => {},
  onParentClick = () => {},
}: CourseCardsProps) => {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary font-display">
          Our AI Learning Tracks
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-sans">
          Choose the perfect AI education path for you and your family. Each
          track is designed to build essential skills for the future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CourseCard
            title="Junior AI Classes"
            description="For children ages 8-12 to learn AI fundamentals through fun, interactive projects."
            benefits={[
              "Build and train simple AI models",
              "Learn coding basics with child-friendly tools",
              "Develop critical thinking skills",
              "Create exciting AI-powered games and stories",
            ]}
            icon={<Code className="h-8 w-8" />}
            ctaText="Explore Junior Classes"
            onClick={onJuniorClick}
          />

          <CourseCard
            title="Senior AI Classes"
            description="For teens ages 13-18 to develop advanced AI skills and prepare for future careers."
            benefits={[
              "Master programming languages used in AI",
              "Build sophisticated machine learning models",
              "Work on real-world AI applications",
              "Create a portfolio of AI projects",
            ]}
            icon={<Brain className="h-8 w-8" />}
            ctaText="Discover Senior Classes"
            onClick={onSeniorClick}
          />

          <CourseCard
            title="Navigating AI for Parents"
            description="Help parents understand AI technology and guide their children's learning journey."
            benefits={[
              "Understand AI fundamentals without technical background",
              "Learn to support your child's AI education",
              "Discover AI safety and ethical considerations",
              "Connect with other parents in the AI learning community",
            ]}
            icon={<Users className="h-8 w-8" />}
            ctaText="Join Parent Workshop"
            onClick={onParentClick}
          />
        </div>
      </div>
    </section>
  );
};

export default CourseCards;
