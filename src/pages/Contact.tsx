import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import heroImg from "@/assets/images/about-hero.jpg";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(100).optional(),
  phone: z.string().trim().min(10, "Valid phone required").max(15),
  email: z.string().trim().email("Valid email required").max(255),
  projectType: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // WhatsApp redirect
    const msg = encodeURIComponent(
      `Hello ARIV BUILDCON PVT. LTD.!\n\nName: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nProject Type: ${form.projectType}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <PageBreadcrumb title="Contact Us" subtitle="Let's Build Something Great Together" bgImage={heroImg} />

      <section className="py-20">
        <div className="container mx-auto grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2">
            <AnimatedSection direction="left">
              <span className="text-accent font-semibold uppercase text-sm tracking-wider">Get In Touch</span>
              <h2 className="text-3xl font-heading font-bold text-primary mt-2 mb-6">
                Ready to Start Your Project?
              </h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Address", value: "Maharashtra, India" },
                  { icon: Phone, label: "Phone", value: "+91 XXXXXXXXXX" },
                  { icon: Mail, label: "Email", value: "office@arvibuildcon.com" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="gradient-accent w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <c.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{c.label}</p>
                      <p className="font-semibold text-primary">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatedSection direction="right">
              {submitted ? (
                <div className="glass-card-light p-12 text-center">
                  <div className="gradient-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for your enquiry. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card-light p-8 md:p-10 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { name: "name", label: "Full Name *", type: "text", placeholder: "Your name" },
                      { name: "company", label: "Company", type: "text", placeholder: "Company name" },
                      { name: "phone", label: "Phone *", type: "tel", placeholder: "+91..." },
                      { name: "email", label: "Email *", type: "email", placeholder: "your@email.com" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="text-sm font-semibold text-primary mb-1.5 block">{f.label}</label>
                        <input
                          name={f.name}
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.name as keyof typeof form]}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                        />
                        {errors[f.name] && <p className="text-destructive text-xs mt-1">{errors[f.name]}</p>}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-primary mb-1.5 block">Project Type</label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                    >
                      <option value="">Select project type</option>
                      <option value="Industrial Construction">Industrial Construction</option>
                      <option value="Commercial Building">Commercial Building</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="Machinery Rental">Machinery Rental</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-primary mb-1.5 block">Message *</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none resize-none"
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button type="submit" className="w-full gradient-accent py-3.5 rounded-lg font-bold text-accent-foreground shadow-md hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" /> Send Enquiry via WhatsApp
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;




