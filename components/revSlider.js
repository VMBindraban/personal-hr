const RevSliderComponent = ({ attributes }) => {
  return (
    <>
      <section className="rev_slider_wrapper">
        <div id="slider1" className="rev_slider" data-version="5.0">
          <ul>
            <li
              className="gradient-overlay"
              data-transition="slotzoom-horizontal"
              data-slotamount="1"
              data-masterspeed="1000"
              data-saveperformance="off"
            >
              <div
                className="tp-caption lfr sfb tp-resizeme start"
                data-x="left"
                data-hoffset="-100"
                data-y="top"
                data-voffset="-200"
                data-speed="1500"
                data-start="0"
                data-easing="easeOutExpo"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.03"
                data-endelementdelay="0.3"
                data-endspeed="1200"
                data-endeasing="Power4.easeIn"
              >
                <img src="images/main-slider/7.png" alt="" />
              </div>

              <div
                className="tp-caption lfb sfb tp-resizeme start"
                data-x="left"
                data-hoffset="375"
                data-y="top"
                data-voffset="250"
                data-speed="1500"
                data-start="500"
                data-easing="easeOutExpo"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.03"
                data-endelementdelay="0.3"
                data-endspeed="1200"
                data-endeasing="Power4.easeIn"
              >
                <div className="slider-text">
                  <h1>{attributes.slider_title || ''}</h1>
                  <p>{attributes.silder_text || ''}</p>
                </div>
              </div>

              <div
                className="tp-caption lft sfb tp-resizeme start"
                data-x="left"
                data-hoffset="0"
                data-y="center"
                data-voffset="-50"
                data-speed="1500"
                data-start="1000"
                data-easing="easeOutExpo"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.01"
                data-endelementdelay="0.3"
                data-endspeed="1200"
                data-endeasing="Power4.easeIn"
              >
                <img src="images/main-slider/1.png" alt="" />
              </div>

              <div
                className="tp-caption lfr sfb tp-resizeme start"
                data-x="right"
                data-hoffset="150"
                data-y="top"
                data-voffset="-40"
                data-speed="1500"
                data-start="2000"
                data-easing="easeOutExpo"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.01"
                data-endelementdelay="0.3"
                data-endspeed="1200"
                data-endeasing="Power4.easeIn"
              >
                <img src="images/main-slider/3.png" alt="" />
              </div>

              <div
                className="tp-caption lfr sfb tp-resizeme start"
                data-x="right"
                data-hoffset="310"
                data-y="top"
                data-voffset="125"
                data-speed="1500"
                data-start="2500"
                data-easing="easeOutExpo"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.01"
                data-endelementdelay="0.3"
                data-endspeed="1200"
                data-endeasing="Power4.easeIn"
              >
                <div className="image-4">
                  <img src="images/main-slider/4.png" alt="" />
                </div>
              </div>

              <div
                className="tp-caption lfb sfb tp-resizeme start"
                data-x="right"
                data-hoffset="200"
                data-y="center"
                data-voffset="0"
                data-speed="1500"
                data-start="3000"
                data-easing="easeOutExpo"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.01"
                data-endelementdelay="0.3"
                data-endspeed="1200"
                data-endeasing="Power4.easeIn"
              >
                <img src="images/main-slider/5.png" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default RevSliderComponent;
