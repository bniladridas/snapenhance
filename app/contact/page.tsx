'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Check } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validate form
    if (!formState.name || !formState.email || !formState.message) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      // In a real application, you would send this data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Reset form and show success message
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(true);
    } catch (err) {
      setError('There was an error submitting your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-8 bg-pastel-gradient">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-border/30 shadow-sm">
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h3 className="text-base font-medium mb-2">Message Sent!</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Thank you for contacting us. We'll get back to you as soon as possible.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="What is your message about?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={6}
                    required
                  />
                </div>

                {error && (
                  <div className="text-sm text-red-500 p-2 bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/50 rounded">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-border/30 shadow-sm">
            <div>
              <h3 className="text-base font-medium mb-2">Contact Information</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>
                  For general inquiries, feature requests, or support, please use the contact form.
                </p>
                <p>
                  For business inquiries, please email:
                  <a href="mailto:business@snapenhance.com" className="block text-primary hover:underline mt-1">
                    business@snapenhance.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-medium mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond to all inquiries within 1-2 business days.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium mb-2">Legal Inquiries</h3>
              <p className="text-sm text-muted-foreground">
                For legal matters, please visit our{' '}
                <a href="/legal" className="text-primary hover:underline">
                  Legal page
                </a>
                {' '}or{' '}
                <a href="/license" className="text-primary hover:underline">
                  License information
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
