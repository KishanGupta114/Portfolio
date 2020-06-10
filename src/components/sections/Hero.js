import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm" style={{ height: 630, marginTop: 100 }}>
        <div className={innerClasses}>
          <div className="hero-content">
            <h3
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Hello World :)
            </h3>
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              <span className="text-color-primary">Kishan Gupta</span>              
            </h1>
            
            <h5
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Web Developer & Software Developer
            </h5>
            <div className="container-xs">
              
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://github.com/kishangupta114"
                  >
                    GitHub Profile
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://www.linkedin.com/in/i-kishan/"
                  >
                    LinkedIn Profile
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
