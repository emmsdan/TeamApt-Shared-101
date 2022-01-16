import React from "react";
import { Tween } from "react-gsap";

function Animation({ children, duration, from, ease }) {
  return (
    <Tween from={from} ease={ease} duration={duration}>
      {children}
    </Tween>
  );
}

Animation.defaultProps = {
  duration: 0.7,
  //    the from is for the properties you want to animate from eg  from: { zIndex: 1, height: 0, opacity: 0, transform: "translateY(25%)" }
  from: { height: 0 },
  //    the ease is for the gsap eases eg ease="back.out(1.4)"
  ease: "none",
};

// examples
// fade in from left ---> from: { transform: "translateX(-120%)" },
// fade in from bottom ---> from: { height: 0 },
// fade in from top right ---> from: { transform: "translate(20%, -20%)" },

export default Animation;
