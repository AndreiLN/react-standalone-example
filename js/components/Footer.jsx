define(['react'], function (React) {
    class Footer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {}
        }
        render() {
            return (
                <footer className="main-footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <p></p>
                            </div>
                            <div className="col-sm-6 text-right">
                                <p>Desenvolvido por&nbsp;<a href="https://github.com/AndreiLN" target="_blank" className="external">Andrei Luiz Nenevê</a></p>
                            </div>
                        </div>
                    </div>
                </footer>
            )
        }
    }

    return Footer;
});