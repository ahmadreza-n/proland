import React, { PureComponent } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';


const items = [
  {
    src: '',
    altText: 'Header',
    caption: 'Header',
  },
];

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      animating: false,
    };

    this.next = this.next.bind(this);
  }

  setAnimating(animating) {
    this.setState({
      animating,
    });
  }

  setActiveIndex(activeIndex) {
    this.setState({
      activeIndex,
    });
  }

  next() {
    const { activeIndex, animating } = this.state;
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    this.setActiveIndex(nextIndex);
  }

  previous() {
    const { activeIndex, animating } = this.state;
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    this.setActiveIndex(nextIndex);
  }

  goToIndex(newIndex) {
    const { animating } = this.state;
    if (animating) return;
    this.setActiveIndex(newIndex);
  }

  render() {
    const slides = items.map((item) => (
      <CarouselItem
        onExiting={() => this.setAnimating(true)}
        onExited={() => this.setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          className="d-block w-100"
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    ));

    const { activeIndex } = this.state;

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Slider;
