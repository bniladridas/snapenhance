'use client';

import { TimeSyncDisplay } from '@/components/time-sync-display';

export default function LegalPage() {
  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">Legal Software Information</h1>

        <div className="space-y-6 text-sm">
          <section>
            <h2 className="text-base font-medium mb-2">What "Legal Software" Means</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">1. Properly Licensed</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>You (or your organization) have the <strong>right license or permission</strong> to use the software.</li>
                  <li>This could mean buying a license, using free/open-source software with correct attribution, or using software that's included in a subscription/service.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">2. Not Pirated</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>It's <strong>not illegally downloaded</strong> or shared.</li>
                  <li>It's <strong>not cracked</strong> or altered to bypass licensing checks.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">3. Compliant with Terms of Use</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>You're using the software <strong>only in ways the license allows</strong> (e.g., personal vs commercial use).</li>
                  <li>You're not redistributing it in a way that violates the developer's policies.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-base font-medium mb-2">Examples of Legal Software</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Microsoft Office installed with a valid license key</li>
              <li>Ubuntu Linux (open-source and free to use)</li>
              <li>Adobe Photoshop under a paid subscription</li>
              <li>An npm package used according to its open-source license (e.g., MIT, GPL)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium mb-2">Risks of Illegal Software</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Security vulnerabilities</li>
              <li>No updates or support</li>
              <li>Legal penalties or fines</li>
              <li>Ethical concerns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium mb-2">End of Life (EOL) Software</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                EOL stands for End of Life in the context of software and hardware. When a product reaches EOL, it means the vendor or developer has officially stopped supporting or updating it.
              </p>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">In Software, EOL Means:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>No more updates</strong> – including security patches, bug fixes, or feature improvements</li>
                  <li><strong>No official support</strong> – you can't contact the vendor for help anymore</li>
                  <li><strong>Deprecated</strong> – the product is outdated, and continued use may be risky</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">Examples:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Windows 7</strong> reached EOL on January 14, 2020</li>
                  <li><strong>Python 2.7</strong> reached EOL on January 1, 2020</li>
                  <li>An npm package marked as <strong>"deprecated"</strong> or no longer maintained can be considered EOL</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">Why EOL Matters:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Security vulnerabilities won't be fixed</li>
                  <li>Compatibility issues with newer software/hardware</li>
                  <li>Can break compliance rules (for businesses or regulated industries)</li>
                  <li>Risk of system failures or data loss</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-base font-medium mb-2">SnapEnhance Licensing</h2>
            <p className="text-muted-foreground">
              SnapEnhance is provided under the MIT License, which allows for both personal and commercial use.
              The software is properly licensed and compliant with all applicable laws.
            </p>
            <p className="text-muted-foreground mt-2">
              All third-party libraries and components used in SnapEnhance are also properly licensed and used in accordance with their respective license agreements.
            </p>
            <p className="text-muted-foreground mt-2">
              For information about our use of AI/ML technologies and related third-party services, please see our <a href="/ai-ml" className="text-primary hover:underline">AI/ML Information</a> page.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium mb-2">SnapEnhance EOL Policy</h2>
            <p className="text-muted-foreground">
              SnapEnhance is actively maintained and supported. We are committed to providing regular updates, security patches, and feature improvements.
            </p>
            <p className="text-muted-foreground mt-2">
              In the event that SnapEnhance reaches End of Life (EOL), we will provide:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground mt-2">
              <li>At least 12 months advance notice before EOL</li>
              <li>Security patches during the transition period</li>
              <li>Migration guidance to alternative solutions</li>
              <li>Options to export and preserve your data</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              We regularly review all dependencies to ensure none of our critical components have reached EOL status.
            </p>
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
