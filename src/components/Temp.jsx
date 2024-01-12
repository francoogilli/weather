import React from "react";
import weather from "../assets/weather.png";
import SectionContainer from "./SectionContainer";
const Temp = () => {
    return (
        <SectionContainer className="flex flex-col pt-7 items-center text-white ">
            <p className="text-3xl sm:text-4xl font-bold pb-14">Islamabad, <span className="text-2xl font-medium">Pakistan</span></p>
            <img src={weather} width={260} className="drop-shadow-2xl"  alt="" />
            <p className="text-6xl font-bold">36.9°</p>
            <p className="text-xl sm:text-2xl">Sunny</p>
        </SectionContainer>
    );
};
export default Temp;