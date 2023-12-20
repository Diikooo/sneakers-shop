import React from "react";
import { useSpring, animated, config } from "react-spring";

const withAnimation = (WrappedComponent) => {
  return function WithAnimation(props) {
    const animatedProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        reset: true,
        config: { ...config.molasses, duration: 1000 },
    });

    return <animated.div style={animatedProps}><WrappedComponent {...props} /></animated.div>;
  };
};

export default withAnimation;