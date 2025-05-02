'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Check } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function FeedbackPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    feedbackType: 'general',
    message: '',
    rating: '',
    platform: 'snapenhanceai'
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

  const handleRadioChange = (name: string, value: string) => {
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
        feedbackType: 'general',
        message: '',
        rating: '',
        platform: 'snapenhanceai'
      });
      setIsSubmitted(true);
    } catch (err) {
      setError('There was an error submitting your feedback. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-8 bg-pastel-gradient">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">SnapEnhance AI Feedback</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-border/30 shadow-sm">
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h3 className="text-base font-medium mb-2">Feedback Submitted!</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Thank you for your feedback on SnapEnhance AI. Your input helps us improve the platform for everyone.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Feedback
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
                  <label className="text-sm font-medium">
                    Feedback Type <span className="text-red-500">*</span>
                  </label>
                  <RadioGroup
                    value={formState.feedbackType}
                    onValueChange={(value) => handleRadioChange('feedbackType', value)}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general" id="general" />
                      <Label htmlFor="general">General Feedback</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bug" id="bug" />
                      <Label htmlFor="bug">Bug Report</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="feature" id="feature" />
                      <Label htmlFor="feature">Feature Request</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="model" id="model" />
                      <Label htmlFor="model">Model Performance</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    How would you rate your experience with SnapEnhance AI?
                  </label>
                  <RadioGroup
                    value={formState.rating}
                    onValueChange={(value) => handleRadioChange('rating', value)}
                    className="flex space-x-4"
                  >
                    <div className="flex flex-col items-center">
                      <RadioGroupItem value="1" id="r1" />
                      <Label htmlFor="r1" className="text-xs mt-1">1</Label>
                    </div>
                    <div className="flex flex-col items-center">
                      <RadioGroupItem value="2" id="r2" />
                      <Label htmlFor="r2" className="text-xs mt-1">2</Label>
                    </div>
                    <div className="flex flex-col items-center">
                      <RadioGroupItem value="3" id="r3" />
                      <Label htmlFor="r3" className="text-xs mt-1">3</Label>
                    </div>
                    <div className="flex flex-col items-center">
                      <RadioGroupItem value="4" id="r4" />
                      <Label htmlFor="r4" className="text-xs mt-1">4</Label>
                    </div>
                    <div className="flex flex-col items-center">
                      <RadioGroupItem value="5" id="r5" />
                      <Label htmlFor="r5" className="text-xs mt-1">5</Label>
                    </div>
                  </RadioGroup>
                  <div className="flex justify-between text-xs text-muted-foreground pt-1">
                    <span>Poor</span>
                    <span>Excellent</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Feedback <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Please share your thoughts, suggestions, or report issues with SnapEnhance AI..."
                    rows={6}
                    required
                  />
                </div>

                {error && (
                  <div className="text-sm text-red-500 p-2 bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/50 rounded">
                    {error}
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Submitting...</span>
                        <Send className="h-4 w-4 animate-pulse" />
                      </>
                    ) : (
                      <>
                        <span className="mr-2">Submit Feedback</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div className="space-y-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-border/30 shadow-sm">
            <div>
              <h3 className="text-base font-medium mb-2">About Your Feedback</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>
                  Your feedback is invaluable in helping us improve SnapEnhance AI. We carefully review all submissions to prioritize enhancements and fix issues.
                </p>
                <p>
                  This form is specifically for feedback on the <a href="https://snapenhanceai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SnapEnhance AI platform</a>.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-medium mb-2">What Happens Next</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>We review all feedback within 1-2 business days</li>
                <li>Bug reports are prioritized for immediate investigation</li>
                <li>Feature requests are evaluated for future releases</li>
                <li>We may contact you for additional information if needed</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium mb-2">Other Ways to Reach Us</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>
                  For urgent issues or direct communication:
                </p>
                <p>
                  <a href="mailto:ai-feedback@snapenhance.com" className="block text-primary hover:underline">
                    ai-feedback@snapenhance.com
                  </a>
                </p>
                <p className="pt-2">
                  For general inquiries, please visit our <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-border/20 text-xs text-muted-foreground/60 text-center">
          <p>Last updated: May 3, 2025</p>
        </div>
      </div>
    </div>
  );
}
