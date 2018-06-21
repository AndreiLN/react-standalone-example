define(['react', 'react-router-dom'], function (React, ReactRouterDOM) {
    const Router = ReactRouterDOM.BrowserRouter;
    const Route = ReactRouterDOM.Route;
    const Link = ReactRouterDOM.Link;
    const NavLink = ReactRouterDOM.NavLink;
    const Prompt = ReactRouterDOM.Prompt;
    const Switch = ReactRouterDOM.Switch;
    const Redirect = ReactRouterDOM.Redirect;

    class Menu extends React.Component {
        constructor(props) {
            super(props);
            this.state = {}
        }
        render() {
            return (
                <nav className="side-navbar">
                    <div className="side-navbar-wrapper">
                        <div className="sidenav-header d-flex align-items-center justify-content-center ">
                            <div className="sidenav-header-inner text-center">
                                <div className="logo text-uppercase">
                                    <img src="images/logo.png" className="img-fluid mx-auto py-2" />
                                </div>
                            </div>
                            <div className="sidenav-header-logo"><a title="React Standalone" className="brand-small text-center a-no-decoration"> <strong className="text-primary">R</strong><strong className="text-yellow">S</strong></a></div>
                        </div>
                        <div className="main-menu">
                            <h5 className="sidenav-heading">Geral</h5>
                            <ul id="side-main-menu" className="side-menu list-unstyled">
                                <li><NavLink to='/clock' activeClassName="active"><i className="far fa-clock"></i>&nbsp;Clock</NavLink></li>
                                <li><NavLink to='/info' activeClassName="active"><i className="fas fa-info"></i>&nbsp;Informações</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )
        }
    }

    return Menu;
});