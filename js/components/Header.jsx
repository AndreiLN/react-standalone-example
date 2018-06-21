define(['react'], function (React) {
    class Header extends React.Component {
        constructor(props) {
            super(props);
            
            this.logout = this.logout.bind(this);
        }

        logout() {
            window.Logout();
        }

        render() {
            return (
                <header className="header">
                    <nav className="navbar">
                        <div className="container-fluid">
                            <div className="navbar-holder d-flex align-items-center justify-content-between">
                                <div className="navbar-header align-items-center d-flex"><a id="toggle-btn" href="#" className="menu-btn"><i className="icon-bars"> </i></a><a className="navbar-brand">
                                    <div className="brand-text d-none d-md-inline-block"><span></span><strong className="ml-2 text-white">React Standalone</strong></div></a></div>
                                <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-center">
                                    <li className="nav-item text-white d-flex align-items-center">
                                        <i className="far fa-user text-yellow"></i>&nbsp;{this.props.username}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            )
        }
    }

    return Header;
});