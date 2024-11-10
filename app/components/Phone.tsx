import { useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const TestPhone = ({
  value,
  setValue,
}: {
  value: any;
  setValue: (value: any) => void;
}) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
  useEffect(() => {
    const dropdown = document.querySelector(
      ".react-international-phone-country-selector-button__dropdown-arrow"
    );
    if (dropdown && !dropdown.querySelector("svg")) {
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("width", "10");
      svg.setAttribute("height", "10");
      svg.setAttribute("viewBox", "0 0 10 10");
      svg.setAttribute("fill", "none");
      svg.innerHTML = `
        <path d="M8.29995 3.72949L5.58328 6.44616C5.26245 6.76699 4.73745 6.76699 4.41662 6.44616L1.69995 3.72949" stroke="#1B1E22" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      `;
      dropdown.appendChild(svg);
    }
  }, []);

  return <PhoneInput defaultCountry="ua" value={value} onChange={setValue} />;
};

export default TestPhone;
