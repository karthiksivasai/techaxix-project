import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  HelpCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../components/PhoneInputCustom.css";

// Country interface for phone input
interface Country {
  countryCode: string;
  dialCode: string;
  format: string;
  name: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [phoneValid, setPhoneValid] = useState(true);

  // Initialize EmailJS
  useEffect(() => {
    // You can also set this in your .env file as VITE_EMAILJS_PUBLIC_KEY
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY");
  }, []);

  const subjectOptions = [
    "General Inquiry",
    "Digital Transformation Services",
    "Oracle Fusion Cloud / EBS Services",
    "Custom Cloud Solutions",
    "Mobile Application Development",
    "Staffing / Resource Augmentation",
    "Project Management Consultancy",
    "Careers / Job Opportunities",
    "Support / Assistance",
  ];

  const handleInputChange = (
    field: keyof FormData,
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validatePhone = (phone: string, country: Country) => {
    if (!phone) {
      setPhoneError("");
      setPhoneValid(false);
      return true; // Phone is optional
    }

    // The phone value from react-phone-input-2 includes the country code
    // We need to get the actual phone number without the country code
    let phoneWithoutCode = phone;

    // Remove the country code if it's at the beginning
    if (phone.startsWith(`+${country.dialCode}`)) {
      phoneWithoutCode = phone.substring(country.dialCode.length + 1); // +1 for the '+' symbol
    } else if (phone.startsWith(country.dialCode)) {
      phoneWithoutCode = phone.substring(country.dialCode.length);
    }

    // Country-specific validation rules
    const validationRules: {
      [key: string]: { min: number; max: number; message: string };
    } = {
      in: {
        min: 10,
        max: 10,
        message: "Please enter a valid 10-digit phone number for India.",
      },
      us: {
        min: 10,
        max: 10,
        message:
          "Please enter a valid 10-digit phone number for United States.",
      },
      gb: {
        min: 10,
        max: 11,
        message:
          "Please enter a valid 10-11 digit phone number for United Kingdom.",
      },
      ca: {
        min: 10,
        max: 10,
        message: "Please enter a valid 10-digit phone number for Canada.",
      },
      au: {
        min: 9,
        max: 9,
        message: "Please enter a valid 9-digit phone number for Australia.",
      },
      de: {
        min: 10,
        max: 12,
        message: "Please enter a valid 10-12 digit phone number for Germany.",
      },
      fr: {
        min: 10,
        max: 10,
        message: "Please enter a valid 10-digit phone number for France.",
      },
      jp: {
        min: 10,
        max: 11,
        message: "Please enter a valid 10-11 digit phone number for Japan.",
      },
      cn: {
        min: 11,
        max: 11,
        message: "Please enter a valid 11-digit phone number for China.",
      },
      br: {
        min: 10,
        max: 11,
        message: "Please enter a valid 10-11 digit phone number for Brazil.",
      },
    };

    const countryCode = country.countryCode.toLowerCase();
    const rule = validationRules[countryCode] || {
      min: 8,
      max: 15,
      message: "Please enter a valid phone number for the selected country.",
    };

    // Debug logging to help troubleshoot
    console.log("Phone validation:", {
      fullPhone: phone,
      countryCode: country.countryCode,
      dialCode: country.dialCode,
      phoneWithoutCode: phoneWithoutCode,
      length: phoneWithoutCode.length,
      rule: rule,
      expectedLength: `${rule.min}-${rule.max} digits`,
    });

    if (
      phoneWithoutCode.length < rule.min ||
      phoneWithoutCode.length > rule.max
    ) {
      setPhoneError(rule.message);
      setPhoneValid(false);
      return false;
    }

    setPhoneError("");
    setPhoneValid(true);
    return true;
  };

  const handlePhoneChange = (phone: string, country: Country) => {
    setFormData((prev) => ({
      ...prev,
      phone: phone,
    }));
    validatePhone(phone, country);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneValid && formData.phone) {
      toast({
        title: "Invalid Phone Number",
        description:
          "Please enter a valid phone number for the selected country.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        {
          from_name: formData.fullName,
          from_email: formData.email,
          from_phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: "admin@techaxisconsulting.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24-48 hours.",
        });

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickContactActions = [
    {
      icon: Mail,
      label: "Email Us",
      action: () =>
        window.open("mailto:admin@techaxisconsulting.com", "_blank"),
      description: "Send us an email directly",
    },
    {
      icon: Phone,
      label: "Call Us",
      action: () => window.open("tel:+919937033526", "_blank"),
      description: "Call us directly",
    },
  ];

  const faqItems = [
    {
      question: "How soon can I expect a reply?",
      answer: "Within 1–2 business days.",
    },
    {
      question: "Can I request a consultation call?",
      answer: "Yes, please select your service of interest in the form.",
    },
    {
      question: "Do you provide international support?",
      answer: "Yes, we serve clients globally.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Whether you're exploring digital
            transformation, Oracle ERP services, Data, Automation & AI services or need skilled professionals for
            your project, our team is here to help.
          </p>
        </div>
      </section>

      {/* Quick Contact Shortcuts */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {quickContactActions.map((action, index) => (
              <Button
                key={index}
                variant="brand-outline"
                size="lg"
                onClick={action.action}
                className="flex items-center gap-3 px-6 py-3 hover:bg-brand-blue-light hover:text-text-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <action.icon className="h-5 w-5" />
                <span className="font-semibold">{action.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form - Left Side */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Send Us a Message
                </h3>
                <Card className="shadow-card-custom border-border/50 bg-card hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="fullName"
                          className="text-sm font-medium text-foreground"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                          required
                          className="form-input-dark"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                          className="form-input-dark"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-sm font-medium text-foreground"
                        >
                          Phone Number{" "}
                          <span className="text-muted-foreground">
                            (Optional)
                          </span>
                        </Label>
                        <PhoneInput
                          country={"in"}
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          enableSearch={true}
                          searchPlaceholder="Search country..."
                          placeholder="Enter phone number"
                          autoFormat={true}
                          preferredCountries={["in", "us", "gb", "ca", "au"]}
                          inputProps={{
                            required: false,
                            name: "phone",
                            id: "phone",
                          }}
                        />
                        {phoneError && (
                          <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {phoneError}
                          </p>
                        )}
                        {phoneValid && formData.phone && (
                          <p className="text-sm text-green-500 mt-1 flex items-center gap-1">
                            <CheckCircle className="h-4 w-4" />
                            Valid phone number
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="subject"
                          className="text-sm font-medium text-foreground"
                        >
                          Subject <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={formData.subject}
                          onValueChange={(value) =>
                            handleInputChange("subject", value)
                          }
                          required
                        >
                          <SelectTrigger className="form-input-dark">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            {subjectOptions.map((option, index) => (
                              <SelectItem key={index} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-sm font-medium text-foreground"
                        >
                          Message <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          rows={6}
                          placeholder="Tell us about your project or requirements..."
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          required
                          className="form-input-dark"
                        />
                      </div>

                      <div className="text-center">
                        <Button
                          variant="brand"
                          size="lg"
                          type="submit"
                          disabled={isSubmitting}
                          className="px-8 py-3 text-lg font-semibold shadow-2xl hover:shadow-brand-blue-light/30 transform hover:scale-105 transition-all duration-300"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Helpful Information Note */}
                <div className="mt-8 p-6 bg-secondary/20 rounded-lg border border-border/50 hover:bg-secondary/30 transition-colors duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        <strong>
                          We typically respond within 24–48 hours.
                        </strong>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Your details are safe with us – all inquiries are
                        handled confidentially.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        For urgent matters, please call us directly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information - Right Side */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Contact Information
                </h3>

                {/* Company Contact Card */}
                <Card className="hover:shadow-card-custom hover:shadow-2xl transition-all duration-300 border-border/50 bg-card transform hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-6">
                      Techaxis Consulting Private Limited
                    </h4>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Mail className="h-5 w-5 text-brand-blue-light mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Email
                          </p>
                          <a
                            href="mailto:admin@techaxisconsulting.com"
                            className="text-foreground hover:text-brand-blue-light transition-colors duration-200 font-medium"
                          >
                            admin@techaxisconsulting.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Phone className="h-5 w-5 text-brand-blue-light mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Phone
                          </p>
                          <a
                            href="tel:+919937033526"
                            className="text-foreground hover:text-brand-blue-light transition-colors duration-200 font-medium"
                          >
                            +91 9937033526
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours Card */}
                <Card className="hover:shadow-card-custom hover:shadow-2xl transition-all duration-300 border-border/50 bg-card transform hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-brand-blue-light" />
                      Business Hours
                    </h4>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                          Monday – Friday
                        </span>
                        <span className="font-medium text-foreground">
                          9:00 AM – 6:00 PM (IST)
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                          Saturday – Sunday
                        </span>
                        <span className="font-medium text-foreground">
                          Closed
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ Section */}
                <Card className="hover:shadow-card-custom hover:shadow-2xl transition-all duration-300 border-border/50 bg-card transform hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-brand-blue-light" />
                      Frequently Asked Questions
                    </h4>

                    <div className="space-y-4">
                      {faqItems.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <p className="font-medium text-foreground text-sm">
                            {item.question}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
