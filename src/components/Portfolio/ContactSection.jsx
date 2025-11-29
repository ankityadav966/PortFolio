import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Card } from "@/Components/ui/card";
import { Send, Paperclip } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dummy submit handler (no API, just toast)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Your message was sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        budget: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full">
      {/* Section Title */}
      <div className="inline-block mb-8">
        <div className="text-emerald-500 uppercase tracking-wider text-sm font-medium mb-4">
          Contact
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
        Let's Work Together!
      </h2>

      {/* Email Text */}
      <div className="text-3xl text-emerald-500 font-medium mb-16">
        ankityadav941318@gmail.com
      </div>

      {/* Form Card */}
      <Card className="bg-[#1a1a1a] border-gray-800 p-8 max-w-3xl">
        <p className="text-gray-400 mb-8">
          * Marked fields are required to fill.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              placeholder="Full Name *"
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="bg-[#0a0a0a] border-gray-700 focus:border-emerald-500 h-14"
            />

            <Input
              type="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-[#0a0a0a] border-gray-700 focus:border-emerald-500 h-14"
            />
          </div>

          {/* Phone + Subject */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="bg-[#0a0a0a] border-gray-700 focus:border-emerald-500 h-14"
            />

            <Select
              value={formData.subject}
              onValueChange={(value) =>
                setFormData({ ...formData, subject: value })
              }
              required
            >
              <SelectTrigger className="bg-[#0a0a0a] border-gray-700 focus:border-emerald-500 h-14">
                <SelectValue placeholder="Subject *" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="website-design">Website Design</SelectItem>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="seo-marketing">SEO/Marketing</SelectItem>
                <SelectItem value="consultation">Consultation</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Budget */}
          <Input
            placeholder="Your Budget (optional)"
            value={formData.budget}
            onChange={(e) =>
              setFormData({ ...formData, budget: e.target.value })
            }
            className="bg-[#0a0a0a] border-gray-700 focus:border-emerald-500 h-14"
          />

          {/* Message */}
          <Textarea
            placeholder="Message"
            rows={6}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="bg-[#0a0a0a] border-gray-700 focus:border-emerald-500 resize-none"
          />

          {/* Attachment Button */}
          <div className="flex items-center gap-4">
            <Button
              type="button"
              variant="outline"
              className="border-gray-700 hover:border-emerald-500"
            >
              <Paperclip className="w-4 h-4 mr-2" />
              Add an attachment
            </Button>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white h-14 text-lg"
          >
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </Button>
        </form>
      </Card>
    </div>
  );
}
