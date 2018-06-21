define(['react', 'jsx!components/Loading'], function (React, Loading) {
    class Info extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true
            }
        }
        render() {
            return (
                <div>
                    <Loading loading={this.state.loading} />
                    <section className="dashboard-counts section-padding">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <h1>Tela de informações</h1>
                                </div>                                
                            </div>
                        </div>
                    </section>
                </div >
            )
        }
        componentDidMount() {
			// Aqui poderia carregar dados do banco por requisição ajax por exemplo
			this.setState({ 
				loading: false
			});
        }
    }

    return Info;
});