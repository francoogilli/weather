import React from "react";

import SectionContainer from "./SectionContainer";
const Temp = ({ temp, conditions, resolvedAdress, icon }) => {
    const iconPath = `/icons/${icon}.png`;
    console.log(iconPath);
    return (
        <SectionContainer className="flex flex-col pt-7 items-center text-white ">
            <p className="text-[#313341] text-3xl sm:text-5xl font-extrabold pb-7 sm:pb-10 text-center">{resolvedAdress}</p>
            <div className="flex flex-col-reverse sm:flex-row gap-x-7 items-center">
                <div className="flex flex-col sm:gap-y-1 items-center">
                    <p className="text-[#282b3a] text-6xl sm:text-8xl font-extrabold">{temp}°</p>
                    <p className="text-[#303345] font-bold text-xl sm:text-2xl">{conditions}</p>
                </div>
                <img src={iconPath} width={260} className="drop-shadow-2xl pb-9"  alt="" />
                
            </div>
            
        </SectionContainer>
    );
};
export default Temp;