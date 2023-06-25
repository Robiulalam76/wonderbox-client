import React, { Component } from "react";
import Slider from "react-slick";

export default class ProductImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className="col-span-1 w-full overflow-hidden border rounded-md">
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          {this.props.images.map((img) => (
            <div className="w-full h-[400px]">
              <img
                src={img}
                alt="image"
                className="max-w-[300px] mx-auto h-full"
              />
            </div>
          ))}
        </Slider>
        <Slider
          className="mt-8"
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={this.props.images.length}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {this.props.images.map((img) => (
            <div className="w-10 h-20 p-2 border rounded cursor-pointer hover:border-blue-600">
              <img
                src={img}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
