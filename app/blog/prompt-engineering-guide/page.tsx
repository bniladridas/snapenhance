'use client';

import Link from 'next/link';

export default function PromptEngineeringGuidePage() {
  return (
    <div className="min-h-screen py-8 bg-pastel-gradient">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">Prompt Engineering Guide: Creating Effective AI Image Prompts</h1>

        <article className="prose prose-sm max-w-none bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-border/30 shadow-sm">
          <p className="text-muted-foreground mb-4">
            Published: April 30, 2025 | Author: SnapEnhance Team
          </p>

          <div className="mb-6 p-4 bg-white rounded-lg border border-border/50 shadow-sm">
            <h3 className="text-base font-medium mb-2">Key Takeaways</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Effective prompt engineering is essential for generating high-quality AI images in Delta mode</li>
              <li>Specific, detailed prompts with clear visual descriptions yield better results than vague requests</li>
              <li>Consider composition elements like perspective, lighting, and style in your prompts</li>
              <li>Ethical considerations should guide your prompt creation to ensure diverse, balanced imagery</li>
              <li>Iterative refinement of prompts often leads to the best results</li>
            </ul>
          </div>

          <p>
            With the introduction of our Delta mode for AI-powered image generation, SnapEnhance users now have 
            the ability to create custom background images using Google's Gemini API. The quality and relevance 
            of these generated images depend significantly on how effectively you craft your prompts. This guide 
            will help you understand the art and science of prompt engineering to get the most out of our 
            AI image generation capabilities.
          </p>

          <h2 className="text-lg font-medium mt-8 mb-4">Understanding Prompt Engineering</h2>

          <p>
            Prompt engineering is the process of crafting input text that guides AI models to generate desired outputs. 
            For image generation, this means creating textual descriptions that effectively communicate the visual 
            elements you want to see in the resulting image. It's a blend of clear communication, visual thinking, 
            and understanding how AI models interpret language.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">Less Effective Prompt</h3>
              <p className="text-xs text-muted-foreground">
                "Make a nice background"
              </p>
              <p className="text-xs text-muted-foreground mt-2 italic">
                Too vague, provides no specific guidance on style, content, or purpose
              </p>
            </div>

            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">More Effective Prompt</h3>
              <p className="text-xs text-muted-foreground">
                "Create a professional background with subtle blue gradient and abstract geometric shapes for a technology presentation"
              </p>
              <p className="text-xs text-muted-foreground mt-2 italic">
                Specific, detailed, and provides context for the image's purpose
              </p>
            </div>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Core Principles of Effective Prompt Engineering</h2>

          <h3 className="text-base font-medium mt-6 mb-2">1. Be Specific and Detailed</h3>

          <p>
            The more specific your prompt, the better the AI can understand your vision. Include details about:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Subject matter (what should be in the image)</li>
            <li>Style (photorealistic, abstract, minimalist, etc.)</li>
            <li>Color palette or specific colors</li>
            <li>Composition and layout</li>
            <li>Mood or atmosphere</li>
            <li>Context or purpose of the image</li>
          </ul>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-4 border border-border/30 shadow-sm">
{`// Example of a detailed prompt
"Generate a minimalist corporate background with a light gray to white gradient, 
featuring subtle blue geometric patterns in the lower third. The design should 
convey professionalism and innovation, suitable for financial presentations."`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">2. Consider Visual Elements</h3>

          <p>
            Think like a visual designer and include specific elements that contribute to the overall composition:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">Perspective</h3>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                <li>Aerial view</li>
                <li>Close-up</li>
                <li>Wide angle</li>
                <li>Isometric</li>
                <li>First-person</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">Lighting</h3>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                <li>Soft, diffused light</li>
                <li>Dramatic shadows</li>
                <li>Backlit</li>
                <li>Golden hour</li>
                <li>Studio lighting</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">Texture</h3>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                <li>Smooth</li>
                <li>Grainy</li>
                <li>Metallic</li>
                <li>Fabric-like</li>
                <li>Paper texture</li>
              </ul>
            </div>
          </div>

          <h3 className="text-base font-medium mt-6 mb-2">3. Reference Artistic Styles</h3>

          <p>
            Mentioning specific artistic styles can help guide the AI toward a particular aesthetic:
          </p>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-4 border border-border/30 shadow-sm">
{`// Examples of style references
"...in the style of minimalist Scandinavian design"
"...inspired by abstract expressionism with bold brush strokes"
"...with a cyberpunk aesthetic featuring neon accents"
"...resembling clean, modern infographic design"
"...with a vintage, retro tech feel from the 1980s"`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">4. Provide Context for Use</h3>

          <p>
            Explaining how the image will be used helps the AI generate more appropriate content:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>"...for a professional LinkedIn post about data security"</li>
            <li>"...as a background for quarterly financial results"</li>
            <li>"...to accompany a technical tutorial about cloud computing"</li>
            <li>"...for a social media announcement about a product launch"</li>
          </ul>

          <div className="my-6 p-4 bg-blue-50 rounded-md border border-blue-100 shadow-sm">
            <h4 className="text-sm font-medium mb-2">Pro Tip: Match Your Brand</h4>
            <p className="text-xs text-muted-foreground">
              For consistent branding, include your company's color palette and visual style in your prompts. 
              For example: "Generate a background using the company colors #4285F4, #34A853, #FBBC05, and #EA4335, 
              with a clean, modern aesthetic that matches our brand's minimalist design language."
            </p>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Ethical Considerations in Prompt Engineering</h2>

          <p>
            At SnapEnhance, we believe in responsible AI use. When crafting prompts, consider these ethical guidelines:
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">1. Promote Diversity and Inclusion</h3>

          <p>
            When your prompts involve people or cultural elements, use language that encourages diverse representation:
          </p>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-4 border border-border/30 shadow-sm">
{`// Example of inclusive prompt engineering
const basePrompt = "Generate an image of a team in a modern office setting";
const enhancedPrompt = \`\${basePrompt}. 
Ensure diverse representation across age, gender, ethnicity, and ability.
Show people collaborating in an inclusive workplace environment.\`;`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">2. Avoid Harmful Stereotypes</h3>

          <p>
            Be mindful of language that might reinforce stereotypes or biases:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">Problematic Approach</h3>
              <p className="text-xs text-muted-foreground">
                "Generate an image of a boss giving instructions to employees"
              </p>
              <p className="text-xs text-muted-foreground mt-2 italic">
                May reinforce hierarchical stereotypes
              </p>
            </div>

            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">Better Approach</h3>
              <p className="text-xs text-muted-foreground">
                "Generate an image of a diverse team collaborating in a meeting, with different people contributing ideas"
              </p>
              <p className="text-xs text-muted-foreground mt-2 italic">
                Promotes equality and collaborative work environments
              </p>
            </div>
          </div>

          <h3 className="text-base font-medium mt-6 mb-2">3. Respect Intellectual Property</h3>

          <p>
            Avoid prompts that specifically request copying copyrighted styles, characters, or branded elements:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Instead of requesting a specific artist's style by name, describe the artistic elements you appreciate</li>
            <li>Focus on general aesthetic qualities rather than specific copyrighted works</li>
            <li>Use descriptive terms for visual styles rather than referencing protected intellectual property</li>
          </ul>

          <h2 className="text-lg font-medium mt-8 mb-4">Practical Examples for Different Use Cases</h2>

          <h3 className="text-base font-medium mt-6 mb-2">Corporate and Business</h3>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-4 border border-border/30 shadow-sm">
{`"Generate a professional background for quarterly financial results. 
Use a subtle gradient from light blue to white with abstract data 
visualization elements like simplified graphs and upward trends. 
The style should be clean, corporate, and convey growth and stability."`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">Technology and Innovation</h3>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-4 border border-border/30 shadow-sm">
{`"Create a technology-themed background with a dark blue base and 
glowing circuit-like patterns in light blue and white. Include 
subtle digital particles and a sense of depth. The style should 
be futuristic but professional, suitable for a presentation about 
cloud computing innovations."`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">Creative and Marketing</h3>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-4 border border-border/30 shadow-sm">
{`"Design a vibrant, energetic background for a social media campaign. 
Use a gradient of warm colors (coral, orange, yellow) with dynamic, 
flowing shapes that create movement across the image. The style should 
be contemporary and eye-catching, with enough negative space in the 
center-right area for text overlay."`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">Educational Content</h3>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-4 border border-border/30 shadow-sm">
{`"Generate a clean, engaging background for educational content about 
environmental science. Use a light green to white gradient with subtle 
nature-inspired elements like leaf outlines or water patterns. The design 
should be uncluttered and support readability, with a calm, focused aesthetic."`}
          </pre>

          <h2 className="text-lg font-medium mt-8 mb-4">Troubleshooting and Refinement</h2>

          <p>
            If your initial results aren't what you expected, try these refinement strategies:
          </p>

          <div className="my-6 p-4 bg-white rounded-lg border border-border/50 shadow-sm">
            <h3 className="text-sm font-medium mb-2">Iterative Refinement Process</h3>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
              <li><strong>Start with a basic prompt</strong> that outlines your core concept</li>
              <li><strong>Evaluate the result</strong> and identify what aspects need improvement</li>
              <li><strong>Add specific details</strong> to address those aspects</li>
              <li><strong>Adjust language</strong> to emphasize important elements</li>
              <li><strong>Try alternative phrasings</strong> if certain terms aren't producing desired results</li>
            </ol>
          </div>

          <h3 className="text-base font-medium mt-6 mb-2">Common Issues and Solutions</h3>

          <div className="grid grid-cols-1 gap-4 my-6">
            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">Issue: Too Busy or Cluttered</h3>
              <p className="text-xs text-muted-foreground">
                <strong>Solution:</strong> Add terms like "minimalist," "clean," "with ample negative space," or "uncluttered" to your prompt.
              </p>
              <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-2 border border-border/30 shadow-sm">
{`"Generate a clean, minimalist background with ample negative space 
and only a few subtle geometric elements in the corners."`}
              </pre>
            </div>

            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">Issue: Colors Not as Expected</h3>
              <p className="text-xs text-muted-foreground">
                <strong>Solution:</strong> Be more specific about colors, using hex codes or very specific color names.
              </p>
              <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-2 border border-border/30 shadow-sm">
{`"Use a color palette of teal (#008080), light gray (#D3D3D3), 
and accents of coral (#FF7F50) for a modern, professional look."`}
              </pre>
            </div>

            <div className="bg-white p-4 rounded-md border border-border/30 shadow-sm">
              <h3 className="text-sm font-medium mb-2">Issue: Wrong Style or Mood</h3>
              <p className="text-xs text-muted-foreground">
                <strong>Solution:</strong> Use more emotional and stylistic descriptors, and reference specific design movements.
              </p>
              <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-2 border border-border/30 shadow-sm">
{`"Create a background with a calm, serene mood using soft, muted colors 
in the style of minimalist Japanese design with zen-like simplicity."`}
              </pre>
            </div>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Advanced Techniques</h2>

          <h3 className="text-base font-medium mt-6 mb-2">1. Structured Prompts</h3>

          <p>
            For complex images, try organizing your prompt into sections:
          </p>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-4 border border-border/30 shadow-sm">
{`"Generate a background image with the following characteristics:
- Style: Modern corporate, clean lines, professional
- Colors: Navy blue (#003366) to light blue (#B3D9FF) gradient
- Elements: Abstract data visualization, subtle grid patterns
- Composition: Asymmetrical with focus on lower right quadrant
- Mood: Confident, innovative, forward-thinking
- Purpose: For a technology company's quarterly report cover"`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">2. Negative Prompting</h3>

          <p>
            Sometimes it's helpful to specify what you don't want in the image:
          </p>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-4 border border-border/30 shadow-sm">
{`"Create a professional background for a healthcare presentation. 
Use calming blue and green tones with abstract medical symbols.
Avoid: Red colors, explicit medical imagery, cluttered design, 
or anything that might appear alarming or distressing."`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">3. Combining Multiple Influences</h3>

          <p>
            Create unique aesthetics by blending different styles:
          </p>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs my-4 border border-border/30 shadow-sm">
{`"Generate a background that combines elements of cyberpunk aesthetics 
(neon accents, technological motifs) with minimalist Scandinavian design 
(clean lines, muted base colors, functional simplicity). The result should 
feel both futuristic and elegant."`}
          </pre>

          <h2 className="text-lg font-medium mt-8 mb-4">Conclusion: The Art of Prompt Engineering</h2>

          <p>
            Effective prompt engineering is both an art and a science. It requires clear communication, 
            visual thinking, and an understanding of how AI models interpret language. By following the 
            guidelines in this post, you'll be able to create more effective prompts for SnapEnhance's 
            Delta mode, resulting in higher-quality, more relevant background images for your screenshots.
          </p>

          <p>
            Remember that prompt engineering is an iterative process. Don't be afraid to experiment, 
            refine your approach, and learn from each generation. With practice, you'll develop an 
            intuitive sense for how to craft prompts that consistently produce excellent results.
          </p>

          <p>
            We're committed to continuously improving our AI image generation capabilities, and your 
            feedback is invaluable in this process. If you discover particularly effective prompting 
            techniques or have suggestions for enhancing our Delta mode, please share them with us.
          </p>

          <div className="border-t border-border/20 mt-8 pt-4">
            <p className="text-sm text-muted-foreground/80">
              For more information about our AI features, please visit our <Link href="/ai-ml" className="text-primary hover:underline">AI/ML Information</Link> page 
              or check out our blog post on <Link href="/blog/ai-ethics" className="text-primary hover:underline">AI Ethics</Link>.
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
