import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {

  return (

    <>
      <NavBar />

      <div className="conteiner">

        <h1 className="text-primary py-4"> Dashboard de Vendas </h1>

        <div className="row px-3">
          <div className="col-sm-6">

            <h5 className="text-center color-primary">Sucesso nas vendas(%)</h5>

            <BarChart />

          </div>
          <div className="col-sm-6">
          <h5 className="text-center color-primary">Valor total por vendedor (%)</h5>

            <DonutChart />
          </div>
          </div>

        <div className="py-3">
        <h2 className="text-center"> Relatório Geral dos Vendedores</h2>

        </div>
        <DataTable />
      </div>

      <Footer />
    </>

  );
}

export default Dashboard;