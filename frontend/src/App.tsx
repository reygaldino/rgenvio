import NotificationButton from "./componets/notificationButton"
import Header from "./componets/Header"
import SalesCards from "./componets/SalesCards"

function App() {
  return (
    <>
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

export default App
