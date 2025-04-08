// Demonstrating using an asset from the public folder
// Note: Assets in `public` are served at the root '/'
const profilePicUrl = '/profile-pic.jpg'; // Assuming you added profile-pic.jpg to public/

function HomePage() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Welcome!</h1>
      <img
        src={profilePicUrl}
        alt="Profile Picture"
        className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg border-4 border-white dark:border-gray-700"
      />
      <p className="text-lg mb-4 max-w-xl text-gray-700 dark:text-gray-300">
        Hi, I'm [Your Name], a passionate developer exploring the world of modern web technologies.
        This portfolio is built using Vite, React, TypeScript, and Tailwind CSS to showcase some cool projects and demonstrate Vite's awesome features.
      </p>
      <p className="text-md text-gray-600 dark:text-gray-400">
        Feel free to browse my projects or check out the Vite Features page to see how this site leverages Vite!
      </p>

      {/* HMR Test Section */}
      <div className="mt-8 p-4 border border-dashed border-gray-400 dark:border-gray-600 rounded">
        <h2 className="text-xl font-semibold mb-2">🚀 HMR Test Area</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          While running <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">npm run dev</code>, try editing this text in{' '}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src/pages/HomePage.tsx</code>.
          The changes should appear instantly without a full page reload!
          <span className='inline-block mt-2 p-2 bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 rounded'> Try changing me!</span>
        </p>
      </div>
    </div>
  );
}

export default HomePage;