import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  childAge: z
    .string()
    .min(1, { message: "Please select your child's age range." }),
  courseInterest: z
    .string()
    .min(1, { message: "Please select a course you're interested in." }),
});

type FormValues = z.infer<typeof formSchema>;

interface LeadCaptureFormProps {
  onSubmit?: (data: FormValues) => void;
}

const LeadCaptureForm = ({ onSubmit = () => {} }: LeadCaptureFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      childAge: "",
      courseInterest: "",
    },
  });

  const handleSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    onSubmit(data);
    form.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden"
    >
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 pb-6">
          <CardTitle className="text-2xl font-bold text-center text-blue-700">
            Get Started Today
          </CardTitle>
          <CardDescription className="text-center text-blue-600">
            Fill out the form below to learn more about our AI education
            programs
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="childAge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Child's Age Range</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="5-8">5-8 years</SelectItem>
                        <SelectItem value="9-12">9-12 years</SelectItem>
                        <SelectItem value="13-16">13-16 years</SelectItem>
                        <SelectItem value="17+">17+ years</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="courseInterest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Interest</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="junior">
                          Junior AI Classes
                        </SelectItem>
                        <SelectItem value="senior">
                          Senior AI Classes
                        </SelectItem>
                        <SelectItem value="parent">
                          Navigating the AI World for Your Child
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Request Information
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center text-xs text-gray-500 pt-0">
          <p>
            Your information is secure and will never be shared with third
            parties.
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default LeadCaptureForm;
