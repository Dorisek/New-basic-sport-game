class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shots: 0,
            score: 0

        }
    }
    shotHandler = () => {
        let score = this.state.score
        if (Math.random() > 0.5) {
            score += 1
        }
        this.setState((state, props) => ({
            shots: state.shots + 1,
            score
        }))
    }
    render() {
        return (
            <div className="Team">
                <h2>{this.props.name}</h2>
                <div className="identity">
                    <img src={this.props.logo} alt={this.props.name} />
                </div>
                <div>
                    <strong>Shots:</strong> {this.state.shots}
                </div>
                <div>
                    <strong>Score:</strong>{this.state.score}
                </div>

                <button onClick={this.shotHandler}>Shoot!</button>
            </div>


        )

    }
}

function App(props) {
    return (
        <div className="App">
            <div className="stats">
                <Team
                    name="Russiaville Raccoon"
                    logo="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX15516344.jpg"
                />
                <div className="versus">
                    <h1>Vs</h1>
                </div>
                <Team
                    name="Sheridant Squirrel"
                    logo="https://previews.123rf.com/images/julos/julos1607/julos160719169/79721720-cartoon-squirrel-with-football.jpg"
                />
            </div>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)