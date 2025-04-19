'use client';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">Privacy Policy</h1>

        <div className="space-y-6 text-sm">
            <h2>1. Introduction</h2>
            <p>
              At SnapEnhance ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, applications, and services (collectively, the "Service").
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Service.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect several types of information from and about users of our Service, including:
            </p>
            <ul>
              <li><strong>Personal Data:</strong> Personal Data means data about a living individual who can be identified from that data. We may collect personal identification information (such as your name and email address) when you register for an account, subscribe to our newsletter, or contact us for support.</li>
              <li><strong>Usage Data:</strong> We may collect information about how you use the Service, including your browser type, the pages you visit, the time and date of your visit, and other diagnostic data.</li>
              <li><strong>User Content:</strong> We collect and store the screenshots and images you upload to the Service for transformation.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>
              We may use the information we collect from you for various purposes, including to:
            </p>
            <ul>
              <li>Provide, maintain, and improve the Service</li>
              <li>Process and complete transactions</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities in connection with the Service</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Develop new products and services</li>
              <li>Power AI features such as our visual research assistant (see our <a href="/ai-ml" className="text-primary hover:underline">AI/ML Information</a> page for details)</li>
            </ul>

            <h2>4. Vercel Deployment and Data Storage</h2>
            <p>
              The Service is deployed using Vercel, a cloud platform for frontend developers. Your data may be stored on Vercel's servers and is subject to Vercel's privacy practices. For more information, please review Vercel's Privacy Policy at <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy-policy</a>.
            </p>
            <p>
              As the Service is hosted on the domain snapenhance.vercel.app, which is provided by Vercel, your interaction with this domain is also subject to Vercel's data collection practices.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
            </p>
            <p>
              User Content, including uploaded screenshots and transformed images, may be retained for a limited period to provide the Service. You can request deletion of your User Content by contacting us.
            </p>

            <h2>7. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul>
              <li>The right to access, update, or delete your personal information</li>
              <li>The right to rectification (to correct inaccurate data)</li>
              <li>The right to object to our processing of your personal data</li>
              <li>The right to request restriction of processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at info@snapenhance.vercel.app.
            </p>

            <h2>8. Children's Privacy</h2>
            <p>
              The Service is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
            </p>

            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at info@snapenhance.vercel.app.
            </p>
        </div>

        <div className="mt-12 pt-4 border-t border-border/20 text-xs text-muted-foreground/60 text-center">
          Last updated: April 19, 2025
        </div>
      </div>
    </div>
  );
}
