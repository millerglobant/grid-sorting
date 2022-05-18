import Navbar from "./components/layout/Navbar";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="flex flex-col justify-between h-screen">
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    </AppProvider>
  );
}

export default App;
