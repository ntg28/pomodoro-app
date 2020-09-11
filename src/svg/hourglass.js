import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHourglass(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M334.127 240.903c4.767-4.147 10.218-8.729 15.99-13.581C392.692 191.533 451 142.519 451 91V60c0-33.084-26.916-60-60-60H121C87.916 0 61 26.916 61 60v31c0 51.519 58.308 100.533 100.883 136.323 5.772 4.852 11.223 9.434 15.99 13.581 4.529 3.941 7.127 9.443 7.127 15.097 0 5.653-2.597 11.155-7.127 15.096-4.767 4.147-10.218 8.729-15.99 13.581C119.308 320.467 61 369.481 61 421v31c0 33.084 26.916 60 60 60h270c33.084 0 60-26.916 60-60 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 11.028-8.972 20-20 20H121c-11.028 0-20-8.972-20-20v-31c0-32.888 54.224-78.469 86.621-105.704 5.905-4.963 11.483-9.652 16.506-14.022C217.392 289.733 225 273.231 225 256c0-17.232-7.608-33.734-20.872-45.275-5.023-4.369-10.601-9.058-16.506-14.022C155.224 169.469 101 123.888 101 91V60c0-11.028 8.972-20 20-20h270c11.028 0 20 8.972 20 20v31c0 32.888-54.224 78.469-86.621 105.703-5.905 4.963-11.483 9.652-16.506 14.022C294.608 222.266 287 238.768 287 256s7.608 33.734 20.872 45.274c5.235 4.553 11.067 9.435 17.242 14.604 19.458 16.287 41.511 34.747 58.918 54.387 7.326 8.266 19.966 9.027 28.233 1.702 8.266-7.326 9.028-19.966 1.702-28.233-19.383-21.87-43.667-42.196-63.179-58.529-6.024-5.043-11.715-9.806-16.661-14.109C329.598 267.155 327 261.653 327 256s2.598-11.156 7.127-15.097z" />
    </Svg>
  );
}

export default SvgHourglass;
