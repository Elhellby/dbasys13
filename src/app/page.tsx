import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faFilm, faGuitar, faRobot, faHiking, faSwimmer, faBiking, faBook } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-blue-200 p-4">
        <h1 className="text-lg font-bold">Alejandro Ortega Rodriguez</h1>
        <h1 className="text-sm text-gray-600">Desarrollador</h1>
        <p className="text-justify">
          Soy un desarrollador fullstack con más de doce años de experiencia en el desarrollo de aplicaciones web y móviles, integraciones de sistemas y creación de microservicios. He trabajado con diversas tecnologías como JavaScript, Python, C#, SQL Server, MongoDB, y frameworks modernos como React y Next.js. Mi enfoque principal es ofrecer soluciones tecnológicas eficientes y de alta calidad, adaptándome rápidamente a los cambios y nuevas tecnologías.
        </p>
      </div>


      <div className="grid grid-rows-2 gap-4">
        <div>
          <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg">
            <table className="w-full table-auto border-collapse">
              <tbody>
                <tr className="bg-gray-100">
                  <td className="p-4 text-center border"><FontAwesomeIcon icon={faGamepad} className="text-sm text-blue-500" /><p className="mt-2 text-gray-700">Videojuegos</p></td>
                  <td className="p-4 text-center border"><FontAwesomeIcon icon={faFilm} className="fas fa-film text-4xl text-green-500" /><p className="mt-2 text-gray-700">Películas</p></td>
                  <td className="p-4 text-center border"><FontAwesomeIcon icon={faGuitar} className="fas fa-guitar text-4xl text-red-500" /><p className="mt-2 text-gray-700">Guitarra</p></td>
                  <td className="p-4 text-center border"><FontAwesomeIcon icon={faRobot} className="fas fa-robot text-4xl text-yellow-500" /><p className="mt-2 text-gray-700">Robótica</p></td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-4 text-center border"><FontAwesomeIcon icon={faHiking} className="text-4xl text-purple-500" /><p className="mt-2 text-gray-700">Senderismo</p></td>
                  <td className="p-4 text-center border"><FontAwesomeIcon icon={faSwimmer} className=" text-4xl text-teal-500" /><p className="mt-2 text-gray-700">Nadar</p></td>
                  <td className="p-4 text-center border"><FontAwesomeIcon icon={faBiking} className=" text-4xl text-indigo-500" /><p className="mt-2 text-gray-700">Ciclismo</p></td>
                  <td className="p-4 text-center border"><FontAwesomeIcon icon={faBook} className=" text-4xl text-pink-500" /><p className="mt-2 text-gray-700">Lectura</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="w-full mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6 text-center">Contacto</h1>
            <form>
              <div className="mb-4">
                <label form="name" className="block text-gray-700">Nombre</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label form="email" className="block text-gray-700">Correo Electrónico</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label form="subject" className="block text-gray-700">Asunto</label>
                <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label form="message" className="block text-gray-700">Mensaje</label>
                <textarea id="message" name="message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
