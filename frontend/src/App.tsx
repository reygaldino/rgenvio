import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationButton from "./componets/notificationButton";
import Header from "./componets/Header";
import SalesCards from "./componets/SalesCards";

function App() {
  return (
    <>
      <ToastContainer/>
      <Header />
      <main>
        <section id="sales">
          <div className="container">
            <SalesCards/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
