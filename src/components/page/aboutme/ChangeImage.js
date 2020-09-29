import React from 'react'
import { AnimateOnChange } from 'react-animation'
import './ChangeImgae.css';
import z1 from './z1.jpg'
import z2 from './z2.jpg'
import z3 from './z3.jpg'
import z4 from './z4.jpg'
import z5 from './z5.jpg'
import z6 from './z6.jpg'
import z7 from './z7.jpg'
import z8 from './z8.jpg'
import z9 from './z9.jpg'
import z10 from './z10.jpg'



export default class ChangeImgae extends React.Component {
    constructor(props) {
      super(props);
      this.switchImage = this.switchImage.bind(this);

      this.state = {
        currentImage: 0,
        images: [
          z1,z2,z3,z4,z5,z6,z7,z8,z9,z10
        ]
      };
    }


    switchImage() { 
        
      if (this.state.currentImage < this.state.images.length - 1) {
        this.setState({
          currentImage: this.state.currentImage + 1
        });
      } else {
        this.setState({
          currentImage: 0
        });
      }

      return this.currentImage;
    }


   
  
    componentDidMount() {
      const loop = setInterval(this.switchImage, 5000);

    }
  
    render() {
      return (
        <div className="slide">
            <AnimateOnChange
                animationIn="fadeIn"
                animationOut="fadeOut"
                durationOut={1500}>
                        <img
                        className="image"
                            src={this.state.images[this.state.currentImage]}
                            alt="error"
                        />
          </AnimateOnChange>
        </div>
      );
    }
}
