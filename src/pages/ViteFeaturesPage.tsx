function ViteFeaturesPage() {
    // Example: Get env var value again to show it's accessible everywhere
    const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
  
    return (
      <div className="prose dark:prose-invert max-w-none"> {/* Use Tailwind prose for nice text formatting */}
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Vite Features in Action</h1>
        <p>This portfolio leverages several core features of Vite. Here's how:</p>
  
        <section>
          <h2>1. Instant Server Start & Native ESM Dev Server</h2>
          <p>
            When you run <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">npm run dev</code>, Vite starts the dev server almost instantly. It serves your code directly to the browser using native ES Module imports. There's no time-consuming bundling during development.
          </p>
          <p>
            <strong>Check it:</strong> Open your browser's developer tools (Network tab). You'll see individual <code>.tsx</code> and <code>.ts</code> files being loaded as modules, not one giant bundle.
          </p>
        </section>
  
        <section>
          <h2>2. Lightning Fast HMR (Hot Module Replacement)</h2>
          <p>
            Vite performs HMR over native ESM. When you edit a file, Vite only needs to precisely invalidate the chain between the edited module and its closest HMR boundary. This is incredibly fast, regardless of application size.
          </p>
          <p>
            <strong>Try it:</strong> Go to the <a href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">Home page</a>. Edit the "Try changing me!" text within the HMR Test Area (in <code>src/pages/HomePage.tsx</code>). Save the file. The change appears instantly without reloading the page or losing component state (if any). Also try changing styles in <code>index.css</code> or Tailwind classes in any component.
          </p>
        </section>
  
        <section>
          <h2>3. Optimized Build</h2>
          <p>
            Running <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">npm run build</code> uses Rollup under the hood to produce a highly optimized static asset build for production. Features include:
          </p>
          <ul>
            <li><strong>Code Splitting:</strong> Automatically splits code into smaller chunks, loaded only when needed.</li>
            <li><strong>Lazy Loading:</strong> Works seamlessly with dynamic imports for route-based or component-based lazy loading.</li>
            <li><strong>Asset Handling & CSS Optimization:</strong> Optimizes CSS, splits it, and handles static assets efficiently.</li>
            <li><strong>Preload Directives:</strong> Automatically generates <code><link rel="modulepreload"></link></code> directives for entry chunks and their direct imports.</li>
          </ul>
          <p>
            <strong>Check it:</strong> Run <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">npm run build</code> and inspect the generated <code>dist/</code> folder. You'll see hashed filenames, potentially multiple JS/CSS files, and an optimized <code>index.html</code>. You can serve the `dist` folder using `npm run preview`.
          </p>
        </section>
  
        <section>
          <h2>4. TypeScript & JSX Support</h2>
          <p>
            Vite supports TypeScript (<code>.ts</code>, <code>.tsx</code>) out-of-the-box. It uses esbuild for transpilation during development (very fast) and relies on standard TypeScript for type checking (usually via `tsc --noEmit` or editor integration). JSX is also supported natively.
          </p>
          <p>
            <strong>Check it:</strong> This entire project is written in TypeScript! Look at the <code>.tsx</code> file extensions for components and <code>.ts</code> for data/utility files (like <code>src/data/projects.ts</code>). JSX syntax is used throughout the components.
          </p>
        </section>
  
        <section>
          <h2>5. CSS Features (PostCSS/Tailwind)</h2>
          <p>
            Vite supports various CSS features. While it directly supports <code>.css</code> files, CSS Modules (<code>.module.css</code>), and easy integration for preprocessors like Sass/Less, this project demonstrates PostCSS integration, which is used by Tailwind CSS.
          </p>
          <p>
            <strong>Check it:</strong> Tailwind utility classes are used everywhere for styling (e.g., <code>className="text-3xl font-bold mb-6"</code>). The setup involved configuring <code>tailwind.config.js</code> and <code>postcss.config.js</code>, which Vite picks up automatically. Global styles and Tailwind directives are in <code>src/index.css</code>.
          </p>
        </section>
  
         <section>
          <h2>6. Static Asset Handling</h2>
          <p>
            Static assets can be handled in two ways:
          </p>
          <ul>
              <li><strong>Importing from `src`:</strong> Assets like images (e.g., <code>my-project-image.png</code> in <code>src/assets</code>) can be imported directly into components (see <code>src/components/ProjectCard.tsx</code>). These assets are included in the build graph and get hashed filenames.</li>
              <li><strong>Using the `public` directory:</strong> Assets placed in the <code>public</code> directory (e.g., <code>public/profile-pic.jpg</code>) are served at the root path (<code>/</code>) and are copied as-is to the `dist` root during build. They are not processed by Vite. Useful for favicons, robots.txt, or assets that must retain their exact filename. See how <code>profile-pic.jpg</code> is referenced in <code>src/pages/HomePage.tsx</code>.</li>
          </ul>
        </section>
  
        <section>
          <h2>7. JSON Importing</h2>
          <p>
            Vite allows you to directly import JSON files. The imported JSON is automatically converted into an ES Module exporting the object.
          </p>
          <p>
            <strong>Check it:</strong> While this project uses a <code>.ts</code> file for project data for type safety (<code>src/data/projects.ts</code>), you could easily create a <code>projects.json</code> file and import it like this: <code>import projectsData from '../data/projects.json';</code>. Type support for JSON imports is also available.
          </p>
        </section>
  
        <section>
          <h2>8. Environment Variables</h2>
          <p>
            Vite exposes environment variables from <code>.env</code> files to your client-side source code via <code>import.meta.env</code>. Only variables prefixed with <code>VITE_</code> are exposed.
          </p>
          <p>
            <strong>Check it:</strong> This app uses <code>VITE_APP_TITLE</code> from the <code>.env</code> file to set the site title in <code>src/App.tsx</code> and display it in the header. The unused <code>VITE_API_ENDPOINT</code> is also defined: <code>{apiEndpoint ? `Value found: ${apiEndpoint}` : 'Value not found (check .env)'}</code>.
          </p>
           <p className="text-xs text-gray-500 dark:text-gray-400">Note: Environment variables are embedded during the build process. You need to restart the dev server if you change <code>.env</code> files.</p>
        </section>
  
         <section>
          <h2>9. Glob Imports (Mentioned)</h2>
          <p>
              Vite supports importing multiple modules from a directory using `import.meta.glob`. This is useful for scenarios like importing all blog posts, components, or data files matching a pattern.
          </p>
          <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded text-sm overflow-x-auto"><code>
  {`// Example: Import all markdown files from a 'posts' directory
  const modules = import.meta.glob('./posts/*.md');
  
  // For eager loading (includes content directly):
  // const modules = import.meta.glob('./posts/*.md', { eager: true });
  
  // Iterate over the modules (path -> async import function or module content)
  for (const path in modules) {
    // Use modules[path]() to dynamically import for lazy loading
    // Or access modules[path] directly if using { eager: true }
  }`}
          </code></pre>
          <p>
              <strong>In this App:</strong> This simple portfolio doesn't heavily rely on glob imports, but it's a powerful feature for larger applications managing collections of content or components dynamically.
          </p>
        </section>
  
      </div>
    );
  }
  
  export default ViteFeaturesPage;