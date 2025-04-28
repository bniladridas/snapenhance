'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CookiesPage() {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  // Use useEffect to safely access localStorage after component mounts
  useEffect(() => {
    const date = localStorage.getItem('cookie-consent-date');
    if (date) {
      setLastUpdated(new Date(date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
    }
  }, []);
  return (
    <div className="py-8 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">Cookie & Cache Policy</h1>

        <div className="prose prose-sm max-w-none">
          <p>
            SnapEnhance uses cookies and local storage to enhance your experience and provide certain features.
            This policy explains how we use these technologies and what information we store.
          </p>

          <h2 className="text-lg font-medium mt-6 mb-3">What Are Cookies and Local Storage?</h2>

          <p>
            <strong>Cookies</strong> are small text files that are stored on your device when you visit a website.
            They help websites remember your preferences and provide a more personalized experience.
          </p>

          <p>
            <strong>Local Storage</strong> is a web technology that allows websites to store data on your device.
            Unlike cookies, local storage data doesn't expire and isn't sent with every request to the server.
          </p>

          <p>
            <strong>Cache</strong> is temporary storage that helps websites load faster by storing copies of files
            like images, stylesheets, and JavaScript files on your device.
          </p>

          <h2 className="text-lg font-medium mt-6 mb-3">How SnapEnhance Uses These Technologies</h2>

          <h3 className="text-base font-medium mt-4 mb-2">Essential</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Mode Preferences</strong>: We store your preferred mode (SnapEnhance/Delta) to provide a consistent experience.
            </li>
            <li>
              <strong>Session Management</strong>: We use cookies to maintain your session state while using the application.
            </li>
          </ul>

          <h3 className="text-base font-medium mt-4 mb-2">Functional</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Image Processing</strong>: We temporarily store images you're working on to provide a seamless editing experience.
            </li>
            <li>
              <strong>User Preferences</strong>: We remember your preferred settings for image enhancement and templates.
            </li>
          </ul>

          <h3 className="text-base font-medium mt-4 mb-2">Performance</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Caching</strong>: We cache static assets like images, CSS, and JavaScript files to improve loading times.
            </li>
            <li>
              <strong>API Responses</strong>: We may cache certain API responses to reduce server load and improve performance.
            </li>
          </ul>

          <h2 className="text-lg font-medium mt-6 mb-3">Managing Your Preferences</h2>

          <p>
            You can manage your cookie preferences at any time by clicking the "Manage Cookies" button below.
            This will allow you to choose which types of cookies you want to accept.
          </p>

          <div className="mt-4">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
              onClick={() => {
                localStorage.removeItem('cookie-consent');
                localStorage.removeItem('cookie-consent-date');
                window.location.reload();
              }}
            >
              Manage Cookies
            </button>
          </div>

          <h2 className="text-lg font-medium mt-6 mb-3">Clearing Cookies and Cache</h2>

          <p>
            You can also clear cookies and cache through your browser settings:
          </p>

          <h3 className="text-base font-medium mt-4 mb-2">Chrome</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Open Chrome settings (three dots in top right) → Privacy and security → Clear browsing data</li>
            <li>Select "Cookies and other site data" and "Cached images and files"</li>
            <li>Click "Clear data"</li>
          </ol>

          <h3 className="text-base font-medium mt-4 mb-2">Firefox</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Open Firefox menu → Options → Privacy & Security</li>
            <li>Under "Cookies and Site Data," click "Clear Data"</li>
            <li>Select both "Cookies and Site Data" and "Cached Web Content"</li>
            <li>Click "Clear"</li>
          </ol>

          <h3 className="text-base font-medium mt-4 mb-2">Safari</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Go to Safari → Preferences → Privacy</li>
            <li>Click "Manage Website Data" to remove cookies</li>
            <li>Go to Safari → Preferences → Advanced → Show Develop menu</li>
            <li>Then use Develop → Empty Caches to clear the cache</li>
          </ol>

          <h2 className="text-lg font-medium mt-6 mb-3">Updates to This Policy</h2>

          <p>
            We may update this Cookie & Cache Policy from time to time. Any changes will be posted on this page.
          </p>

          <div className="mt-6 border-t border-border/10 pt-6">
            <p className="text-sm text-muted-foreground">
              Policy last updated: April 20, 2025
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Your preferences last updated: {lastUpdated || 'Not set yet'}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              If you have any questions about our Cookie & Cache Policy, please{' '}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
