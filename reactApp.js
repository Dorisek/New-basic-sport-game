class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shots: 0,
            score: 0
        }
        this.shotSound = new Audio("./assets/audio/bat+hit+ball.mp3")
        this.shotScore = new Audio("./assets/audio/caughtball.mp3")
    }

    shotHandler = () => {
        let score = this.state.score
        if (Math.random() > 0.5) {
            score += 1
            this.shotScore.play();
        }
        this.setState((state, props) => ({
            shots: state.shots + 1,
            score
        }))

        this.shotSound.play();
    }
    render() {
        let percentage = ''
        if (this.state.shots > 0) {
            let x = this.state.score / this.state.shots * 100
            percentage = <div>{x}%</div>

        }

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
                {percentage}
                <button onClick={this.shotHandler}>Shoot!</button>
            </div>


        )

    }
}
class Game extends React.Component {

    render() {
        return (
            <div className="Game">
                <h2> Welcome to {this.props.venue}</h2>
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

}
function App(props) {
    return (
        <div className="App">
            <Game
                venue="Kenzie Arena"
            />

        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)