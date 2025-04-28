'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { marked } from 'marked';

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
    <div className="relative w-full max-w-xl mx-auto z-[90]">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative flex items-center">
          <div className="absolute left-2 sm:left-3 text-primary/70">
            <Search className="h-3 w-3 sm:h-4 sm:w-4" />
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleInputFocus}
            placeholder="Ask AI about visual design..."
            className="w-full bg-white/90 backdrop-blur-sm border border-border/50 rounded-md py-1.5 sm:py-2 pl-7 sm:pl-9 pr-10 sm:pr-12 text-xs sm:text-sm focus:ring-1 focus:ring-primary/30 focus:border-primary/40 shadow-sm transition-all"
          />

          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-10 sm:right-12 text-primary/60 hover:text-primary/90 transition-colors"
            >
              <X className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          )}

          <Button
            type="submit"
            size="sm"
            variant="ghost"
            className="absolute right-1 h-6 sm:h-7 px-2 sm:px-2.5 text-[10px] sm:text-xs bg-primary/10 hover:bg-primary/20"
            disabled={isSearching || !query.trim()}
          >
            {isSearching ? (
              <Loader2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin text-primary" />
            ) : (
              <span className="text-primary font-medium">AI</span>
            )}
          </Button>
        </div>
      </form>

      {isResultVisible && searchResult && (
        <>
          {/* Semi-transparent backdrop to prevent interaction with elements below */}
          <div className="fixed inset-0 bg-black/5 z-[100]" onClick={() => setIsResultVisible(false)} />
          <div
            ref={resultRef}
            className="absolute top-full left-0 right-0 mt-1 bg-white/95 backdrop-blur-md border border-border/50 rounded-md shadow-md p-3 sm:p-4 z-[101] max-h-[70vh] sm:max-h-[60vh] overflow-y-auto"
          >
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-[10px] sm:text-xs font-medium text-foreground">AI Visual Research Results</h3>
              {isSimulated && (
                <p className="text-[8px] sm:text-[10px] text-amber-500/90 mt-0.5">Using simulated response (API unavailable)</p>
              )}
            </div>
            <button
              onClick={() => setIsResultVisible(false)}
              className="text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              <X className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </button>
          </div>

          <div className="prose prose-xs sm:prose-sm max-w-none markdown-wrapper overflow-y-auto">
            <div className="max-h-[60vh] sm:max-h-[50vh] pr-1 text-[11px] sm:text-sm">
              {renderMarkdown(searchResult)}
            </div>
          </div>
        </div>
        </>
      )}

      {/* Search suggestions */}
      {showSuggestions && !isResultVisible && !isSearching && (
        <>
          <div className="fixed inset-0 bg-transparent z-[100]" onClick={() => setShowSuggestions(false)} />
          <div
            ref={resultRef}
            className="absolute top-full left-0 right-0 mt-1 bg-white/95 backdrop-blur-md border border-border/50 rounded-md shadow-md p-2 sm:p-3 z-[101]"
          >
          <div className="text-[10px] sm:text-xs font-medium text-foreground mb-1.5 sm:mb-2 px-1">Popular searches:</div>
          <div className="space-y-1">
            {searchSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-2 py-1.5 sm:py-2 text-[10px] sm:text-xs text-foreground/90 hover:bg-accent/20 rounded cursor-pointer transition-colors"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <div className="flex items-center">
                  <Search className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary/70 mr-1.5 sm:mr-2" />
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
          <div className="fixed inset-0 bg-transparent z-[100]" onClick={() => setError(null)} />
          <div className="absolute top-full left-0 right-0 mt-1 bg-white/90 backdrop-blur-md border border-red-500/50 rounded-md p-2 sm:p-3 text-[10px] sm:text-xs text-red-600 font-medium z-[101] shadow-md">
            {error}
          </div>
        </>
      )}
    </div>
  );
}
