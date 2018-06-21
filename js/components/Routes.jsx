define(['react', 'react-router-dom', 'jsx!components/Info', 'jsx!components/Clock'], function (React, ReactRouterDOM, Info, Clock) {
    const Router = ReactRouterDOM.BrowserRouter;
    const Route = ReactRouterDOM.Route;
    const Link = ReactRouterDOM.Link;
    const Prompt = ReactRouterDOM.Prompt;
    const Switch = ReactRouterDOM.Switch;
    const Redirect = ReactRouterDOM.Redirect;

    class Routes extends React.Component {
        constructor(props) {
            super(props);
            this.state = {}
        }
        render() {
            return (
                <Switch>
                    <Redirect exact from="/" to="/info" />
                    
                    <Route exact path='/clock' component={Clock} />
                    <Route exact path='/info' component={Info} />
                </Switch>
            )
        }
    }

    return Routes;
});