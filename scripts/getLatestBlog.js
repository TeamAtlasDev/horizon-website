const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../blog');
const dataDir = path.join(__dirname, '../src/data');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Get all markdown files
const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));

// Filter out non-date files
const dateRegex = /^(\d{4}-\d{2}-\d{2})-(.+)\.mdx?$/;
const validFiles = files.filter(f => dateRegex.test(f));

// Sort files descending by name (which starts with date)
validFiles.sort().reverse();

if (validFiles.length > 0) {
  const latestFile = validFiles[0];
  const content = fs.readFileSync(path.join(blogDir, latestFile), 'utf8');
  
  // Extract title from frontmatter
  const titleMatch = content.match(/title:\s*(.*)/);
  let title = titleMatch ? titleMatch[1].replace(/['"]/g, '').trim() : "Latest News";
  
  // Clean up title if it's too long
  if (title.length > 35) {
    title = title.substring(0, 35) + '...';
  }
  
  // Create slug from filename
  const match = latestFile.match(dateRegex);
  // Docusaurus uses date + slug format, or just slug?
  // By default, a file named 2026-08-10-horizon-rewrite-news.mdx
  // is routed to /blog/horizon-rewrite-news if the folder is blog
  // Actually, Docusaurus by default routes `blog/YYYY/MM/DD/slug` or just `blog/slug` depending on routeBasePath.
  // Default routing for `2024-06-05-v2-update.mdx` is `/blog/v2-update`. Let's use the second capture group.
  const slug = match[2];
  
  const data = {
    title: title,
    link: `/blog/${slug}`
  };
  
  fs.writeFileSync(path.join(dataDir, 'latestPost.json'), JSON.stringify(data, null, 2));
  console.log(`Generated latestPost.json -> ${data.title}`);
} else {
  // Fallback
  const data = {
    title: "Horizon AI Module",
    link: "/blog"
  };
  fs.writeFileSync(path.join(dataDir, 'latestPost.json'), JSON.stringify(data, null, 2));
}
