import React, { useEffect } from "react";
import { TweenMax, TimelineMax, Bounce, Power4 } from "gsap";

const LoadSVG = () => {
  useEffect(() => {
    TweenMax.from(".panda", 1.25, {
      scale: 0,
      transformOrigin: "50% 50%",
      ease: Bounce.easeOut,
    });

    var tl = new TimelineMax({ repeat: -1 });
    tl.add("rep");
    tl.to(
      ".eye",
      0.2,
      {
        scaleY: 0,
        repeat: 3,
        yoyo: true,
        transformOrigin: "10% 50%",
        ease: Power4.easeInOut,
      },
      "rep"
    );
    tl.to(
      ".ears",
      0.1,
      {
        rotation: 8,
        repeat: 4,
        yoyo: true,
        transformOrigin: "50% 50%",
        ease: Power4.easeInOut,
      },
      "rep+=0.75"
    );
    tl.to(
      ".nose-mouth",
      0.1,
      {
        y: 10,
        repeat: 3,
        yoyo: true,
        transformOrigin: "50% 50%",
        ease: Bounce.easeInOut,
      },
      "rep+=1"
    );
  }, []);

  return (
    <svg width="120" height="120" viewBox="0 -100 512 712">
      <g className="panda">
        <g className="ears">
          <circle fill="#4B3F4E" cx="421.16" cy="90.84" r="90.84" />
          <circle fill="#6F6571" cx="421.16" cy="90.84" r="57.806" />
          <circle fill="#4B3F4E" cx="90.84" cy="90.84" r="90.84" />
          <circle fill="#6F6571" cx="90.84" cy="90.84" r="57.806" />
        </g>
        <ellipse fill="#EDEBED" cx="256" cy="280.77" rx="239.48" ry="231.23" />

        <g className="eye">
          <ellipse
            transform="matrix(0.5 0.866 -0.866 0.5 433.1796 -178.0299)"
            fill="#4B3F4E"
            cx="370.771"
            cy="286.135"
            rx="82.578"
            ry="70.148"
          />

          <path
            fill="#5D5360"
            d="M355.097,305.548L355.097,305.548c-13.682,0-24.774-11.092-24.774-24.774v-8.258
        c0-13.682,11.092-24.774,24.774-24.774l0,0c13.682,0,24.774,11.092,24.774,24.774v8.258
        C379.871,294.457,368.779,305.548,355.097,305.548z"
          />
          <path
            fill="#6F6571"
            d="M355.097,247.742v28.903c0,6.841,5.546,12.387,12.387,12.387s12.387-5.546,12.387-12.387v-4.129
        C379.871,258.834,368.779,247.742,355.097,247.742z"
          />
          <circle fill="#FFFFFF" cx="355.1" cy="264.26" r="8.258" />
        </g>

        <path
          fill="#DBD9DC"
          d="M90.839,272.516c0-91.778,45.208-172.233,113.09-217.422
        C96.715,78.057,16.516,170.346,16.516,280.774c0,124.145,101.338,225.41,228.498,230.958
        C154.887,474.98,90.839,381.768,90.839,272.516z"
        />
        <g className="nose-mouth">
          <path
            className="mouth"
            fill="#FFFFFF"
            d="M338.581,404.645c0-18.243-22.595-33.032-50.466-33.032c-12.201,0-23.389,2.835-32.115,7.551
            c-8.726-4.716-19.914-7.551-32.115-7.551c-27.871,0-50.466,14.789-50.466,33.032c0,10.966,8.198,20.656,20.764,26.664
            c1.251,26.482,28.408,47.659,61.817,47.659s60.566-21.177,61.817-47.659C330.383,425.301,338.581,415.611,338.581,404.645z"
          />
          <path
            className="mouth"
            fill="#6F6571"
            d="M338.419,403.024c-0.883-4.415-5.157-7.234-9.565-6.431c-4.435,0.81-7.387,5.097-6.653,9.544
        c0.04,0.25,0.96,6.21-3.734,11.069c-4.024,4.169-15.371,10.565-45.972,6.597c-2.738-0.355-5.486-0.621-8.238-0.798v-20.837
        c0-4.56-3.698-5.78-8.258-5.78s-8.258,1.219-8.258,5.78v20.837c-2.753,0.177-5.5,0.443-8.238,0.798
        c-30.605,3.968-41.948-2.427-45.972-6.597c-4.694-4.859-3.774-10.819-3.758-10.94c0.895-4.476-2.004-8.823-6.476-9.718
        c-4.504-0.887-8.827,2.004-9.718,6.476c-1.04,5.21-0.589,16.391,7.71,25.274c8.246,8.827,21.867,13.266,40.625,13.266
        c6.04,0,12.621-0.46,19.718-1.383c9.532-1.242,19.202-1.242,28.734,0c29.129,3.79,49.435-0.214,60.343-11.883
        C339.008,419.415,339.46,408.234,338.419,403.024z"
          />

          <g className="nose">
            <path
              fill="#5D5360"
              d="M297.29,371.613c0,13.682-18.486,33.032-41.29,33.032s-41.29-19.35-41.29-33.032
        s18.486-24.774,41.29-24.774S297.29,357.93,297.29,371.613z"
            />
            <path
              fill="#4B3F4E"
              d="M272.516,396.387c-22.804,0-41.29-22.114-41.29-37.751c0-2.637,0.695-5.139,1.678-7.561
            c-10.977,4.453-18.195,11.989-18.195,20.538c0,13.682,18.486,33.032,41.29,33.032c10.504,0,19.984-4.189,27.272-9.955
            C279.837,395.747,276.243,396.387,272.516,396.387z"
            />
          </g>
        </g>

        <g className="eye">
          <ellipse
            transform="matrix(0.5 -0.866 0.866 0.5 -177.1563 265.3817)"
            fill="#4B3F4E"
            cx="141.253"
            cy="286.115"
            rx="82.578"
            ry="70.148"
          />

          <path
            fill="#5D5360"
            d="M156.903,305.548L156.903,305.548c-13.682,0-24.774-11.092-24.774-24.774v-8.258
        c0-13.682,11.092-24.774,24.774-24.774l0,0c13.682,0,24.774,11.092,24.774,24.774v8.258
        C181.677,294.457,170.586,305.548,156.903,305.548z"
          />
          <path
            fill="#6F6571"
            d="M156.903,247.742v28.903c0,6.841,5.546,12.387,12.387,12.387c6.841,0,12.387-5.546,12.387-12.387
        v-4.129C181.677,258.834,170.586,247.742,156.903,247.742z"
          />
          <circle fill="#FFFFFF" cx="156.9" cy="264.26" r="8.258" />
        </g>
      </g>
    </svg>
  );
};

export default LoadSVG;
