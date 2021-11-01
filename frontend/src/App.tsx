import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <div className="conteiner">

        <h1 className="text-primary"> Hello there! </h1>


        <DataTable />

      </div>

      <Footer />
    </>
  );
}

export default App;
