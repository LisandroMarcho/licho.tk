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
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-secondary uppercase dark:text-white">
                Nosotros
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/lichodev/licho.tk"
                    className="hover:underline"
                  >
                    Código (Github)
                  </a>
                </li>
                <li>
                  <a
                    href="https://lichodev.com.ar/"
                    className="hover:underline"
                  >
                    Acerca de mí
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-secondary sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 LICHODEV
          </span>
        </div>
      </div>
    </footer>
  );
}
