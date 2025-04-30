'use client';

import Link from 'next/link';

export default function VoiceInterfacePhilosophyPage() {
  return (
    <div className="min-h-screen py-8 bg-pastel-gradient">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">Voice Interface & Philosophy: New Features in SnapEnhance AI</h1>

        <article className="prose prose-sm max-w-none bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-border/30 shadow-sm">
          <p className="text-muted-foreground mb-4">
            Published: April 30, 2025 | Author: SnapEnhance Team
          </p>

          <div className="mb-6 p-4 bg-white rounded-lg border border-border/50 shadow-sm">
            <h3 className="text-base font-medium mb-2">Key Takeaways</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>SnapEnhance AI now features a sophisticated voice interface with real-time transcription</li>
              <li>Voice commands provide an intuitive, hands-free way to interact with the platform</li>
              <li>Our new Philosophy section outlines our clarity-over-complexity approach</li>
              <li>Response generation has been enhanced to prioritize clarity and accessibility</li>
              <li>Delightful microinteractions and humorous tooltips create an engaging user experience</li>
            </ul>
          </div>

          <p>
            We're excited to announce a significant expansion of SnapEnhance AI's capabilities with the introduction of our
            voice interface and clarity-over-complexity philosophy. These updates represent our commitment to making AI more
            accessible, intuitive, and aligned with our core principles of clarity and user-centered design.
          </p>

          <h2 className="text-lg font-medium mt-8 mb-4">Voice Interface: A New Way to Interact</h2>

          <p>
            Our new voice interface transforms how you interact with SnapEnhance AI. Instead of typing queries, you can now
            speak naturally to the system, making the experience more intuitive and accessible for everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">Core Voice Features</h3>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                <li>Voice input via microphone button</li>
                <li>Real-time voice transcription</li>
                <li>Visual feedback during recording</li>
                <li>Toast notifications for voice status</li>
                <li>Continuous listening mode</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">Advanced Voice UI</h3>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                <li>Full-screen voice search interface</li>
                <li>Dynamic voice visualization with animated waves</li>
                <li>Voice command suggestions</li>
                <li>Dedicated submit and cancel buttons</li>
                <li>Enhanced mobile experience</li>
              </ul>
            </div>
          </div>

          <h3 className="text-base font-medium mt-6 mb-2">How to Use Voice Input</h3>

          <p>
            Using the voice interface is simple and intuitive:
          </p>

          <ol className="list-decimal pl-5 space-y-2 mt-2">
            <li>
              <strong>Activate Voice Input:</strong> Click the microphone button located in the input bar. On mobile devices,
              you'll find it prominently displayed for easy access.
            </li>
            <li>
              <strong>Speak Your Query:</strong> When the full-screen voice interface appears with animated waves, speak your
              question or command clearly. You'll see your words transcribed in real-time.
            </li>
            <li>
              <strong>Submit or Cancel:</strong> When you've finished speaking, click the submit button to send your query,
              or the cancel button if you want to start over.
            </li>
            <li>
              <strong>Review Response:</strong> SnapEnhance AI will process your voice input just like a typed query, providing
              a clear, well-formatted response.
            </li>
          </ol>

          <div className="my-6 p-4 bg-blue-50 rounded-md border border-blue-100 shadow-sm">
            <h4 className="text-sm font-medium mb-2">Voice Command Examples</h4>
            <p className="text-xs text-muted-foreground mb-2">
              Try these voice commands to get started:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
              <li>"What's the weather in Tokyo right now?"</li>
              <li>"Tell me about quantum computing in simple terms."</li>
              <li>"What time is it in London?"</li>
              <li>"Search for information about renewable energy."</li>
              <li>"Solve this math problem: what is the square root of 144?"</li>
            </ul>
          </div>

          <h3 className="text-base font-medium mt-6 mb-2">Accessibility Benefits</h3>

          <p>
            The voice interface significantly improves accessibility for various user groups:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              <strong>Users with Motor Limitations:</strong> Provides an alternative input method that doesn't require typing.
            </li>
            <li>
              <strong>Mobile Users:</strong> Offers a more convenient way to input queries on smaller screens.
            </li>
            <li>
              <strong>Multitasking Scenarios:</strong> Enables hands-free interaction when users are engaged in other activities.
            </li>
            <li>
              <strong>Users with Dyslexia:</strong> Removes potential barriers related to spelling and typing.
            </li>
            <li>
              <strong>Vision-Impaired Users:</strong> Works seamlessly with screen readers and provides audio feedback.
            </li>
          </ul>

          <h3 className="text-base font-medium mt-6 mb-2">Delightful Microinteractions</h3>

          <p>
            We've added humorous tooltips and delightful microinteractions to make the voice interface not just
            functional, but enjoyable to use:
          </p>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-4 border border-border/30 shadow-sm">
{`// Examples of humorous microphone tooltips
const microphoneTooltips = [
  "I'm all ears! Literally just ears.",
  "Speak now or forever hold your query.",
  "Voice activated. No yelling required.",
  "Whisper sweet questions to me.",
  "Go ahead, I'm listening better than your ex.",
  "Speak friend and enter... your query.",
  "My voice recognition is better than my dance moves.",
  "Talk to me like one of your French AIs.",
  "I promise I'm not recording this for my podcast."
];

// Randomly select a tooltip when hovering over the microphone
const getRandomTooltip = () => {
  const randomIndex = Math.floor(Math.random() * microphoneTooltips.length);
  return microphoneTooltips[randomIndex];
};`}
          </pre>

          <p>
            These microinteractions create moments of delight that enhance the overall user experience, making interactions with
            SnapEnhance AI more engaging and memorable.
          </p>

          <h2 className="text-lg font-medium mt-8 mb-4">Philosophy: Clarity Over Complexity</h2>

          <p>
            Our new Philosophy section implements our clarity-over-complexity approach throughout the platform.
            This represents a fundamental aspect of how we think about AI and its role in communication.
          </p>

          <div className="my-6 p-4 bg-white rounded-lg border border-border/50 shadow-sm">
            <h3 className="text-sm font-medium mb-2">Core Philosophical Principles</h3>
            <ul className="list-disc pl-5 space-y-3 text-sm">
              <li>
                <strong>Clarity Over Complexity:</strong> <span className="text-muted-foreground">We prioritize clear, understandable communication over unnecessarily complex language. AI should make complex ideas more accessible, not obscure them behind jargon or verbosity.</span>
              </li>
              <li>
                <strong>Anti-Intellectualization:</strong> <span className="text-muted-foreground">We avoid using complex terminology when simpler language would suffice. Our goal is to democratize access to information, not to create barriers through unnecessarily academic language.</span>
              </li>
              <li>
                <strong>User-Centered Design:</strong> <span className="text-muted-foreground">Every feature and interaction is designed with the user's needs and experience as the primary consideration. Technology should adapt to humans, not the other way around.</span>
              </li>
              <li>
                <strong>Accessible Intelligence:</strong> <span className="text-muted-foreground">Advanced AI capabilities should be accessible to everyone, regardless of technical expertise. We design interfaces and responses that make sophisticated AI approachable.</span>
              </li>
            </ul>
          </div>

          <h3 className="text-base font-medium mt-6 mb-2">Implementation in Response Generation</h3>

          <p>
            These philosophical principles aren't just theoretical—they're embedded in how SnapEnhance AI generates responses:
          </p>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-4 border border-border/30 shadow-sm">
{`// Example of system prompt enhancement for clarity
const enhancedSystemPrompt = \`
You are SnapEnhance AI, a helpful assistant that prioritizes clarity over complexity.
When responding to queries:

1. Use clear, straightforward language that's accessible to a general audience
2. Avoid unnecessary jargon, and when technical terms are needed, explain them
3. Break down complex concepts into simpler components
4. Use examples and analogies to illustrate abstract ideas
5. Prioritize being understood over sounding sophisticated
6. Structure responses with clear headings and bullet points when appropriate
7. Aim for the reading level of a motivated high school student

Remember: Your goal is to make information accessible, not to demonstrate your vocabulary.
\`;`}
          </pre>

          <p>
            This approach ensures that responses are not only accurate but genuinely helpful and accessible to users with
            varying levels of expertise.
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">The Philosophy Section</h3>

          <p>
            We've added a dedicated Philosophy section to the Resources menu. This section provides:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>A detailed explanation of our clarity-over-complexity approach</li>
            <li>Information about our voice interface implementation philosophy</li>
            <li>Documentation of our core principles and commitments</li>
            <li>Examples of how these principles manifest in different aspects of the platform</li>
            <li>Resources for further exploration of these ideas</li>
          </ul>

          <p>
            We encourage all users to explore this section to better understand the thinking behind SnapEnhance AI's design
            and functionality.
          </p>

          <div className="my-6 p-4 bg-blue-50 rounded-md border border-blue-100 shadow-sm">
            <h4 className="text-sm font-medium mb-2">Case Study: Explaining Quantum Computing</h4>
            <p className="text-xs text-muted-foreground">
              When asked to explain quantum computing, many AI systems default to technical language that can be intimidating
              to non-specialists. SnapEnhance AI, guided by our clarity-over-complexity principle, approaches this differently.
              Instead of beginning with qubits and superposition, it might use an analogy like: "Traditional computers are like
              light switches that can only be on or off. Quantum computers are more like dimmers that can be on, off, or any
              brightness in between—and somehow all brightnesses at once." This makes the concept more accessible without
              sacrificing accuracy.
            </p>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Technical Implementation Details</h2>

          <h3 className="text-base font-medium mt-6 mb-2">Voice Interface Architecture</h3>

          <p>
            Our voice interface is built on a sophisticated architecture that combines browser-based speech recognition with
            our AI processing pipeline:
          </p>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-4 border border-border/30 shadow-sm">
{`// Simplified architecture of the voice interface
const voiceInterfaceArchitecture = {
  frontend: {
    components: {
      microphoneButton: "Activates voice recording",
      fullScreenModal: "Provides visual feedback during recording",
      waveformVisualization: "Animates based on voice input volume",
      transcriptionDisplay: "Shows real-time text conversion",
      actionButtons: "Submit or cancel the voice input"
    },
    technologies: ["React", "Web Speech API", "Canvas for animations"]
  },
  processing: {
    speechRecognition: "Converts speech to text using browser APIs",
    continuousListening: "Maintains recording until explicitly stopped",
    interimResults: "Shows transcription as user speaks",
    errorHandling: "Manages recognition failures gracefully"
  },
  integration: {
    queryProcessing: "Handles voice input same as text input",
    contextMaintenance: "Preserves conversation context across input methods",
    feedbackSystem: "Provides status updates via toast notifications"
  }
};`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">Shared Popup System</h3>

          <p>
            We've improved our popup system to share functionality between different sections of the application:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              <strong>Unified Component Architecture:</strong> The voice interface modal, settings panels, and information
              displays now use a shared component base.
            </li>
            <li>
              <strong>Consistent Animations:</strong> All popups use the same smooth transition animations for a cohesive experience.
            </li>
            <li>
              <strong>Standardized Keyboard Navigation:</strong> Escape key closes any popup, and tab navigation works consistently
              across all modal interfaces.
            </li>
            <li>
              <strong>Responsive Behavior:</strong> All popups adapt appropriately to different screen sizes with consistent behavior.
            </li>
            <li>
              <strong>Accessibility Compliance:</strong> Focus management, ARIA attributes, and screen reader support are implemented
              consistently across all popup interfaces.
            </li>
          </ul>

          <h2 className="text-lg font-medium mt-8 mb-4">The Massive Truth About Voice and Clarity</h2>

          <p>
            The massive truth that drives these updates is that AI should adapt to human communication patterns, not the other way around.
            Voice is our most natural form of communication, and clarity is essential for effective understanding. By implementing a
            sophisticated voice interface and embracing a clarity-over-complexity philosophy, we're making SnapEnhance AI more
            intuitive, accessible, and genuinely helpful.
          </p>

          <p>
            These updates represent significant steps toward our vision of AI that feels like a natural extension of human capability—technology
            that understands you and makes itself understood, without unnecessary barriers or complexity.
          </p>

          <h2 className="text-lg font-medium mt-8 mb-4">Looking Forward</h2>

          <p>
            The voice interface and philosophy features we've introduced are just the beginning. In future
            updates, we plan to:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Expand voice command capabilities with custom shortcuts and macros</li>
            <li>Implement voice biometrics for enhanced security and personalization</li>
            <li>Develop more sophisticated voice visualization options</li>
            <li>Further refine our response generation to align with our philosophical principles</li>
            <li>Create additional resources explaining our approach to AI design and development</li>
          </ul>

          <p>
            We're excited about these developments and look forward to continuing our journey toward more intuitive, accessible,
            and human-centered AI.
          </p>

          <div className="border-t border-border/20 mt-8 pt-4">
            <p className="text-sm text-muted-foreground/80">
              To experience these features firsthand, visit the <Link href="/ai" className="text-primary hover:underline">SnapEnhance AI platform</Link>.
              For more information about our approach to AI development, check out our <Link href="/blog/ai-ethics" className="text-primary hover:underline">AI Ethics</Link> blog post.
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
