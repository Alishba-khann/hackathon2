import Image from "next/image";
import Logo from "@/app/assets/Picko Logo.png";
import { BsHeartFill } from "react-icons/bs";
import Car from "@/app/assets/Car .png";
import { FaGasPump } from "react-icons/fa6";
import Car2 from "@/app/assets/Car2.png";
import { IoPeopleSharp } from "react-icons/io5";

export default function Cards() {
  return (
    <div>
      <div className="flex w-[1440px] h-[206px] py-16 px-[120px] gap-[10px] bg-[#111111]">
        {/* top black div */}
        <div className="flex justify-between items-center w-[1200px] h-[78px]">
          <div className="flex w-[1135px] h-8 font-bold text-[32px] leading-8 tracking-[1%] text-[#FFFFFF]">
            Cards
          </div>
          <div>
            <Image src={Logo} alt="Picko Logo" width={65} height={78} />
          </div>
        </div>
      </div>
      {/* main body */}
      <div className="w-[114px] h-[29px] absolute top-[435px] left-[56px] font-semibold text-2xl leading-[28px] tracking-[1%] text-[#192252]">
        Catalogue
      </div>
      <div className="w-[109px] h-[29px] absolute top-[326px] left-[477px] font-semibold text-2xl leading-[28.8px] tracking-[1%] text-[#192252]">
        Web view
      </div>
      <div className="w-[125px] h-[29px] absolute top-[326px] left-[1107px] font-semibold text-2xl leading-[28.8px] tracking-[1%] text-[#192252]">
        Responsive
      </div>
      <div className="w-[109px] h-[29px] absolute top-[869px] left-[465px]  font-semibold text-2xl leading-[28.8px] tracking-[1%] text-[#192252]">
        Web view
      </div>
      <div className="w-[125px] h-[29px] absolute top-[869px] left-[1095px] font-semibold text-2xl leading-[28.8px] tracking-[1%] text-[#192252]">
        Responsive
      </div>
      <div className="flex justify-center w-[974px] h-[428px] absolute top-[391px] left-[332px] rounded border border-dashed border-[#3563E9]">
        <div className="w-[934px] h-[388px] top-[20px] left-[20px]">
          <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF] mt-4">
            {/*div for car image */}
            <div className="w-[128px] h-12 absolute top-6 left-6 gap-1">
              <div className="w-[128px] h-6 font-bold text-xl leading-[25.2px] text-[#1A202C]">
                CR - V
              </div>
              <div className="w-[128px] h-5 font-bold text-sm leading-[17.64px] text-[#90A3BF]">
                SUV
              </div>
            </div>
            <div className="w-6 h-6 absolute top-6 left-[256px]">
              <BsHeartFill size={24} color="#ED3F3F" />
            </div>
            <div className="w-[248px] h-[100px] absolute top-[122px] left-[46px] ">
              <Image src={Car} alt="car" width={248} height={100} />
            </div>
            <div className="w-[304px] h-[68px] absolute top-[167px] bg-[#FFFFFF] opacity-[0%]"></div>
            <div className="flex justify-between items-center w-[256px] h-6 absolute top-[272px] left-6 gap-4">
              <div className=" flex items-center w-[58px] h-6 gap-[6px]">
                <span>
                  <FaGasPump size={24} color="#90A3BF" />
                </span>
                <span className="w-7 h-6 font-medium text-sm leading-[17.64px] text-[#90A3BF] text-center">
                  80L
                </span>
              </div>
              <div className=" flex items-center w-[58px] h-6 gap-[6px] ">
                <span>
                  <Image
                    src={Car2}
                    alt="manual"
                    width={24}
                    height={24}
                    className="mb-1"
                  />
                </span>
                <span className="w-7 h-6 font-medium text-sm leading-[17.64px] text-[#90A3BF] text-center">
                  Manual
                </span>
              </div>
              <div className=" flex items-center w-[58px] h-6 gap-[6px]">
                <span>
                  <IoPeopleSharp size={24} color="#90A3BF" />
                </span>
                <span className="w-[60px] h-6 font-medium text-sm leading-[17.64px] text-[#90A3BF] text-nowrap ">
                  6 People
                </span>
              </div>
            </div>
            <div className="w-[128px] h-11 absolute top-[320px] left-6 gap-1 font-bold text-xl leading-[25.2px] text-[#1A202C]">
              $80.00/
              <span className="font-bold text-sm leading-[17.64px] text-[#90A3BF]">
                day
              </span>
            </div>
            <button className="flex items-center w-[116px] h-11 absolute top-[320px] left-[164px] rounded px-5 gap-2 bg-[#3563E9] text-white">
              <span className="w-[76px] h-6 font-semibold text-base leading-[20.16px] text-center">
                Rent Now
              </span>
            </button>
          </div>
          <div className="w-[327px] h-[240px] absolute top-[20px] left-[607px] rounded bg-white">
            {/*div for car image */}
            <div className="w-[128px] h-12 absolute top-6 left-6 gap-1">
              <div className="w-[128px] h-6 font-bold text-xl leading-[25.2px] text-[#1A202C]">
                CR - V
              </div>
              <div className="w-[128px] h-5 font-bold text-sm leading-[17.64px] text-[#90A3BF]">
                SUV
              </div>
            </div>
            <div className="w-6 h-6 absolute top-6 left-[256px]">
              <BsHeartFill size={24} color="#ED3F3F" />
            </div>
            <div className="w-[160px] h-[64px] absolute top-[82px] left-[46px] ">
              <Image src={Car} alt="car" width={248} height={100} />
            </div>
            <div>
              <div className="flex flex-col justify-between items-center w-[70px] h-[74px] absolute top-[66px] left-[230px] gap-4">
                <div className=" flex items-center w-[58px] h-6 gap-[6px]">
                  <span>
                    <FaGasPump size={24} color="#90A3BF" />
                  </span>
                  <span className="w-7 h-6 font-medium text-sm leading-[17.64px] text-[#90A3BF] text-center">
                    80L
                  </span>
                </div>
                <div className=" flex items-center w-[58px] h-6 gap-[6px] ">
                  <span>
                    <Image
                      src={Car2}
                      alt="manual"
                      width={24}
                      height={24}
                      className="mb-1"
                    />
                  </span>
                  <span className="w-7 h-6 font-medium text-sm leading-[17.64px] text-[#90A3BF] text-center">
                    Manual
                  </span>
                </div>
                <div className=" flex items-center w-[58px] h-6 gap-[6px]">
                  <span>
                    <IoPeopleSharp size={24} color="#90A3BF" />
                  </span>
                  <span className="w-[60px] h-6 font-medium text-sm leading-[17.64px] text-[#90A3BF] text-nowrap ">
                    6 People
                  </span>
                </div>
              </div>
              <div className="w-[100px] h-8 absolute top-[187px] left-6 gap-1 font-bold text-base leading-[20.16px] text-[#1A202C]">
              $80.00/
              <span className="font-bold text-sm leading-[17.64px] text-[#90A3BF]">
                day
              </span>
            </div>
            <button className="flex items-center w-[100px] h-9 absolute top-[188px] left-[211px] rounded px-5 gap-2 bg-[#3563E9] text-white">
              <span className="w-[68px] h-4 font-semibold text-xs leading-[15.12px] text-center">
                Rent Now
              </span>
            </button>
          </div>
            </div>
          </div>
        </div>
      </div>

  );
}
