import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery';
import GalleryImage from '../Gallery/GalleryImage'
import Title from '../Title/Title'

import sal from 'sal.js'
import 'sal.js/dist/sal.css';

class Zwartkops extends Component {
    componentDidMount() {
        sal({
            threshold: 0.1,
            once: true,
        });
    }

    render() {
        const title = <Title key="0" height={2} width={4} heading="Zwartkops Raceway" subheading="Pretoria, Gauteng" date="July 27, 2019" />

        const items = [
            title,
            <GalleryImage key="1" src="images/image1.jpg" startColumn="1" endColumn="5" startRow="3" endRow="9" fade={false} />,
            <GalleryImage key="2" src="images/image2.jpg" startColumn="5" endColumn="10" startRow="1" endRow="4" fade={false} />,
            <GalleryImage key="3" src="images/image3.jpg" startColumn="5" endColumn="9" startRow="4" endRow="10" fade={false} />,
            <GalleryImage key="5" src="images/image5.jpg" startColumn="9" endColumn="13" startRow="4" endRow="10" />,
            <GalleryImage key="4" src="images/image4.jpg" startColumn="10" endColumn="12" startRow="1" endRow="4" />,
            <GalleryImage key="6" src="images/image6.jpg" startColumn="12" endColumn="span 3" startRow="1" endRow="3" />,
            <GalleryImage key="16" src="images/image16.jpg" startColumn="15" endColumn="span 3" startRow="1" endRow="3" />,
            <GalleryImage key="7" src="images/image7.jpg" startColumn="13" endColumn="19" startRow="3" endRow="7" />,
            <GalleryImage key="8" src="images/image8.jpg" startColumn="13" endColumn="15" startRow="7" endRow="10" />,
            <GalleryImage key="9" src="images/image9.jpg" startColumn="15" endColumn="18" startRow="7" endRow="9" />,
            <GalleryImage key="10" src="images/image10.jpg" startColumn="19" endColumn="span 4" startRow="1" endRow="span 6" />,
            <GalleryImage key="11" src="images/image11.jpg" startColumn="18" endColumn="span 5" startRow="7" endRow="span 3" />,
            <GalleryImage key="12" src="images/image12.jpg" startColumn="23" endColumn="span 11" startRow="2" endRow="span 7" />,
            <GalleryImage key="13" src="images/image13.jpg" startColumn="34" endColumn="span 4" startRow="1" endRow="span 6" />,
            <GalleryImage key="14" src="images/image14.jpg" startColumn="34" endColumn="span 5" startRow="7" endRow="10" />,
            <GalleryImage key="15" src="images/image15.jpg" startColumn="38" endColumn="span 6" startRow="2" endRow="span 4" />,
            <GalleryImage key="17" src="images/image17.jpg" startColumn="39" endColumn="span 2" startRow="6" endRow="span 3" />,
            <GalleryImage key="18" src="images/image18.jpg" startColumn="41" endColumn="span 3" startRow="6" endRow="span 2" />,
            <GalleryImage key="19" src="images/image19.jpg" startColumn="41" endColumn="span 3" startRow="8" endRow="span 2" />,
            <GalleryImage key="20" src="images/image20.jpg" startColumn="44" endColumn="span 4" startRow="1" endRow="span 6" />,
            <GalleryImage key="21" src="images/image21.jpg" startColumn="44" endColumn="span 5" startRow="7" endRow="span 3" />,
            <GalleryImage key="22" src="images/image22.jpg" startColumn="48" endColumn="span 6" startRow="1" endRow="span 4" />,
            <GalleryImage key="23" src="images/image23.jpg" startColumn="48" endColumn="span 3" startRow="5" endRow="span 2" />,
            <GalleryImage key="24" src="images/image24.jpg" startColumn="49" endColumn="span 2" startRow="7" endRow="span 3" />,
            <GalleryImage key="25" src="images/image25.jpg" startColumn="51" endColumn="span 3" startRow="8" endRow="span 2" />,
            <GalleryImage key="26" src="images/image26.jpg" startColumn="51" endColumn="span 2" startRow="5" endRow="span 3" />,
            <GalleryImage key="28" src="images/image28.jpg" startColumn="53" endColumn="span 3" startRow="5" endRow="span 2" />,
            <GalleryImage key="29" src="images/image29.jpg" startColumn="54" endColumn="span 2" startRow="7" endRow="span 3" />,
            <GalleryImage key="27" src="images/image27.jpg" startColumn="54" endColumn="span 3" startRow="1" endRow="span 2" />,
            <GalleryImage key="31" src="images/image31.jpg" startColumn="57" endColumn="span 3" startRow="1" endRow="span 2" />,
            <GalleryImage key="30" src="images/image30.jpg" startColumn="56" endColumn="span 4" startRow="3" endRow="span 6" />,
            <GalleryImage key="32" src="images/image32.jpg" startColumn="60" endColumn="span 3" startRow="1" endRow="span 5" />,
            <GalleryImage key="34" src="images/image34.jpg" startColumn="60" endColumn="span 6" startRow="6" endRow="span 4" />,
            <GalleryImage key="33" src="images/image33.jpg" startColumn="63" endColumn="span 2" startRow="3" endRow="span 3" />,
        ]

        return (
            <div className="Zwartkops">
                <Gallery items={items} />
            </div>
        );
    }
}

export default Zwartkops;
