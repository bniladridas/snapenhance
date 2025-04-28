'use client';

export default function TimeZoneDetectionPage() {
  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">Automatic Time Zone Detection</h1>

        <article className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-4">
            Published: April 28, 2025 | Author: SnapEnhance Team
          </p>

          <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border/50">
            <h3 className="text-base font-medium mb-2">Key Takeaways</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>We've implemented automatic time zone detection for accurate time display</li>
              <li>The system respects user privacy with opt-in selection</li>
              <li>Time synchronization enhances the user experience across different regions</li>
              <li>Users can manually select their preferred time zone</li>
            </ul>
          </div>

          <p>
            Today, we're excited to announce the addition of automatic time zone detection to SnapEnhance.
            This feature enhances the user experience by ensuring that all time-related information is
            displayed accurately according to your local time zone.
          </p>

          <h2 className="text-lg font-medium mt-8 mb-4">Why Time Zone Detection Matters</h2>

          <p>
            In our increasingly global world, users access SnapEnhance from various time zones.
            Displaying accurate time information is essential for:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Ensuring content timestamps are relevant to your location</li>
            <li>Providing accurate "last updated" information</li>
            <li>Maintaining consistency across the application</li>
            <li>Improving the overall user experience</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">How It Works</h3>
              <p className="text-xs text-muted-foreground">
                When you first visit SnapEnhance, our system automatically detects your time zone using
                your browser's Intl API. This doesn't require any personal information and respects your privacy.
                You can confirm the detected time zone or select a different one from our comprehensive list.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">User Control</h3>
              <div className="text-xs text-muted-foreground">
                <p>We believe in giving users control over their experience. That's why we've made it easy to:</p>
                <ul className="list-disc pl-4 mt-1">
                  <li>Confirm or change your detected time zone</li>
                  <li>Search for specific time zones</li>
                  <li>Toggle between global and local time display</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Technical Implementation</h2>

          <p>
            Our time zone detection system uses a combination of browser APIs and server-side validation:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs my-4">
{`// Client-side time zone detection
const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Store the user's preference
localStorage.setItem('user-timezone', userTimezone);

// Format time based on the user's time zone
const formatTime = (date) => {
  return date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: userTimezone
  });
};`}
          </pre>

          <p>
            For users whose browsers don't support the Intl API or who have disabled JavaScript,
            we provide a fallback mechanism that uses server-side detection based on IP geolocation.
          </p>

          <h2 className="text-lg font-medium mt-8 mb-4">Privacy Considerations</h2>

          <p>
            We take your privacy seriously. Here's how our time zone detection respects your privacy:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>We use the browser's built-in Intl API, which doesn't require any personal information</li>
            <li>Your time zone preference is stored locally on your device, not on our servers</li>
            <li>You can manually select any time zone, regardless of your actual location</li>
            <li>No IP-based geolocation is used unless you explicitly opt-in</li>
          </ul>

          <h2 className="text-lg font-medium mt-8 mb-4">Global Time Synchronization</h2>

          <p>
            In addition to local time zone detection, we've implemented a global time synchronization feature.
            This allows you to toggle between your local time and a standardized global time, which can be
            useful for:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Coordinating with team members in different time zones</li>
            <li>Referencing content updates in a standardized format</li>
            <li>Ensuring consistency across international projects</li>
          </ul>

          <p>
            To toggle between local and global time, simply click on the time display in the footer of any page.
          </p>

          <h2 className="text-lg font-medium mt-8 mb-4">Future Enhancements</h2>

          <p>
            We're continuously working to improve our time-related features. Future updates may include:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Calendar integration with time zone conversion</li>
            <li>Scheduled content publishing with time zone awareness</li>
            <li>Enhanced time format customization options</li>
            <li>Multi-time zone display for international collaboration</li>
          </ul>

          <div className="border-t border-border/20 mt-8 pt-4">
            <p className="text-sm text-muted-foreground/80">
              We hope you find the automatic time zone detection feature useful. As always, we welcome your feedback
              and suggestions for how we can continue to improve SnapEnhance.
            </p>
          </div>
        </article>

        <div className="mt-12 pt-4 border-t border-border/20 text-xs text-muted-foreground/60 text-center">
          <p>Last updated: April 28, 2025</p>
        </div>
      </div>
    </div>
  );
}
