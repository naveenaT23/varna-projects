const fs = require('fs');
const path = require('path');

const folders = ['about', 'construction', 'real-estate', 'gallery', 'projects', 'contact', 'upcoming'];
const basePath = path.join(__dirname, 'src', 'app');

folders.forEach(folder => {
  const dirPath = path.join(basePath, folder);
  const pagePath = path.join(dirPath, 'page.tsx');
  const layoutPath = path.join(dirPath, 'layout.tsx');
  
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Extract metadata block
    const metadataMatch = content.match(/import\s+\{\s*Metadata\s*\}\s+from\s+"next";[\s\S]*?export\s+const\s+metadata:\s*Metadata\s*=\s*\{[\s\S]*?\};\n+/);
    
    if (metadataMatch) {
      const metadataStr = metadataMatch[0];
      
      // Remove metadata block from page.tsx
      content = content.replace(metadataStr, '');
      fs.writeFileSync(pagePath, content);
      
      // Create layout.tsx with the extracted metadata
      const layoutContent = `${metadataStr}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
      fs.writeFileSync(layoutPath, layoutContent);
      console.log(`Migrated metadata for ${folder}`);
    } else {
      console.log(`No metadata found in ${folder}/page.tsx`);
    }
  }
});
