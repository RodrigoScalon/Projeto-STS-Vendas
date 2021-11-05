
import NavBar from "components/NavBar"
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <NavBar />

            <div className="container">
                <div className="jumbotron">
                    
                    <h1 className="text-center display-4">RSVendas</h1>
                    <p className="text-center lead">Analise o desempenho das suas vendas por diferentes perspectivas.</p>
                    <hr />

                    <p className="text-center">Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                    <p></p>
               
               <div className="d-grid gap-2">
                <Link className= "btn btn-outline-danger btn-lg btn-block" to = "/dashboard">
                    Acessar o Dashboard
                </Link>
               
                </div>
               
                </div>
            </div>


        </>

    );
}

export default Home;