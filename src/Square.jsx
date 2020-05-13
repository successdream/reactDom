import React from 'react';
export default class  extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            show: true
        }
    }
    render() {
        return (

            <button className="square" onClick={ () => { this.handleClick(this.props.value)}}>
              {this.props.btn} {this.a} qqq
            </button>
        )
    }
    handleClick(value) {
        if(this.state.show === true) {
            this.a = '222';
            this.setState({
                show: false
            })
        } else {
            this.a = '666'
            this.setState({
                show: true
            })
        }
        if(!this.props.btn || this.props.btn === 'O') {
            this.props.changeUser('X');
        } else {
            this.props.changeUser('O');
        }
    }
}
// export default function(props) {
//     return (
//         <button className="square" onClick={() => { handleClick(props.value) }}>
//             {props.btn}
//         </button>  
//     )
//     function handleClick(value) {
//         if(!props.btn || props.btn === 'O') {
//             props.changeUser('X');
//         } else {
//             props.changeUser('O');
//         } 
//     }
// }