import Image from "next/image";
import yo from "../../assets/images/yo.png"

export default function Home() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-800 text-sm py-4 dark:bg-white">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between rounded-3xl">
          <a className="inline-flex items-center gap-x-2 text-lg font-semibold text-white " href="/">
            <Image className="w-10 h-auto " src={yo} alt="Logo" priority />
            Alejandro Ortega
          </a>
        </div>
        <div id="navbar-dark" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 text-xl">
            <a className="font-medium text-white dark:text-black" href="#" aria-current="page">Inicio</a>
            <a className="font-medium text-gray-400 hover:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-400" href="/Carousel">Carousel</a>
            <a className="font-medium text-gray-400 hover:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-400" href="/Empleados">Empleados</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
