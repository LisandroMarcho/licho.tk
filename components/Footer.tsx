export default function Footer() {
  return (
    <footer className="p-4 bg-white sm:p-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://lichodev.com.ar" className="flex items-center">
              <img
                src="/lichodev-logo.webp"
                className="mr-3 h-20"
                alt="lichodev Logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
