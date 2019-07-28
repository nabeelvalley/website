import React, { Component } from 'react';
import VanillaTilt from 'vanilla-tilt';

class GridImage extends Component {
    componentDidMount() {
        VanillaTilt.init(this.rootNode, {
            max: 2,
            speed: 400,
            glare: true,
            'max-glare': 0.5,
        })
    }

    render() {
        return <img data-sal="fade"
            data-sal-duration="1000"
            data-sal-easing="ease-out-bounce"
            ref={node => (this.rootNode = node)}
            src={this.props.src}
            style={{
                gridColumn: `${this.props.startColumn} / ${this.props.endColumn}`,
                gridRow: `${this.props.startRow} / ${this.props.endRow}`
            }}
            alt="" />
    }
}

export default GridImage