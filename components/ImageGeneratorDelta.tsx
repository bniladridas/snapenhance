import React, { useState, useRef } from "react";

export default function ImageGeneratorDelta() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleGenerate() {
    setError("");
    setImageUrl(null);

    if (!prompt.trim()) {
      setError("Please enter a prompt");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData?.error || "Failed to generate image");
      }

      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const errorData = await response.json();
        throw new Error(errorData?.error || errorData?.message || "Failed to generate image");
      }

      // Otherwise, handle as blob image
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (err: any) {
      setError(err.message || "Failed to generate image");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto py-8">
      <div className="flex gap-2">
        <input
          ref={inputRef}
          className="image-prompt-input flex-1 border rounded p-2 text-base"
          type="text"
          placeholder="Enter prompt for image generation..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
        />
        <button
          className="image-prompt-button px-4 bg-blue-600 text-white rounded disabled:opacity-60"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>
      </div>
      <div id="image-message" className="mt-4 text-red-600">
        {error && <span>{error}</span>}
      </div>
      {imageUrl && (
        <div className="mt-4">
          <img
            id="generated-image"
            src={imageUrl}
            alt="Generated"
            className="rounded border w-full max-h-[400px] object-contain"
            style={{ display: "block" }}
          />
        </div>
      )}
    </div>
  );
}