define(['react', 'react-router-dom', 'jsx!components/Menu', 'jsx!components/Header', 'jsx!components/Footer', 'jsx!components/Routes'], function (React, ReactRouterDOM, Menu, Header, Footer, Routes) {
    const Router = ReactRouterDOM.BrowserRouter;

    class Home extends React.Component {
        constructor(props) {
            super(props);
            this.state = {}
        }

        componentDidMount(){
            LoadDashboardMethods();
        }

        render() {
            return (
                <Router history={history}>
                    <div>
                        <Menu></Menu>
                        <div className="page">
                                <div>
                                    <Header username="Andrei"></Header>
                                    <Routes></Routes>
                                </div>
                            <Footer></Footer>
                        </div>
                    </div>
                </Router>
            )
        }
    }

    return Home;
});