function Footer() {
    return (
      <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 mt-8">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Your Name. Built with Vite & React.
        </p>
      </footer>
    );
  }
  
  export default Footer;