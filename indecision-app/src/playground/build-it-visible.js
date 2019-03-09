class BuildItVisible extends React.Component {

    constructor(props) {
        super(props)
        this.showDetails = this.showDetails.bind(this)
        
        this.state = {
            button: 'Show details',
            state: false,
            message: ''
        }
    }


    showDetails() {
        if(!this.state.state){
            this.setState((prev) => {
                return {
                    button: 'Hide Details',
                    state: true,
                    message: 'Hey, these are some details' 
                }
            })
        } else {
            this.setState((prev) => {
                return {
                    button: 'Show Details',
                    state: false,
                    message: ''
                }
            })
        }
    }


    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.showDetails}>{this.state.button}</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

ReactDOM.render(<BuildItVisible />, document.getElementById('app'))








// let data = {
//     button: 'Show details',
//     state: false
// }

// const showDetails = () => {
//     if(!data.state){
//         data.button = 'Hide Details',
//         data.state = true
//         data.message = "Hey. these are some details"
//         render();
//     } else {
//         data.button = 'Show Details',
//         data.state = false
//         data.message = ""
//         render();
//     }
// }

// const app = document.getElementById('app');

// const render = () => {
//     let template = 
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showDetails}>{data.button}</button>
//             <p>{data.message}</p>    
//         </div>;
    
//     ReactDOM.render(template, app)
// }

// render()