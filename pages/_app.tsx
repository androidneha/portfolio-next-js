import '../styles/globals.css'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-40">
      <div className="col-span-12 lg:col-span-3 bg-white rounded-2xl p-4 text-center">
          <Sidebar/>
      </div>
      <div className="flex flex-col col-span-12 lg:col-span-9 bg-white rounded-2xl overflow-hidden">
        <Navbar/>
        <Component {...pageProps}/>
      </div>
    </div>
  )
}

export default MyApp
