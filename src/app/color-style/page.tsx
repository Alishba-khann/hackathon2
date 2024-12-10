import Image from "next/image";
import Logo from "@/app/assets/Picko Logo.png";
export default function Colors() {
  return (
    <div>
      <div className="flex w-[1440px] h-[206px] py-16 px-[120px] gap-[10px] bg-[#111111]">
        {/* top black div */}
        <div className="flex justify-between items-center w-[1200px] h-[78px]">
          <div className="flex w-[1135px] h-8 font-bold text-[32px] leading-8 tracking-[1%] text-[#FFFFFF]">
            Color Styles
          </div>
          <div>
            <Image src={Logo} alt="Picko Logo" width={65} height={78} />
          </div>
        </div>
      </div>
      {/* main body */}
      <div className="flex flex-col w-[1440px] h-[3504px] gap-9">
        <div className="flex  w-[1440px] h-[554px] border-b border-[#000000] border-opacity-[20%] py-9 pr-[10px] pl-[120px] gap-9">
          {/* 1st box */}
          <div className="flex flex-col justify-between w-[1201px] h-[482px] gap-8">
            <div className="w-[1200px] h-[34px] font-bold text-2xl leading-[34px]">
              Primary Neutral Palette
            </div>
            <div className="flex flex-col w-[1201px] h-[416px] gap-6">
              {/* color pallet */}
              <div className="flex justify-between w-[1201px] h-[196px] gap-6">
                <div className="w-[221px] h-[196px] gap-4"> {/* 1 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#0A196F]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        900
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                        #0A196F
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">   {/* 2 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#102587]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        800
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #102587
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 3 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#1A37A7]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        700
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #1A37A7
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 4 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#264BC8]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        600
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #264BC8
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">    {/* 5 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#3563E9]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Default
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        500
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #3563E9
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-[1201px] h-[196px] gap-6">
                <div className="w-[221px] h-[196px] gap-4"> {/* 1 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#658DF1]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        400
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #658DF1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">   {/* 2 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#85A8F8]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        300
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #85A8F8
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 3 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#AEC8FC]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        200
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #AEC8FC
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 4 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#D6E4FD]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        100
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #D6E4FD
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">    {/* 5 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#ffffff]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        White
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        0
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #FFFFFF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  w-[1440px] h-[554px] border-b border-[#000000] border-opacity-[20%]  py-9 pr-[10px] pl-[120px] gap-9">
          {/* 2nd box */}
          <div className="flex flex-col justify-between w-[1201px] h-[482px] gap-8">
            <div className="w-[1200px] h-[34px] font-bold text-2xl leading-[34px]">
            Success
            </div>
            <div className="flex flex-col w-[1201px] h-[416px] gap-6">
              {/* color pallet */}
              <div className="flex justify-between w-[1201px] h-[196px] gap-6">
                <div className="w-[221px] h-[196px] gap-4"> {/* 1 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#3B6506]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        900
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #3B6506
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">   {/* 2 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#4C7A0B]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        800
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #4C7A0B
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 3 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#659711]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        700
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #659711
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 4 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#7FB519]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        600
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #7FB519
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">    {/* 5 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#9CD323]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Default
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        500
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #9CD323
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start w-[1201px] h-[196px] gap-6">
                <div className="w-[221px] h-[196px] gap-4 "> {/* 1 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#BCE455]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        400
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #BCE455
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">   {/* 2 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#D3F178]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        300
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #D3F178
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 3 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#E8FAA6]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        200
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #E8FAA6
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 4 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#F5FCD2]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        100
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #F5FCD2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  w-[1440px] h-[554px] border-b border-[#000000] border-opacity-[20%]  py-9 pr-[10px] pl-[120px] gap-9">
          {/* 3rd box */}
          <div className="flex flex-col justify-between w-[1201px] h-[482px] gap-8">
            <div className="w-[1200px] h-[34px] font-bold text-2xl leading-[34px]">
               Error
            </div>
            <div className="flex flex-col w-[1201px] h-[416px] gap-6">
              {/* color pallet */}
              <div className="flex justify-between w-[1201px] h-[196px] gap-6">
                <div className="w-[221px] h-[196px] gap-4"> {/* 1 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#7A0619]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        900
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #7A0619
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">   {/* 2 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#930B16]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        800
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #930B16
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 3 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#B71112]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        700
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #B71112
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 4 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#DB2719]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        600
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #DB2719
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">    {/* 5 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#FF4423]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Default
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        500
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #FF4423
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start w-[1201px] h-[196px] gap-6">
                <div className="w-[221px] h-[196px] gap-4"> {/* 1 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#FF7F59]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        400
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #FF7F59
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">   {/* 2 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#FFA37A]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        300
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #FFA37A
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 3 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#FFC8A6]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        200
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #FFC8A6
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 4 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#FFE7D3]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        100
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #FFE7D3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  w-[1440px] h-[554px] border-b border-[#000000] border-opacity-[20%]  py-9 pr-[10px] pl-[120px] gap-9">
          {/* 4th box */}
          <div className="flex flex-col justify-between w-[1201px] h-[482px] gap-8">
            <div className="w-[1200px] h-[34px] font-bold text-2xl leading-[34px]">
            Warning
            </div>
            <div className="flex flex-col w-[1201px] h-[416px] gap-6">
              {/* color pallet */}
              <div className="flex justify-between w-[1201px] h-[196px] gap-6">
                <div className="w-[221px] h-[196px] gap-4"> {/* 1 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#7A4D0B]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        900
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #7A4D0B
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">   {/* 2 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#936312]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        800
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #936312
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 3 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#B7821D]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        700
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #B7821D
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 4 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#DBA32A]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        600
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #DBA32A
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">    {/* 5 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#FFC73A]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Default
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        500
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #FFC73A
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start w-[1201px] h-[196px] gap-6">
                <div className="w-[221px] h-[196px] gap-4"> {/* 1 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#FFD96B]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        400
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #FFD96B
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">   {/* 2 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#FFE488]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        300
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #FFE488
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 3 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#FFEFB0]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        200
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #FFEFB0
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 4 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#FFF8D7]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        100
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #FFF8D7
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  w-[1440px] h-[554px] border-b border-[#000000] border-opacity-[20%] py-9 pr-[10px] pl-[120px] gap-9">
          {/* 5th box */}
          <div className="flex flex-col justify-between w-[1201px] h-[482px] gap-8">
            <div className="w-[1200px] h-[34px] font-bold text-2xl leading-[34px]">
            Information
            </div>
            <div className="flex flex-col w-[1201px] h-[416px] gap-6">
              {/* color pallet */}
              <div className="flex justify-between w-[1201px] h-[196px] gap-6">
                <div className="w-[221px] h-[196px] gap-4"> {/* 1 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#102E7A]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        900
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #102E7A
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">   {/* 2 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#1A4393]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        800
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #1A4393
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 3 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#2A60B7]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        700
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #2A60B7
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 4 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#3D81DB]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        600
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #3D81DB
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">    {/* 5 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#54A6FF]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Default
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        500
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #54A6FF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start w-[1201px] h-[196px] gap-6">
                <div className="w-[221px] h-[196px] gap-4"> {/* 1 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#7EC2FF]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        400
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #7EC2FF
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">   {/* 2 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#98D3FF]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        300
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #98D3FF
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 3 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#BAE5FF]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        200
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #BAE5FF
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 4 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#DCF3FF]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        100
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #DCF3FF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  w-[1440px] h-[554px] border-b border-[#000000] border-opacity-[20%]  py-9 pr-[10px] pl-[120px] gap-9">
          {/* 6th box */}
          <div className="flex flex-col justify-between w-[1201px] h-[482px] gap-8">
            <div className="w-[1200px] h-[34px] font-bold text-2xl leading-[34px]">
            Secondinary
            </div>
            <div className="flex flex-col w-[1201px] h-[416px] gap-6">
              {/* color pallet */}
              <div className="flex justify-between w-[1201px] h-[196px] gap-6">
                <div className="w-[221px] h-[196px] gap-4"> {/* 1 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#040815]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        900
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #040815
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">   {/* 2 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#080C19]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        800
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #080C19
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 3 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#0D121F]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        700
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #0D121F
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 4 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#131825]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Dark
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        600
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #131825
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">    {/* 5 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#1A202C]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Default
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        500
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #1A202C
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start w-[1201px] h-[196px] gap-6 ">
                <div className="w-[221px] h-[196px] gap-4 "> {/* 1 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#596780]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1 ">
                    <div className="flex w-[221.5px] h-7 ">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        400
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7 ">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #596780
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">   {/* 2 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#90A3BF]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1 ">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        300
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #90A3BF
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 3 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#C3D4E9]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        200
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7 ">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #C3D4E9
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[221px] h-[196px] gap-4">     {/* 4 */}
                  <div className="w-[221px] h-[120px] rounded bg-[#E0E9F4]"></div>
                  <div className="flex flex-col justify-between w-[221px] h-[60px] gap-1 ">
                    <div className="flex w-[221.5px] h-7">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-start">
                        Light
                      </div>
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] text-end">
                        100
                      </div>
                    </div>
                    <div className="flex justify-between w-[221.5px] h-7 ">
                      <div className="w-[111px] h-7 font-semibold text-base leading-[28px] tracking-[1%] text-[#070304] ">
                      #E0E9F4
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
