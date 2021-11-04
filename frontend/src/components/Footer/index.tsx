/* eslint-disable jsx-a11y/alt-text */

const Footer = () => {

  return (
    <footer className="bg-dark text-center text-white">
      <p className="text-light">App desenvolvido por Rodrigo Scalon.</p>
      <p>Contato:</p>
      
      <div className="me-5 d-none d-lg-block">
          <section className="mb-4">

          <a className="btn btn-outline-light btn-floating m-1" href="http://linkedin.com/in/rodrigo-scalon" role="button"
          ><i className="fab fa-linkedin-in">
              <img height="20em" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" /> </i
            ></a>

          <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/RodrigoScalon" role="button"
          ><i className="fab fa-github">
              <img height="20em" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></i
            ></a>

          <a className="btn btn-outline-light btn-floating m-1" href="mailto:rodrigoscalon@gmail.com" role="button"
          ><i className="fab fa-linkedin-in">
              <img height="20em" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></i
            ></a>

        </section>
      </div>
    </footer>
  );
}

export default Footer;
