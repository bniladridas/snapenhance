'use client';

import { TimeSyncDisplay } from '@/components/time-sync-display';
import Link from 'next/link';

export default function AIMLPage() {
  return (
    <div className="min-h-screen py-8 bg-pastel-gradient">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">AI/ML Information</h1>

        <div className="space-y-6 text-sm">
          <section className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 shadow-sm">
            <h2 className="text-base font-medium mb-2">AI/ML Features in SnapEnhance</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                SnapEnhance incorporates artificial intelligence and machine learning technologies to enhance your experience.
                This page provides information about how we use these technologies and the third-party AI services we integrate with.
              </p>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">1. Visual Research Assistant</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Our visual research feature uses <strong>Google's Gemini API</strong> to provide insights and recommendations about visual design.</li>
                  <li>This feature helps you research design principles, color theory, and visual composition to improve your screenshots.</li>
                  <li>The AI model analyzes your text queries and generates relevant design advice and recommendations.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">2. AI Image Generation (Delta Mode)</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Our new Delta mode uses <strong>Google's Gemini API</strong> to generate custom background images from text prompts.</li>
                  <li>This feature creates unique, contextually appropriate backgrounds for your screenshots.</li>
                  <li>The AI model interprets your text descriptions and generates images that match your requirements.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">3. Background Style Selection</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Our system uses <strong>image analysis algorithms</strong> to suggest the most appropriate background styles for your screenshots.</li>
                  <li>This feature examines the content and context of your images to recommend complementary backgrounds.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">4. Automatic Time Zone Detection</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Our system uses intelligent time zone detection to automatically identify your location's time zone.</li>
                  <li>This feature enhances the time synchronization display and ensures accurate time representation.</li>
                  <li>The system respects your privacy by allowing you to manually select your preferred time zone.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">5. SnapEnhance AI Platform</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Our new <a href="https://snapenhanceai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SnapEnhance AI platform</a> provides a powerful text-based AI assistant experience.</li>
                  <li>The platform leverages advanced language models including Llama 3.3 70B and DeepSeek R1 for sophisticated language capabilities.</li>
                  <li>Features include zero-shot function calling, real-time data integration, and enhanced markdown formatting.</li>
                  <li>Visit <a href="https://snapenhanceai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://snapenhanceai.vercel.app/</a> to experience it firsthand.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">6. Future AI Enhancements</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>We are continuously working on new AI-powered features to improve screenshot enhancement capabilities.</li>
                  <li>Future updates may include automatic text recognition, content-aware cropping, and more sophisticated background generation.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 shadow-sm">
            <h2 className="text-base font-medium mb-2">Third-Party AI Services</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">Google Gemini API</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Purpose:</strong> Powers our visual research assistant and Delta mode image generation features</li>
                  <li><strong>Models used:</strong>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>For text generation: gemini-1.5-pro, gemini-1.5-flash, gemini-2.5-flash-preview-04-17</li>
                      <li>For image generation: gemini-2.0-flash-exp-image-generation</li>
                    </ul>
                  </li>
                  <li><strong>Data handling:</strong> Your queries and prompts are sent to Google's API for processing. We do not store the content of your queries or Google's responses beyond the current session.</li>
                  <li><strong>Terms of Service:</strong> <Link href="https://ai.google.dev/terms" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google AI Terms of Service</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">SnapEnhance AI Platform Models</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Purpose:</strong> Powers our <a href="https://snapenhanceai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SnapEnhance AI platform</a> for text-based AI assistance</li>
                  <li><strong>Models used:</strong>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Llama 3.3 70B - Meta's state-of-the-art large language model for core conversational capabilities and zero-shot function calling</li>
                      <li>DeepSeek R1 Distill Llama 70B - Specialized model optimized for technical content, mathematical problem-solving, and complex reasoning tasks</li>
                    </ul>
                  </li>
                  <li><strong>Data handling:</strong> Your queries are processed securely with strict data minimization practices. We do not store conversation content beyond the current session.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 shadow-sm">
            <h2 className="text-base font-medium mb-2">Data Usage and Privacy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We are committed to using AI technologies responsibly and transparently. Here's how we handle your data:
              </p>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">Data Processing</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>When you use our visual research feature, your text queries are processed by Google's Gemini API.</li>
                  <li>When you use Delta mode, your image generation prompts are processed by Google's Gemini API.</li>
                  <li>When you use <a href="https://snapenhanceai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SnapEnhance AI</a>, your queries are processed by Llama 3.3 70B or DeepSeek R1 models.</li>
                  <li>Your screenshots and images are processed locally on your device whenever possible.</li>
                  <li>We do not use your data to train our own AI models.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">Data Retention</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>We do not store the content of your visual research queries or the responses beyond your current session.</li>
                  <li>We do not store your image generation prompts or the generated images beyond your current session.</li>
                  <li>We do not store the content of your <a href="https://snapenhanceai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SnapEnhance AI</a> conversations beyond your current session.</li>
                  <li>Your enhanced screenshots and AI-generated images are stored only on your device unless you explicitly choose to share them.</li>
                </ul>
              </div>

              <p>
                For more detailed information about how we handle your data, please refer to our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-base font-medium mb-2">AI Ethics and Responsible Use</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We are committed to the ethical use of AI technologies and follow these principles:
              </p>

              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Transparency:</strong> We clearly disclose when and how AI is used in our application.</li>
                <li><strong>User control:</strong> You can choose whether to use AI-powered features.</li>
                <li><strong>Privacy:</strong> We minimize data collection and processing to what's necessary for the feature to function.</li>
                <li><strong>Fairness:</strong> We strive to ensure our AI features work equally well for all users.</li>
                <li><strong>Accountability:</strong> We regularly review and update our AI systems to address any issues or biases.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-base font-medium mb-2">Limitations of AI Features</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                While we strive to provide high-quality AI-powered features, it's important to understand their limitations:
              </p>

              <ul className="list-disc pl-5 space-y-1">
                <li>AI-generated content may not always be accurate or appropriate for your specific needs.</li>
                <li>The visual research assistant provides general design advice that may need to be adapted to your specific context.</li>
                <li>AI models may reflect biases present in their training data, though we work to minimize this.</li>
                <li>AI features may occasionally be unavailable due to service interruptions from our third-party providers.</li>
              </ul>

              <p>
                We recommend using AI-generated content as a starting point or inspiration rather than as definitive guidance.
              </p>
            </div>
          </section>

          <section className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 shadow-sm">
            <h2 className="text-base font-medium mb-2">Feedback and Reporting</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We value your feedback on our AI features. If you encounter any issues, such as:
              </p>

              <ul className="list-disc pl-5 space-y-1">
                <li>Inaccurate or inappropriate AI-generated content</li>
                <li>Potential biases in AI responses</li>
                <li>Technical problems with AI features</li>
                <li>Privacy concerns related to AI functionality</li>
              </ul>

              <p>
                Please <a href="/feedback" className="text-primary hover:underline">submit feedback</a> or contact us through our support channels. Your feedback helps us improve our AI features for everyone.
              </p>

              <p className="mt-2">
                For specific feedback on the <a href="https://snapenhanceai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SnapEnhance AI platform</a>, please use our dedicated <a href="/feedback" className="text-primary hover:underline">feedback form</a>.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-4 border-t border-border/20 text-xs text-muted-foreground/60 text-center">
          <div className="flex justify-center mb-2">
            <TimeSyncDisplay />
          </div>
          <p>Last updated: April 28, 2025</p>
        </div>
      </div>
    </div>
  );
}
