define(['react'], function (React) {
    class Loading extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            if (this.props.loading) {
            return (<div className="hideAfterInit loadingDiv">
                <img src="images/loading.svg" className="img-fluid rounded-circle loadingImg" />
            </div>);
            } 
            return (<div></div>);
        }
    }

    return Loading;
});