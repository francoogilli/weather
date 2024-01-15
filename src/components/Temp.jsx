import React from "react";

import SectionContainer from "./SectionContainer";
const Temp = ({ temp, conditions, resolvedAdress, icon }) => {
    const iconPath = `/icons/${icon}.png`;
    console.log(iconPath);
    return (
        <SectionContainer className="flex flex-col pt-7 items-center text-white ">
            <p className="text-[#313341] text-3xl sm:text-4xl font-extrabold pb-7 text-center">{resolvedAdress}</p>
            <img src={iconPath} width={260} className="drop-shadow-2xl pb-9"  alt="" />
            <p className="text-[#282b3a] text-6xl font-extrabold">{temp}°</p>
            <p className="text-[#303345] font-semibold text-xl sm:text-2xl">{conditions}</p>
        </SectionContainer>
    );
};
export default Temp;