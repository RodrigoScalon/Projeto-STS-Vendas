
import NavBar from "components/NavBar"
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <NavBar />

            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-left display-4">RSVendas</h1>
                    <p className="text-left lead">Análise o desempenho das suas vendas por diferentes perspectivas.</p>
                    <hr />

                    <p className="text-left">Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                    <p></p>
               
                <Link className= "btn btn-outline-dark btn-lg btn-block" to = "/dashboard">
                    Acessar o Dashboard
                </Link>
               
               
               
                </div>
            </div>


        </>

    );
}

export default Home;