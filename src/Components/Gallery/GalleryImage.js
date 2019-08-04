import React, { Component } from 'react';
import VanillaTilt from 'vanilla-tilt';

class GalleryImage extends Component {
    componentDidMount() {
        VanillaTilt.init(this.rootNode, {
            max: 5,
            speed: 1000
        })
    }

    render() {

        const salClass = this.props.fade === false ? '' : 'fade'

        return <img data-sal={salClass}
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

export default GalleryImage