'use client';

export default function TermsPage() {
  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">Terms of Service</h1>

        <div className="space-y-6 text-sm">
            <h2>1. Introduction</h2>
            <p>
              Welcome to SnapEnhance ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of the SnapEnhance website, applications, and services (collectively, the "Service").
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
            </p>

            <h2>2. Use of the Service</h2>
            <p>
              SnapEnhance provides an AI-powered screenshot transformation service that allows users to enhance and transform screenshots into professional-quality images.
            </p>
            <p>
              You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
            </p>
            <ul>
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate SnapEnhance, a SnapEnhance employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm SnapEnhance or users of the Service or expose them to liability.</li>
            </ul>

            <h2>3. User Content</h2>
            <p>
              The Service may allow you to upload, submit, store, send, or receive content ("User Content"). You retain ownership of any intellectual property rights that you hold in that User Content.
            </p>
            <p>
              When you upload, submit, store, send, or receive User Content to or through the Service, you give SnapEnhance a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display, and distribute such User Content solely for the purpose of providing and improving the Service.
            </p>
            <p>
              You represent and warrant that:
            </p>
            <ul>
              <li>You own or control all rights in and to the User Content and have the right to grant the license granted above.</li>
              <li>The User Content does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity.</li>
            </ul>

            <h2>4. Vercel Deployment</h2>
            <p>
              The Service is deployed using Vercel, a cloud platform for frontend developers. Your use of the Service is also subject to Vercel's Terms of Service, which can be found at <a href="https://vercel.com/legal/terms" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/terms</a>.
            </p>
            <p>
              The Service is hosted on the domain snapframe.vercel.app, which is provided by Vercel. We do not own this domain, and your use of the Service through this domain is subject to Vercel's policies and terms.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of SnapFrame and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            <p>
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of SnapFrame.
            </p>

            <h2>6. Termination</h2>
            <p>
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p>
              All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>

            <h2>7. Disclaimer</h2>
            <p>
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. SNAPFRAME EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              SNAPFRAME MAKES NO WARRANTY THAT THE SERVICE WILL MEET YOUR REQUIREMENTS, BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS, OR THAT THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL SNAPFRAME, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            <p>
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at info@snapenhance.vercel.app.
            </p>
        </div>

        <div className="mt-12 pt-4 border-t border-border/20 text-xs text-muted-foreground/60 text-center">
          Last updated: April 28, 2025
        </div>
      </div>
    </div>
  );
}
