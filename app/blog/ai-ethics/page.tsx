'use client';

import Link from 'next/link';

export default function AIEthicsPage() {
  return (
    <div className="min-h-screen py-8 bg-pastel-gradient">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">AI Ethics: Our Approach to Responsible Visual AI</h1>

        <article className="prose prose-sm max-w-none bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-border/30 shadow-sm">
          <p className="text-muted-foreground mb-4">
            Published: April 30, 2025 | Author: SnapEnhance Team
          </p>

          <div className="mb-6 p-4 bg-white rounded-lg border border-border/50 shadow-sm">
            <h3 className="text-base font-medium mb-2">Key Takeaways</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>SnapEnhance is built on a foundation of ethical AI principles that prioritize user privacy and data security</li>
              <li>We implement transparency in all AI-powered features, clearly communicating capabilities and limitations</li>
              <li>Our approach to AI focuses on augmenting human creativity rather than replacing it</li>
              <li>We've established robust safeguards against misuse of our AI image generation capabilities</li>
              <li>Our ethical framework evolves alongside advancements in AI technology and industry standards</li>
            </ul>
          </div>

          <p>
            As artificial intelligence becomes increasingly integrated into creative tools, we believe it's essential to establish
            and maintain clear ethical guidelines. At SnapEnhance, our AI-powered features—particularly our Delta mode for image
            generation and our visual research assistant—are designed with a comprehensive ethical framework that prioritizes
            user empowerment, transparency, and responsible use.
          </p>

          <h2 className="text-lg font-medium mt-8 mb-4">Our Ethical AI Framework</h2>

          <p>
            Our approach to AI ethics is built on five core principles that guide all aspects of our AI implementation:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">1. Human-Centered Augmentation</h3>
              <p className="text-xs text-muted-foreground">
                We design AI features to enhance human creativity and productivity, not replace it. Our tools
                provide suggestions and automate repetitive tasks while keeping users in control of the creative process.
              </p>
            </div>

            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">2. Transparency</h3>
              <p className="text-xs text-muted-foreground">
                We clearly communicate when AI is being used, how it works, and what its limitations are. Users always
                know when they're interacting with AI-generated content or recommendations.
              </p>
            </div>

            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">3. Privacy & Data Security</h3>
              <p className="text-xs text-muted-foreground">
                We process data locally whenever possible and implement strict data minimization practices.
                We do not use user data to train our AI models and maintain transparent data handling policies.
              </p>
            </div>

            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">4. Fairness & Inclusion</h3>
              <p className="text-xs text-muted-foreground">
                We work to identify and mitigate biases in AI-generated content and ensure our tools serve diverse
                user needs across different cultures, languages, and visual preferences.
              </p>
            </div>

            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm col-span-1 md:col-span-2">
              <h3 className="text-sm font-medium mb-2">5. Responsible Innovation</h3>
              <p className="text-xs text-muted-foreground">
                We continuously evaluate the ethical implications of new AI capabilities before implementing them,
                maintaining a balance between innovation and responsible deployment.
              </p>
            </div>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Practical Implementation</h2>

          <p>
            These principles aren't just theoretical—they're embedded in the practical design and implementation of our AI features:
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">Delta Mode: Ethical Image Generation</h3>

          <p>
            Our Delta mode, which uses Google's Gemini API for image generation, incorporates several ethical safeguards:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              <strong>Content Filtering:</strong> We leverage Google's content safety systems and implement additional
              filters to prevent the generation of harmful, misleading, or inappropriate imagery.
            </li>
            <li>
              <strong>Attribution Clarity:</strong> Generated images are clearly labeled as AI-generated to maintain
              transparency about content origin.
            </li>
            <li>
              <strong>Prompt Engineering Guidelines:</strong> We provide users with guidelines for creating effective,
              ethical prompts that respect intellectual property and avoid harmful stereotypes.
            </li>
            <li>
              <strong>Fallback Mechanisms:</strong> When image generation fails or produces potentially problematic content,
              we provide clear error messages and alternative approaches rather than degraded or inappropriate results.
            </li>
          </ul>

          <div className="my-6 p-4 bg-blue-50 rounded-md border border-blue-100 shadow-sm">
            <h4 className="text-sm font-medium mb-2">Case Study: Ethical Prompt Engineering</h4>
            <p className="text-xs text-muted-foreground">
              When a user requests a background image of "people in an office," our system is designed to generate diverse
              representations rather than reinforcing stereotypes. We've fine-tuned our prompt engineering to encourage
              inclusive imagery that represents various demographics, work environments, and professional contexts.
            </p>
          </div>

          <h3 className="text-base font-medium mt-6 mb-2">Visual Research Assistant: Balanced Information</h3>

          <p>
            Our visual research feature, which provides design insights and recommendations, is designed with these ethical considerations:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              <strong>Balanced Perspectives:</strong> We structure prompts to encourage diverse viewpoints and avoid
              presenting a single perspective as definitive.
            </li>
            <li>
              <strong>Source Transparency:</strong> When providing design principles or trends, we acknowledge the
              limitations of AI-generated advice and encourage critical thinking.
            </li>
            <li>
              <strong>Contextual Awareness:</strong> Our system recognizes cultural and contextual factors in visual
              design, avoiding one-size-fits-all recommendations.
            </li>
          </ul>

          <h2 className="text-lg font-medium mt-8 mb-4">Addressing Common Ethical Challenges</h2>

          <h3 className="text-base font-medium mt-6 mb-2">1. Bias in Visual Representation</h3>

          <p>
            AI systems can inadvertently perpetuate or amplify biases present in their training data. We address this challenge through:
          </p>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-4 border border-border/30 shadow-sm">
{`// Example of our approach to mitigating bias in image generation
const userPrompt = "an office meeting";
const enhancedPrompt = \`Generate a detailed image of \${userPrompt}.
Ensure diverse representation and avoid stereotypical portrayals.
Create balanced, inclusive imagery that respects all cultures and identities.\`;`}
          </pre>

          <p>
            We continuously evaluate and refine our prompting techniques to reduce bias in generated imagery and design recommendations.
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">2. Intellectual Property Considerations</h3>

          <p>
            AI-generated content raises complex questions about intellectual property. Our approach includes:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Educating users about the appropriate use of AI-generated imagery</li>
            <li>Designing our system to create original visual content rather than mimicking specific artists or styles</li>
            <li>Providing clear terms of service regarding ownership and usage rights for AI-generated content</li>
            <li>Staying informed about evolving legal frameworks around AI-generated intellectual property</li>
          </ul>

          <h3 className="text-base font-medium mt-6 mb-2">3. Environmental Impact</h3>

          <p>
            AI systems, particularly large language and image generation models, can have significant computational requirements
            and environmental impacts. We mitigate this by:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Using efficient models appropriate to the task rather than defaulting to the largest available models</li>
            <li>Implementing caching strategies to reduce redundant API calls</li>
            <li>Optimizing our application to minimize unnecessary processing</li>
            <li>Partnering with API providers who are committed to carbon-neutral or carbon-negative operations</li>
          </ul>

          <h2 className="text-lg font-medium mt-8 mb-4">Our Ongoing Commitment</h2>

          <p>
            AI ethics is not a static field—it evolves alongside technological capabilities and societal understanding.
            Our commitment to ethical AI includes:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Regular ethical reviews of our AI features and their impacts</li>
            <li>Staying informed about emerging best practices and industry standards</li>
            <li>Soliciting and responding to user feedback about AI-related concerns</li>
            <li>Transparency about changes to our AI systems and ethical frameworks</li>
            <li>Collaboration with experts in AI ethics and responsible innovation</li>
          </ul>

          <div className="my-6 p-4 bg-white rounded-md border border-border/30 shadow-sm">
            <h3 className="text-sm font-medium mb-2">User Feedback Channels</h3>
            <p className="text-xs text-muted-foreground">
              We welcome user feedback on our AI features and ethical practices. You can share your thoughts and concerns through:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-xs text-muted-foreground">
              <li>Our <Link href="/contact" className="text-primary hover:underline">contact form</Link></li>
              <li>Direct email to ethics@snapenhance.com</li>
              <li>In-app feedback mechanisms</li>
            </ul>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Conclusion: The Massive Truth About AI Ethics</h2>

          <p>
            The "massive truth" about AI ethics is that it requires constant vigilance, humility, and adaptation.
            No ethical framework is perfect, and no implementation is flawless. What matters is the commitment to
            continuous improvement and responsible innovation.
          </p>

          <p>
            At SnapEnhance, we believe that AI tools should empower human creativity, not replace it; enhance human
            decision-making, not obscure it; and expand human potential, not limit it. By maintaining this human-centered
            approach and adhering to our ethical principles, we aim to create AI-powered features that genuinely enhance
            the creative process while respecting fundamental values of fairness, transparency, and responsibility.
          </p>

          <p>
            As we continue to develop and refine our AI capabilities, we invite our users to join us in this ongoing
            conversation about the ethical use of artificial intelligence in creative tools.
          </p>

          <div className="border-t border-border/20 mt-8 pt-4">
            <p className="text-sm text-muted-foreground/80">
              For more information about how we use AI in SnapEnhance, please visit our <Link href="/ai-ml" className="text-primary hover:underline">AI/ML Information</Link> page.
            </p>
          </div>
        </article>

        <div className="mt-12 pt-4 border-t border-border/20 text-xs text-muted-foreground/60 text-center">
          <p>Last updated: April 30, 2025</p>
        </div>
      </div>
    </div>
  );
}
