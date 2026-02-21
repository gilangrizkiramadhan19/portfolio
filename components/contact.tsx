'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gilangrizkiramadhan1906@gmail.com',
      link: 'mailto:gilangrizkiramadhan1906@gmail.com',
      color: 'text-blue-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/gilangrizkiramadhan',
      link: 'https://linkedin.com/in/gilangrizkiramadhan',
      color: 'text-blue-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/gilangrizkiramadhan19',
      link: 'https://github.com/gilangrizkiramadhan19',
      color: 'text-gray-400',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+62 821 8241 2099',
      link: 'https://wa.me/6282182412099',
      color: 'text-green-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. Drop me a message or connect through social media.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background border border-border rounded-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <label className="block text-foreground font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-foreground font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-foreground font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center font-semibold"
                >
                  ✓ Message sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-foreground/70 leading-relaxed mb-8">
              Connect with me through various channels. I'm responsive and usually reply within 24 hours. Whether it's a technical discussion or a new opportunity, I'm always interested in hearing from fellow developers and potential collaborators.
            </p>

            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-5 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors group"
                >
                  <div className={`p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors`}>
                    <Icon className={`${contact.color}`} size={28} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{contact.label}</p>
                    <p className="text-foreground/60 group-hover:text-primary transition-colors">{contact.value}</p>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl"
            >
              <p className="text-foreground font-semibold mb-3">Available for Collaboration</p>
              <p className="text-foreground/70">
                I'm open to freelance projects, full-time opportunities, and interesting collaborations. Let's work together to build something amazing!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
