import React from 'react';
import Square from './Square'
export default class Board extends React.Component {
    renderSquare(i) {
        return <Square btn={this.props.btns[i]} changeUser={(value) => { this.props.onClick(i, value)}}/>
    }
    render() {
        let elemet = <div>下一步：{this.props.user}</div>
        if(this.props.winAndLose()) {
            elemet = <div>赢者： {this.props.winAndLose()}</div>
        }

        return (
            <div>
                <div>{ elemet }</div>
                <div>
                    { this.renderSquare(0) }
                    { this.renderSquare(1) }
                    { this.renderSquare(2) }
                </div>
                <div>
                    { this.renderSquare(3) }
                    { this.renderSquare(4) }
                    { this.renderSquare(5) }
                </div>
                <div>
                    { this.renderSquare(6) }
                    { this.renderSquare(7) }
                    { this.renderSquare(8) }
                </div>
            </div>

        );
    }


}