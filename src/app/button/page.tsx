import Image from "next/image";
import Logo from "@/app/assets/Picko Logo.png";
import { AiFillWechat } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Button() {
  return (
    <div>
      <div className="flex w-[1440px] h-[206px] py-16 px-[120px] gap-[10px] bg-[#111111]">
        {/* top black div */}
        <div className="flex justify-between items-center w-[1200px] h-[78px]">
          <div className="flex w-[1135px] h-8 font-bold text-[32px] leading-8 tracking-[1%] text-[#FFFFFF]">
            Buttons
          </div>
          <div>
            <Image src={Logo} alt="Picko Logo" width={65} height={78} />
          </div>
        </div>
      </div>
      {/* top bar completed */}
      <div className="w-[260px] h-12 absolute top-[326px] left-[120px] font-bold text-4xl leading-[46px] tracking-[1%] text-nowrap text-[#04060F]">
        👍 Small Button
      </div>
      <div className="p-6 absolute top-[418px] left-[73px] rounded-[5px] border border-dashed border-[#3563E9]">
        <div className="">
          <div className="flex flex-row justify-between w-[1307px] h-[550px]  gap-4 ">
            {/* 1st main box */}
            <div className=" w-[610px] h-[500px]">
              <span className="w-[177px] h-[34px] absolute top-8 left-8 font-semibold text-2xl leading-[34px] tracking-[1%] text-[#1A202C] text-nowrap ">
                Primary Buttons
              </span>
              <div className="flex flex-col justify-between absolute top-20 left-8 w-[580px] h-[410px]">
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 1 */}
                  <span className="w-9 h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-28">
                    Label
                  </span>
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-48">
                    Icon-Left
                  </span>
                  <span className="w-[68px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-72">
                    Icon-Right
                  </span>
                  <span className="w-[61px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-[390px] ">
                    Icon-Only
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 2 */}
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-8">
                    Enabled
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-28 bg-[#3563E9] rounded text-center text-[#ffffff]">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-20  left-48  bg-[#3563E9]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-20  left-72   bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-[390px] bg-[#3563E9] text-center text-[#ffffff] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 3 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-8">
                    Hover
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-28 bg-[#3563E9] text-center text-[#ffffff] rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-48  bg-[#3563E9] rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-72 bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 4 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-8">
                    Pressed
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-28 bg-[#1A37A7] text-center text-[#ffffff] rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-48  bg-[#1A37A7]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-72  bg-[#1A37A7]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-8 h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-[390px] text-center text-[#ffffff] bg-[#1A37A7] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 5 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-8">
                    Label
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-28  bg-[#3563E9] text-center text-[#ffffff] rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-48  bg-[#3563E9]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-72  bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 6 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-8 ">
                    Focused
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-28 bg-[#3563E9] bg-opacity-40 text-center text-[#ffffff] rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-48  bg-[#3563E9] bg-opacity-40 rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-72 bg-[#3563E9] bg-opacity-40  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] bg-opacity-40 rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
              </div>
            </div>
            {/* 2nd main box */}
            <div className=" w-[610px] h-[500px]">
              <span className="w-[177px] h-[34px] absolute top-8 left-[724px] font-semibold text-2xl leading-[34px] tracking-[1%] text-[#1A202C] text-nowrap">
                Secondary Buttons
              </span>
              <div className="flex flex-col justify-between absolute top-20 left-[724px] w-[580px] h-[410px] ">
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 1 */}
                  <span className="w-9 h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-28">
                    Label
                  </span>
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-48">
                    Icon-Left
                  </span>
                  <span className="w-[68px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-72">
                    Icon-Right
                  </span>
                  <span className="w-[61px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-[390px] ">
                    Icon-Only
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 2 */}
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-8">
                    Enabled
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-28 text-[#90A3BF]  bg-[#ffffff] border-[1px] rounded text-center ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-20  left-48 text-[#90A3BF]  bg-[#ffffff] border-[1px]  rounded">
                    <AiFillWechat size={12} className="text-[#90A3BF]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-20  left-72 text-[#90A3BF]  bg-[#ffffff] border-[1px]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#90A#BF]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-[390px] bg-[#ffffff] text-center text-[#ffffff] rounded">
                    <AiFillWechat size={16} className="text-[#90A3BF]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 3 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-8">
                    Hover
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-28 text-[#1A202C]  bg-[#ffffff] border-[1px] border-[#1A202C] text-center rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-48  text-[#1A202C]  bg-[#ffffff] border-[1px] border-[#1A202C] rounded">
                    <AiFillWechat size={12} className="text-[#90A3BF]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-72 text-[#1A202C]  bg-[#ffffff] border-[1px] border-[#1A202C]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#90A3BF]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-[390px] text-center bg-[#ffffff] border-[1px] border-[#1A202C] rounded">
                    <AiFillWechat size={16} className="text-[#1A202C]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 4 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-8">
                    Pressed
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-28 bg-[#D6E4FD] border-[1px] border-[#8191aa] text-center text-[#1A202C] rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-48 bg-[#D6E4FD] border-[1px] border-[#8191aa] rounded">
                    <AiFillWechat size={12} className="text-[#1A202C]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#1A202C]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-72  bg-[#D6E4FD] border-[1px] border-[#8191aa] rounded">
                    <RiArrowDropDownLine size={12} className="text-[#1A202C]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#1A202C]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-8 h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-[390px] text-center bg-[#D6E4FD] border-[1px] border-[#8191aa] rounded">
                    <AiFillWechat size={16} className="text-[#1A202C]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 5 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-8">
                    Focused
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-28 bg-[#ffffff] text-[#596780] border border-[#596780] text-center  rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-48   bg-[#ffffff] text-[#596780] border border-[#596780] rounded">
                    <AiFillWechat size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-72  bg-[#ffffff] text-[#596780] border border-[#596780]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-[390px] text-center bg-[#ffffff] border border-[#596780] rounded">
                    <AiFillWechat size={16} className="text-[#506780]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 6 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-8 ">
                    Disable
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-28 bg-[#ffffff] text-[#596780] border border-[#D6E4FD] text-center  rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-48 bg-[#ffffff] text-[#596780] border border-[#D6E4FD] rounded">
                    <AiFillWechat size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-72 bg-[#ffffff] text-[#596780] border border-[#D6E4FD] rounded">
                    <RiArrowDropDownLine size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-[390px] text-center bg-[#ffffff] border border-[#D6E4FD] rounded">
                    <AiFillWechat size={16} className="text-[#596780]" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*3rd */}
          <div>
            <div className=" w-[610px] h-[500px]">
              <span className="w-[177px] h-[34px] absolute top-[574px] left-8 font-semibold text-2xl leading-[34px] tracking-[1%] text-[#1A202C] text-nowrap">
                Minimal Buttons
              </span>
              <div className="flex flex-col justify-between absolute top-[624px] left-8 w-[580px] h-[410px]">
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 1 */}
                  <span className="w-9 h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-28">
                    Label
                  </span>
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-48">
                    Icon-Left
                  </span>
                  <span className="w-[68px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-72">
                    Icon-Right
                  </span>
                  <span className="w-[61px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-[390px] ">
                    Icon-Only
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 2 */}
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-8">
                    Enabled
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-28 bg-transparent  text-[#C3D4E9] rounded text-center">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-20  left-48  bg-transparent  text-[#C3D4E9]  rounded">
                    <AiFillWechat size={12} className="text-[#C3D4E9]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-20  left-72   bg-transparent  text-[#C3D4E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[C3D4E9]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[C3D4E9]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-[390px]bg-transparent  text-[#C3D4E9] text-center rounded">
                    <AiFillWechat size={16} className="text-[#1A202C]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 3 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-8">
                    Hover
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-28 bg-[#ffffff]  text-[#1A202C] text-center rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-48 bg-[#ffffff]  text-[#1A202C]  rounded">
                    <AiFillWechat size={12} className="text-[#1A202C]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-72 bg-[#ffffff]  text-[#1A202C]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#1A202C]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-[390px] text-center bg-[#ffffff]  text-[#1A202C] rounded">
                    <AiFillWechat size={16} className="text-[#1A202C]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 4 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-8">
                    Pressed
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-28 bg-[#1A37A7] text-center text-[#ffffff] rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-48  bg-[#1A37A7]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-72  bg-[#1A37A7]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-8 h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-[390px] text-center text-[#ffffff] bg-[#1A37A7] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 5 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-8">
                    Label
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-28  bg-[#3563E9] text-center text-[#ffffff] rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-48  bg-[#3563E9]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-72  bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 6 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-8 ">
                    Focused
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-28 bg-[#3563E9] bg-opacity-40 text-center text-[#ffffff] rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-48  bg-[#3563E9]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-72 bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] bg-opacity-40 rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------------------------------ */}

        {/* second main box */}
        <div className="w-[305px] h-12 font-bold text-4xl leading-[46px] tracking-[1%] text-[#1A202C]">
          🔥Medium Button
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between w-[1307px] h-[550px] gap-4">
            {/* 1st main box */}
            <div className=" w-[610px] h-[500px]">
              <span className="w-[177px] h-[34px] absolute top-[1137px] left-8 font-semibold text-2xl leading-[34px] tracking-[1%] text-[#1A202C] text-nowrap ">
                Primary Buttons
              </span>
              <div className="flex flex-col justify-between absolute top-[1187px] left-8 w-[580px] h-[410px]">
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 1 */}
                  <span className="w-9 h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-28">
                    Label
                  </span>
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-48">
                    Icon-Left
                  </span>
                  <span className="w-[68px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-72">
                    Icon-Right
                  </span>
                  <span className="w-[61px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-[390px] ">
                    Icon-Only
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 2 */}
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-8">
                    Enabled
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-28 bg-[#3563E9] rounded text-center text-[#ffffff]">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-20  left-48  bg-[#3563E9]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-20  left-72   bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-[390px] bg-[#3563E9] text-center text-[#ffffff] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 3 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-8">
                    Hover
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-28 bg-[#3563E9] text-center text-[#ffffff] rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-48  bg-[#3563E9] rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-72 bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 4 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-8">
                    Pressed
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-28 bg-[#1A37A7] text-center text-[#ffffff] rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-48  bg-[#1A37A7]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-72  bg-[#1A37A7]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-8 h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-[390px] text-center text-[#ffffff] bg-[#1A37A7] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 5 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-8">
                    Label
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-28  bg-[#3563E9] text-center text-[#ffffff] rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-48  bg-[#3563E9]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-72  bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 6 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-8 ">
                    Focused
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-28 bg-[#3563E9] bg-opacity-40 text-center text-[#ffffff] rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-48  bg-[#3563E9] bg-opacity-40 rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-72 bg-[#3563E9] bg-opacity-40  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] bg-opacity-40 rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
              </div>
            </div>
            {/* 2nd main box */}
            <div className=" w-[610px] h-[500px]">
              <span className="w-[177px] h-[34px] absolute top-[1137px] left-[724px] font-semibold text-2xl leading-[34px] tracking-[1%] text-[#1A202C] text-nowrap">
                Secondary Buttons
              </span>
              <div className="flex flex-col justify-between absolute top-[1187px] left-[724px] w-[580px] h-[410px] ">
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 1 */}
                  <span className="w-9 h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-28">
                    Label
                  </span>
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-48">
                    Icon-Left
                  </span>
                  <span className="w-[68px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-72">
                    Icon-Right
                  </span>
                  <span className="w-[61px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-[390px] ">
                    Icon-Only
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 2 */}
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-8">
                    Enabled
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-28 text-[#90A3BF]  bg-[#ffffff] border-[1px] rounded text-center ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-20  left-48 text-[#90A3BF]  bg-[#ffffff] border-[1px]  rounded">
                    <AiFillWechat size={12} className="text-[#90A3BF]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-20  left-72 text-[#90A3BF]  bg-[#ffffff] border-[1px]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#90A#BF]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-[390px] bg-[#ffffff] text-center text-[#ffffff] rounded">
                    <AiFillWechat size={16} className="text-[#90A3BF]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 3 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-8">
                    Hover
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-28 text-[#1A202C]  bg-[#ffffff] border-[1px] border-[#1A202C] text-center rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-48  text-[#1A202C]  bg-[#ffffff] border-[1px] border-[#1A202C] rounded">
                    <AiFillWechat size={12} className="text-[#90A3BF]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-72 text-[#1A202C]  bg-[#ffffff] border-[1px] border-[#1A202C]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#90A3BF]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-[390px] text-center bg-[#ffffff] border-[1px] border-[#1A202C] rounded">
                    <AiFillWechat size={16} className="text-[#1A202C]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 4 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-8">
                    Pressed
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-28 bg-[#D6E4FD] border-[1px] border-[#8191aa] text-center text-[#1A202C] rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-48 bg-[#D6E4FD] border-[1px] border-[#8191aa] rounded">
                    <AiFillWechat size={12} className="text-[#1A202C]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#1A202C]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-72  bg-[#D6E4FD] border-[1px] border-[#8191aa] rounded">
                    <RiArrowDropDownLine size={12} className="text-[#1A202C]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#1A202C]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-8 h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-[390px] text-center bg-[#D6E4FD] border-[1px] border-[#8191aa] rounded">
                    <AiFillWechat size={16} className="text-[#1A202C]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 5 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-8">
                    Focused
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-28 bg-[#ffffff] text-[#596780] border border-[#596780] text-center  rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-48   bg-[#ffffff] text-[#596780] border border-[#596780] rounded">
                    <AiFillWechat size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-72  bg-[#ffffff] text-[#596780] border border-[#596780]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-[390px] text-center bg-[#ffffff] border border-[#596780] rounded">
                    <AiFillWechat size={16} className="text-[#506780]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 6 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-8 ">
                    Disable
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-28 bg-[#ffffff] text-[#596780] border border-[#D6E4FD] text-center  rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-48 bg-[#ffffff] text-[#596780] border border-[#D6E4FD] rounded">
                    <AiFillWechat size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-72 bg-[#ffffff] text-[#596780] border border-[#D6E4FD] rounded">
                    <RiArrowDropDownLine size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-[390px] text-center bg-[#ffffff] border border-[#D6E4FD] rounded">
                    <AiFillWechat size={16} className="text-[#596780]" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[610px] h-[500px]">
              <span className="w-[177px] h-[34px] absolute top-[1678px] left-8 font-semibold text-2xl leading-[34px] tracking-[1%] text-[#1A202C] text-nowrap">
                Minimal Buttons
              </span>
              <div className="flex flex-col justify-between absolute top-[1728px] left-8 w-[580px] h-[410px] ">
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 1 */}
                  <span className="w-9 h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-28">
                    Label
                  </span>
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-48">
                    Icon-Left
                  </span>
                  <span className="w-[68px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-72">
                    Icon-Right
                  </span>
                  <span className="w-[61px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-[390px] ">
                    Icon-Only
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 2 */}
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-8">
                    Enabled
                  </span>
                  <span className="w-[63px] h-[37px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-28 bg-transparent rounded text-center text-[#596780]">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[85px] h-[37px] gap-1 absolute top-20  left-48  bg-transparent  rounded">
                    <AiFillWechat size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#596780]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[37px] gap-1 absolute top-20  left-72   bg-transparent  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#596780]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[38px] h-[38px] font-bold text-xs leading-6 tracking-[1%] text-nowrap absolute top-20 left-[390px] bg-transparent text-center text-[#596780] rounded">
                    <AiFillWechat size={16} className="text-[#596780]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 3 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-8">
                    Hover
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-28 bg-[#3563E9] text-center text-[#ffffff] rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-48  bg-[#3563E9] rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-72 bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 4 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-8">
                    Pressed
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-28 bg-[#1A37A7] text-center text-[#ffffff] rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-48  bg-[#1A37A7]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-72  bg-[#1A37A7]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-8 h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-[390px] text-center text-[#ffffff] bg-[#1A37A7] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 5 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-8">
                    Label
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-28  bg-[#3563E9] text-center text-[#ffffff] rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-48  bg-[#3563E9]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-72  bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12 ">
                  {/* 6 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-8 ">
                    Focused
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-28 bg-[#3563E9] bg-opacity-40 text-center text-[#ffffff] rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-48  bg-[#3563E9]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-72 bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] bg-opacity-40 rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
              </div>
            </div>
          {/* ---------------------------------------------------------------------------------------------------------- */}
        </div>
        {/* third main box */}
        <div className="w-[262px] h-12 font-bold text-4xl leading-[46px] tracking-[1%] text-[#1A202C] text-nowrap">
          🏅Large Button
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-row justify-between w-[1307px] h-[550px] gap-4 ">
            {/* 1st main box */}
            <div className=" w-[610px] h-[500px]">
              <span className="w-[177px] h-[34px] absolute top-[2237px] left-8 font-semibold text-2xl leading-[34px] tracking-[1%] text-[#1A202C] text-nowrap">
                Primary Buttons
              </span>
              <div className="flex flex-col justify-between absolute top-[2287px] left-8 w-[580px] h-[410px]">
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 1 */}
                  <span className="w-9 h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-28">
                    Label
                  </span>
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-48">
                    Icon-Left
                  </span>
                  <span className="w-[68px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-72">
                    Icon-Right
                  </span>
                  <span className="w-[61px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-[390px] ">
                    Icon-Only
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 2 */}
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-8">
                    Enabled
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-28 bg-[#3563E9] rounded text-center text-[#ffffff]">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-20  left-48  bg-[#3563E9]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-20  left-72   bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-[390px] bg-[#3563E9] text-center text-[#ffffff] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 3 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-8">
                    Hover
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-28 bg-[#3563E9] text-center text-[#ffffff] rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-48  bg-[#3563E9] rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-72 bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 4 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-8">
                    Pressed
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-28 bg-[#1A37A7] text-center text-[#ffffff] rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-48  bg-[#1A37A7]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-72  bg-[#1A37A7]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-8 h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-[390px] text-center text-[#ffffff] bg-[#1A37A7] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 5 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-8">
                    Label
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-28  bg-[#3563E9] text-center text-[#ffffff] rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-48  bg-[#3563E9]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-72  bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 6 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-8 ">
                    Focused
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-28 bg-[#3563E9] bg-opacity-40 text-center text-[#ffffff] rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-48  bg-[#3563E9] bg-opacity-40 rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-72 bg-[#3563E9] bg-opacity-40  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] bg-opacity-40 rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
              </div>
            </div>
            {/* 2nd main box */}
            <div className=" w-[610px] h-[500px]">
              <span className="w-[177px] h-[34px] absolute top-[2237px] left-[724px] font-semibold text-2xl leading-[34px] tracking-[1%] text-[#1A202C] text-nowrap ">
                Secondary Buttons
              </span>
              <div className="flex flex-col justify-between absolute top-[2287px] left-[724px] w-[580px] h-[410px] ">
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 1 */}
                  <span className="w-9 h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-28">
                    Label
                  </span>
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-48">
                    Icon-Left
                  </span>
                  <span className="w-[68px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-72">
                    Icon-Right
                  </span>
                  <span className="w-[61px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-[390px] ">
                    Icon-Only
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 2 */}
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-8">
                    Enabled
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-28 text-[#90A3BF]  bg-[#ffffff] border-[1px] rounded text-center ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-20  left-48 text-[#90A3BF]  bg-[#ffffff] border-[1px]  rounded">
                    <AiFillWechat size={12} className="text-[#90A3BF]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-20  left-72 text-[#90A3BF]  bg-[#ffffff] border-[1px]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#90A#BF]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-[390px] bg-[#ffffff] text-center text-[#ffffff] rounded">
                    <AiFillWechat size={16} className="text-[#90A3BF]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 3 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-8">
                    Hover
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-28 text-[#1A202C]  bg-[#ffffff] border-[1px] border-[#1A202C] text-center rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-48  text-[#1A202C]  bg-[#ffffff] border-[1px] border-[#1A202C] rounded">
                    <AiFillWechat size={12} className="text-[#90A3BF]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-72 text-[#1A202C]  bg-[#ffffff] border-[1px] border-[#1A202C]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#90A3BF]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-[390px] text-center bg-[#ffffff] border-[1px] border-[#1A202C] rounded">
                    <AiFillWechat size={16} className="text-[#1A202C]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 4 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-8">
                    Pressed
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-28 bg-[#D6E4FD] border-[1px] border-[#8191aa] text-center text-[#1A202C] rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-48 bg-[#D6E4FD] border-[1px] border-[#8191aa] rounded">
                    <AiFillWechat size={12} className="text-[#1A202C]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#1A202C]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-72  bg-[#D6E4FD] border-[1px] border-[#8191aa] rounded">
                    <RiArrowDropDownLine size={12} className="text-[#1A202C]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#1A202C]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-8 h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-[390px] text-center bg-[#D6E4FD] border-[1px] border-[#8191aa] rounded">
                    <AiFillWechat size={16} className="text-[#1A202C]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 5 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-8">
                    Focused
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-28 bg-[#ffffff] text-[#596780] border border-[#596780] text-center  rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-48   bg-[#ffffff] text-[#596780] border border-[#596780] rounded">
                    <AiFillWechat size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-72  bg-[#ffffff] text-[#596780] border border-[#596780]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-[390px] text-center bg-[#ffffff] border border-[#596780] rounded">
                    <AiFillWechat size={16} className="text-[#506780]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 6 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-8 ">
                    Disable
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-28 bg-[#ffffff] text-[#596780] border border-[#D6E4FD] text-center  rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-48 bg-[#ffffff] text-[#596780] border border-[#D6E4FD] rounded">
                    <AiFillWechat size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-72 bg-[#ffffff] text-[#596780] border border-[#D6E4FD] rounded">
                    <RiArrowDropDownLine size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-[390px] text-center bg-[#ffffff] border border-[#D6E4FD] rounded">
                    <AiFillWechat size={16} className="text-[#596780]" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[610px] h-[500px]">
              <span className="w-[177px] h-[34px] absolute top-[2788px] left-8 font-semibold text-2xl leading-[34px] tracking-[1%] text-[#1A202C] text-nowrap border-4 border-pink-700">
                Minimal Buttons
              </span>
              <div className="flex flex-col justify-between absolute top-[2838px] left-8 w-[580px] h-[410px]">
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 1 */}
                  <span className="w-9 h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-28">
                    Label
                  </span>
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-48">
                    Icon-Left
                  </span>
                  <span className="w-[68px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-72">
                    Icon-Right
                  </span>
                  <span className="w-[61px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-4 left-[390px] ">
                    Icon-Only
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 2 */}
                  <span className="w-[59px] h-6 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-8">
                    Enabled
                  </span>
                  <span className="w-[63px] h-[37px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-20 left-28 bg-transparent rounded text-center text-[#596780]">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[85px] h-[37px] gap-1 absolute top-20  left-48  bg-transparent  rounded">
                    <AiFillWechat size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#596780]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[37px] gap-1 absolute top-20  left-72   bg-transparent  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#596780]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#596780]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[38px] h-[38px] font-bold text-xs leading-6 tracking-[1%] text-nowrap absolute top-20 left-[390px] bg-transparent text-center text-[#596780] rounded">
                    <AiFillWechat size={16} className="text-[#596780]" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 3 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-8">
                    Hover
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-28 bg-[#3563E9] text-center text-[#ffffff] rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-48  bg-[#3563E9] rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[150px] left-72 bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[150px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 4 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-8">
                    Pressed
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-28 bg-[#1A37A7] text-center text-[#ffffff] rounded ">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-48  bg-[#1A37A7]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-56 left-72  bg-[#1A37A7]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-8 h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-56 left-[390px] text-center text-[#ffffff] bg-[#1A37A7] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 5 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-8">
                    Label
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-28  bg-[#3563E9] text-center text-[#ffffff] rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-48  bg-[#3563E9]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute top-[295px] left-72  bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[295px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
                <div className="flex flex-row justify-center w-[540px] h-12">
                  {/* 6 */}
                  <span className="w-9 h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-8 ">
                    Focused
                  </span>
                  <span className="w-[63px] h-[29px] font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-28 bg-[#3563E9] bg-opacity-40 text-center text-[#ffffff] rounded">
                    Label
                  </span>
                  <div className="flex justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-48  bg-[#3563E9]  rounded">
                    <AiFillWechat size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center w-[83px] h-[29px] gap-1 absolute  top-[365px] left-72 bg-[#3563E9]  rounded">
                    <RiArrowDropDownLine size={12} className="text-[#ffffff]" />
                    <span className="font-bold text-sm leading-6 tracking-[1%] text-nowrap text-center text-[#ffffff]">
                      Label
                    </span>
                  </div>
                  <span className="flex justify-center items-center w-[32px] h-8 font-bold text-sm leading-6 tracking-[1%] text-nowrap absolute top-[365px] left-[390px] text-center text-[#ffffff] bg-[#3563E9] bg-opacity-40 rounded">
                    <AiFillWechat size={16} className="text-white" />
                  </span>
                </div>
              </div>
            </div>
            {/* -- */}
      </div>
      </div>
    </div>
  );
}
