import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

async function getChangelogContent() {
  const filePath = path.join(process.cwd(), 'CHANGELOG.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return fileContent;
}

export default async function ChangelogPage() {
  const changelogMd = await getChangelogContent();

  // Parse the markdown content
  const changelogHtml = marked.parse(changelogMd);

  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">Changelog</h1>

        <div className="prose prose-sm max-w-none">
          <div dangerouslySetInnerHTML={{ __html: changelogHtml }} />
        </div>

        <div className="mt-12 pt-4 border-t border-border/20 text-xs text-muted-foreground/60 text-center">
          <p>
            Last updated: April 28, 2025
          </p>
        </div>
      </div>
    </div>
  );
}
