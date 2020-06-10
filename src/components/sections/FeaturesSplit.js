import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Projects",
    paragraph: "I have created some projects which you can see..",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Made With React JS
                </div>
                <h3 className="mt-0 mb-12">Auth With token</h3>
                <p className="m-0">
                  In this project you will see how we can authenticate the user
                  using token.
                </p>
                <div
                  className="justify-content-center"
                  style={{ marginTop: 20 }}
                >
                  <ul className="list-reset justify-content-center">
                    <li>
                      <a
                        href="https://github.com/KishanGupta114/reactjs_auth_with_token/tree/master/reactjs_auth_with_token"
                        className="button button-primary button-wide-mobile button-sm"
                      >
                        View Source
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Made With React JS
                </div>
                <h3 className="mt-0 mb-12">OTP Verify with Firebase</h3>
                <p className="m-0">
                  In this project you will see how we can verify the OTP with
                  firebase.
                </p>
                <div
                  className="justify-content-center"
                  style={{ marginTop: 20 }}
                >
                  <ul className="list-reset justify-content-center">
                    <li>
                      <a
                        href="https://github.com/KishanGupta114/OTP-Verification-with-React-Firebase"
                        className="button button-primary button-wide-mobile button-sm"
                      >
                        View Source
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Made With React Native
                </div>
                <h3 className="mt-0 mb-12">Mix Navigation</h3>
                <p className="m-0">
                  In this project you will see how we can create a React Native
                  Navigation [Drawer + Bottom Tab].
                </p>
                <div
                  className="justify-content-center"
                  style={{ marginTop: 20 }}
                >
                  <ul className="list-reset justify-content-center">
                    <li>
                      <a
                        href="https://github.com/KishanGupta114/React-Native-Navigation-Mix"
                        className="button button-primary button-wide-mobile button-sm"
                      >
                        View Source
                      </a>
                    </li>
                  </ul>
                </div>
                
              </div>
              
            </div>
            <div
                  style={{ marginTop: 20, textAlign: 'right' }}
                >
                  <ul className="list-reset justify-content-center">
                    <li>
                      <a
                        href="https://github.com/KishanGupta114?tab=repositories"
                        className="button-wide-mobile button-sm"
                      >
                        View More>>
                      </a>
                    </li>
                  </ul>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
