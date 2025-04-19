'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { marked } from 'marked';
import { cn } from '@/lib/utils';

export function VisualResearchBar() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSimulated, setIsSimulated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Popular search suggestions
  const searchSuggestions = [
    "Logo design principles",
    "Color theory for websites",
    "Typography best practices",
    "Social media visual strategy",
    "Screenshot enhancement techniques",
    "Visual hierarchy in design",
    "Brand identity elements"
  ];

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    setIsSearching(true);
    setError(null);

    try {
      // Use a timeout to prevent hanging requests
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout - reduced from 15s

      try {
        const response = await fetch('/api/visual-research', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
          signal: controller.signal
        });

        clearTimeout(timeoutId); // Clear the timeout if the request completes

        // First try to get the response as text
        const responseText = await response.text();

        // Then try to parse it as JSON
        let data;
        try {
          data = JSON.parse(responseText);
        } catch (jsonError) {
          console.error('JSON parsing error:', jsonError, 'Response text:', responseText);
          // Use a fallback response
          data = {
            result: '# Visual Design Principles\n- Use the rule of thirds for balanced compositions\n- Create visual hierarchy to guide attention\n- Maintain consistent color schemes\n- Use typography to establish tone and readability\n- Ensure adequate white space for visual breathing room',
            isSimulated: true,
            error: 'Failed to parse server response'
          };
        }

        // Check if we have an error message
        if (data.error && !data.result) {
          throw new Error(data.error);
        }

        // If we have a result, show it even if there was an error
        if (data.result) {
          setSearchResult(data.result);
          setIsSimulated(data.isSimulated || false);
          setIsResultVisible(true);
        } else {
          throw new Error('No result found in response');
        }
      } catch (fetchError: any) {
        clearTimeout(timeoutId); // Clear the timeout

        if (fetchError.name === 'AbortError') {
          console.error('Request timed out');
          // Instead of throwing, directly set a fallback result
          setSearchResult('# Visual Design Principles\n- Use the rule of thirds for balanced compositions\n- Create visual hierarchy to guide attention\n- Maintain consistent color schemes\n- Use typography to establish tone and readability\n- Ensure adequate white space for visual breathing room');
          setIsSimulated(true);
          setIsResultVisible(true);
          setError('Request took too long. Showing general design principles instead.');
          return; // Exit early with fallback content
        }
        throw fetchError;
      }
    } catch (err: any) {
      console.error('Search error:', err);
      setError(err.message || 'An error occurred during research');

      // Set a fallback result for a better user experience
      setSearchResult('# Visual Design Principles\n- Use the rule of thirds for balanced compositions\n- Create visual hierarchy to guide attention\n- Maintain consistent color schemes\n- Use typography to establish tone and readability\n- Ensure adequate white space for visual breathing room');
      setIsSimulated(true);
      setIsResultVisible(true);
    } finally {
      setIsSearching(false);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setSearchResult(null);
    setIsResultVisible(false);
    setError(null);
  };

  // Close result when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (resultRef.current && !resultRef.current.contains(target)) {
        setIsResultVisible(false);
      }

      // Only hide suggestions if click is outside the input and suggestions
      if (inputRef.current && !inputRef.current.contains(target) &&
          resultRef.current && !resultRef.current.contains(target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle input focus
  const handleInputFocus = () => {
    if (!isResultVisible && !isSearching && !query) {
      setShowSuggestions(true);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    // Auto-search after selecting a suggestion
    setTimeout(() => {
      try {
        handleSearch(new Event('submit') as any);
      } catch (error) {
        console.error('Error auto-searching suggestion:', error);
        // Fallback to showing a simulated response
        setSearchResult('# Visual Design Principles\n- Use the rule of thirds for balanced compositions\n- Create visual hierarchy to guide attention\n- Maintain consistent color schemes\n- Use typography to establish tone and readability\n- Ensure adequate white space for visual breathing room');
        setIsSimulated(true);
        setIsResultVisible(true);
      }
    }, 100);
  };

  // Parse and render markdown content
  const renderMarkdown = (text: string) => {
    // Configure marked options
    marked.setOptions({
      breaks: true,      // Convert line breaks to <br>
      gfm: true          // Enable GitHub Flavored Markdown
    });

    // Note: headerIds and mangle options were removed in marked v8.0.0
    // Use marked-gfm-heading-id and marked-mangle extensions if needed

    // Parse markdown to HTML
    const htmlContent = marked.parse(text);

    // Return the HTML content
    return (
      <div
        className="markdown-content text-sm"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    );
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative flex items-center">
          <div className="absolute left-3 text-muted-foreground/50">
            <Search className="h-4 w-4" />
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleInputFocus}
            placeholder="Ask AI about visual design..."
            className="w-full bg-background/50 border border-border/30 rounded-md py-2 pl-9 pr-12 text-sm focus:ring-1 focus:ring-primary/20 focus:border-primary/30 transition-all"
          />

          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-12 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}

          <Button
            type="submit"
            size="sm"
            variant="ghost"
            className="absolute right-1 h-7 px-2.5 text-xs"
            disabled={isSearching || !query.trim()}
          >
            {isSearching ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <span className="text-primary/70 font-medium">AI</span>
            )}
          </Button>
        </div>
      </form>

      {isResultVisible && searchResult && (
        <>
          {/* Semi-transparent backdrop to prevent interaction with elements below */}
          <div className="fixed inset-0 bg-black/5 z-40" onClick={() => setIsResultVisible(false)} />
          <div
            ref={resultRef}
            className="absolute top-full left-0 right-0 mt-1 bg-background/95 backdrop-blur-sm border border-border/30 rounded-md shadow-md p-4 z-50 max-h-[60vh] overflow-y-auto"
          >
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-xs font-medium">AI Visual Research Results</h3>
              {isSimulated && (
                <p className="text-[10px] text-amber-500/70 mt-0.5">Using simulated response (API unavailable)</p>
              )}
            </div>
            <button
              onClick={() => setIsResultVisible(false)}
              className="text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="prose prose-sm dark:prose-invert max-w-none markdown-wrapper overflow-y-auto">
            <div className="max-h-[50vh] pr-1">
              {renderMarkdown(searchResult)}
            </div>
          </div>
        </div>
        </>
      )}

      {/* Search suggestions */}
      {showSuggestions && !isResultVisible && !isSearching && (
        <>
          <div className="fixed inset-0 bg-transparent z-40" onClick={() => setShowSuggestions(false)} />
          <div
            ref={resultRef}
            className="absolute top-full left-0 right-0 mt-1 bg-background/95 backdrop-blur-sm border border-border/30 rounded-md shadow-sm p-2 z-50"
          >
          <div className="text-xs text-muted-foreground/70 mb-1.5 px-2">Popular searches:</div>
          <div className="space-y-0.5">
            {searchSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-2 py-1.5 text-xs hover:bg-accent/10 rounded cursor-pointer transition-colors"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <div className="flex items-center">
                  <Search className="h-3 w-3 text-muted-foreground/50 mr-2" />
                  {suggestion}
                </div>
              </div>
            ))}
          </div>
        </div>
        </>
      )}

      {error && (
        <>
          <div className="fixed inset-0 bg-transparent z-40" onClick={() => setError(null)} />
          <div className="absolute top-full left-0 right-0 mt-1 bg-red-500/10 border border-red-500/30 rounded-md p-2 text-xs text-red-500 z-50">
            {error}
          </div>
        </>
      )}
    </div>
  );
}
