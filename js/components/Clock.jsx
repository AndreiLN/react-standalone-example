define(['react', 'moment'], function (React, moment) {
    moment.locale('pt-br');

    class Clock extends React.Component {
        constructor(props) {
            super(props);

            this.state = { date: moment().format('HH:mm:ss') };

            this.tick = this.tick.bind(this);

            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        tick() {
            this.setState({
                date: moment().format('HH:mm:ss')
            });
        }

        render() {
            return (
                <div className="py-5">
                    <h1 className="text-center">Hora Atual: {this.state.date}</h1>
                </div>
            );
        }
    }

    return Clock;
});