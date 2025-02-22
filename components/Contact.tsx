"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { socials } from "@/lib/socials";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-16 px-24 pb-16 bg-zinc-800" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Socials Section */}
        <div className="space-y-4 pr-16">
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            Connect With Me
          </h2>
          <div className="space-y-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-white/50 dark:bg-zinc-900/50 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                    <div>
                      <h3 className="text-base font-medium text-zinc-800 dark:text-zinc-200">
                        {social.name}
                      </h3>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        @{social.username}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[8px] bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-200 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700 rounded-full transform -translate-x-1/2" />

        {/* Contact Form Section */}
        <Card className="bg-white/80 dark:bg-zinc-900/80 shadow-sm ml-16">
          <CardHeader className="pb-2">
            <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/50 dark:bg-zinc-800/50 focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-600"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/50 dark:bg-zinc-800/50 focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-600"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[120px] bg-white/50 dark:bg-zinc-800/50 focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-600 resize-none"
              />
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-zinc-800 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all duration-200 flex items-center justify-center gap-2"
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    {mounted && <Send className="w-4 h-4" />}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
