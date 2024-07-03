
import Image from "next/image";
import yo from "../../assets/images/yo.png"

export default function Header() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-800 text-sm py-4 dark:bg-white">
      <nav>

        <div className="logo">
          <Image className="header-image" src={yo} alt="Logo" priority />
          <span>Alejandro Ortega</span>
        </div>
        <input type="checkbox" id="checkbox" />
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/Empleados">Empleados</a></li>
          <li><a href="/Carousel">Carousel</a></li>
        </ul>
      </nav>
    </header>
  );
}
