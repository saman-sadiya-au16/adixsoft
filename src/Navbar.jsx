import './App.css';

function Navbar() {
    return (
        <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid">
                <a className="navbar-brand" href="#">Adixsoft</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Company
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        App Development
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Web Services
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Our work</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">SEO Packages</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                    </li>
                </ul>
                
                <button type="button" className="btn btn-dark float-right">Get a Quote</button>
                </div>
            </div>
            </nav>
        </div>
        </div>
        </div>
    );
}

export default Navbar;