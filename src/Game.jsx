import React from 'react';
import Board from './Board';

export default class  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'X',
            btns: Array(9).fill(null),
            allStep: [Array(9).fill(null), ]
        }
    }
    render() {
        let btns = this.state.allStep.length -1;
        const arr = [];
        for(let i = 0; i < btns; i++) {
            arr.push(i);
        }
        const domArr = arr.map(item => {
            return <button key={Math.random()+ item + ''} onClick={() => {this.handleHsitory(item)}}>{item}</button>
        });
      return (
        <div>
            <div> {domArr} </div>
            <div>
                <Board winAndLose={() => this.winAndLose()} user={this.state.user} 
                btns={ this.state.btns} onClick={(index, value) => { this.handleClick(index, value)}} />   
            </div> 
        </div>
      );
    }

    handleClick(index, value,item) {
        console.log(this, this.a, '88880000')
        console.log(value, index,item, 8888)
        const btns = this.state.btns.slice();
        if(this.winAndLose()) {
            return;
        }
        this.state.user === 'X'? btns[index] = 'X' : btns[index] = 'O';
        const allStep = this.state.allStep.concat([btns]);
        console.log(btns, 'btns')
        this.setState({
            btns,
            user: this.state.user === 'X'? 'O' : 'X',
            allStep,
        })
    }

    handleHsitory(index) {
        console.log('handleHsitory执行了')
        this.setState({
            btns: this.state.allStep[index]
        })
        index%2 === 0?  this.setState({ user: 'X'}) : this.setState({ user: 'O'})
    }
    winAndLose() { 
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]; 
        for(let a of lines) {
            const [one, two, three] = a;
            if(this.state.btns[one] && this.state.btns[one] === this.state.btns[two] 
                && this.state.btns[one] === this.state.btns[three]) {
                    return this.state.btns[one];
            }
        }
        return null;
    }
  }
  