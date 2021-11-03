import ImgDev from 'assets/img/ds-dark.svg';

const NavBar = () => {

    return (
        <div className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                    <img src={ImgDev} alt="Vendas" width="120" />
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
