import React, { Component } from "react";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class LightBox extends Component {


  render() {
    const { images, isOpen, elInd, setIsOpen, setElInd } = this.props;

    const imageArr = images.map(({ image }) => image);

      return (
        
          
    
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={imageArr[elInd]}
            nextSrc={imageArr[(elInd + 1) % images.length]}
            prevSrc={imageArr[(elInd + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setElInd((elInd + imageArr.length - 1) % imageArr.length)
            }
            onMoveNextRequest={() => setElInd((elInd + 1) % imageArr.length)}
          />
        )}
      </div>
    );
  }
}

export default LightBox;
