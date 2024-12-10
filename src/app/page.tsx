// import {Urbanist} from  'next/font/google';

import Image from "next/image";
import Logo from "@/app/assets/Picko Logo.png";
export default function Typography() {
// const urbanist = Urbanist({ subsets: ['latin'] });

  return (
    <div>
      <div className=" flex w-[1440px] h-[206px] py-16 px-[120px] gap-[10px] bg-[#111111]">
        {/* top black div */}
        <div className="flex justify-between items-center w-[1200px] h-[78px]">
          <div className="flex w-[1135px] h-8 font-bold text-[32px] leading-8 tracking-[1%] text-[#FFFFFF]">
            Text Styles
          </div>
          <div className="">
            <Image src={Logo} alt="Picko Logo" width={65} height={78} />
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center w-[1440px] h-[3826px] gap-[100px]">
        <div className="flex flex-col w-[1174px] h-[3520px] gap-[100px] ">
          <div className="flex flex-col w-[1174px] h-[805px] gap-[50px] text-[#111111]">
            {/* 1st box */}
            <div className="w-36 h-11">
              <h2 className="font-normal text-4xl leading-[44px]">Regular</h2>
            </div>
            <div className="flex flex-col w-[1051px] h-[711px] gap-8 text-[#111111] ">
              <div className="flex justify-between w-[470px] h-[15px] font-normal text-xs leading-[15.2px] tracking-[-2%]">
                <span className= "w-[39px]">text-xs</span>
                <span className="w-[25px] left-[27px]">12px</span>
                <span className="w-[27px] left-[137px]">Auto</span>
                <p className="w-[242px] left-[228px] ">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className=" flex justify-between items-center w-[504px] h-[21px]  font-normal text-xs leading-[15.12px] tracking-[-2%]">
                <span className="w-[44px] h-[15px] top-[50px]">text-sm</span>
                <span className="w-[25px] h-[15px] left-[87px] ">14px</span>
                <span className="w-8 h-[15px] left-[137px] ">140%</span>
                <p className="w-[276px] h-[21px] top-[47px] left-[228px] font-normal text-sm leading-[21px] text-nowrap">The quick brown fox jumps over the lazy dog</p> 
              </div>
              <div className="flex justify-between items-center w-[543px] h-[24px] font-normal text-xs leading-[15.12px]">
                <span className="w-[57px] h-[15px] top-[105px]">text-base</span>
                <span className="w-[26px] h-[15px] top-[105px] left-[87px]">16px</span>
                <span className="w-[33px] h-[15px] top-[105px] left-[137px]">140%</span>
                <p className="w-[315px] h-6 top-[100px] left-[228px] font-normal text-base leading-[24px] tracking-2% text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="flex justify-between items-center w-[583px] h-[27px] font-normal text-xs leading-[14.4px]">
                <span className="w-[36px] h-[14px] top-[163px] ">text-lg</span>
                <span className="w-[23px] h-[14px] top-[163px] left-[87px]">18px</span>
                <span className="w-[25px] h-[14px] top-[163px] left-[137px]">140%</span>
                <p className="w-[355px] h-[27px] top-[156px] left-[228px] font-normal text-lg leading-[27px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="flex justify-between items-center w-[622px] h-[30px] font-normal text-xs leading-[14.4px]">
              <span className="w-[36px] h-[14px] top-[222px]">text-lg</span>
                <span className="w-[27px] h-[14px] top-[222px] left-[87px]">20px</span>
                <span className="w-[25px] h-[14px] top-[222px] left-[137px]">140%</span>
                <p className="w-[394px] h-[30px] top-[215px] left-[228px] font-normal text-xl leading-[30px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="flex justify-between w-[701px] h-[36px] font-normal text-xs leading-[14.4px]">
                <span className="w-[35px] h-[14px] top-[288px] ">text-xl</span>
                <span className="w-[26px] h-[14px] top-[288px] left-[87px]">24px</span>
                <span className="w-[25px] h-[14px] top-[288px] left-[137px]">120%</span>
                <p className="w-[473px] h-36 top-[277px] left-[228px] font-normal text-[24px] leading-[36px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className=" flex justify-between items-center w-[858px] h-[48px] font-normal text-xs leading-[14.4px]">
              <span className="w-[35px] h-[14px] top-[356px]">text-xl</span>
                <span className="w-[26px] h-[14px] top-[356px] left-[87px]">32px</span>
                <span className="w-[25px] h-[14px] top-[356px] left-[137px]">140%</span>
                <p className="w-[630px] h-12 top-[356px] left-[228px] font-normal text-[32px] leading-[48px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="flex justify-between items-center w-[922px] h-[54px] font-normal text-xs leading-[14.4px] ">
              <span className="w-[42px] h-[14px] top-[448px]">text-2xl</span>
                <span className="w-[26px] h-[14px] top-[448px] left-[87px] ">36px</span>
                <span className="w-[25px] h-[14px] top-[448px] left-[137px]">120%</span>
                <p className="w-[694px] h-[54px] top-[425px] left-[228px] font-normal leading-[54px] text-4xl tracking-[-3%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="flex justify-between items-center w-[999px] h-[60px] font-normal text-xs leading-[14.4px]">
              <span className="w-[41px] h-[14px] top-[534px]">text-3xl</span>
                <span className="w-[27px] h-[14px] top-[534px] left-[87px]">40px</span>
                <span className="w-[25px] h-[14px] top-[534px] left-[137px]">120%</span>
                <p className="w-[771px] h-[60px] top-[511px] left-[228px] font-normal text-[40px] leading-[60px] tracking-[-3%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className=" flex justify-between items-center w-[1051px] h-[108px] font-normal text-xs leading-[14.4px] ">
              <span className="w-[42px] h-[14px] top-[657px]">text-4xl</span>
                <span className="w-[27px] h-[14px] top-[657px] left-[87px]">72px</span>
                <span className="w-[22px] h-[14px] top-[657px] left-[137px]">110%</span>
                <p className="w-[823px] h-[108px] top-[603px] left-[228px] font-normal text-7xl leading-[108px] tracking-[-4%] text-nowrap">The quick brown fox jumps</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[1174px] h-[805px] gap-[50px] text-[#111111]">
            {/* 2nd box */}
            <div className="w-[155px] h-11">
              <h2 className="font-medium text-[40px] leading-[44px]">Medium</h2>
            </div>
            {/* 1 */}
            <div className="flex flex-col w-[1080px] h-[711px] gap-8 text-[#111111] ">
              <div className="flex justify-between w-[468px] h-[15px] font-normal text-xs leading-[14.4px] tracking-[-2%]">
                <span className="w-[38px] h-[14px]  ">text-xs</span>
                <span className="w-[23px] h-[14px] left-[87px]">12px</span>
                <span className="w-[26px] h-[14px] left-[137px]">Auto</span>
                <p className="w-[240px] h-[14px] left-[228px] font-medium text-xs leading-[15.12px] tracking-[-2%] ">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 2 */}
              <div className="flex justify-between items-center w-[508px] h-[21px]  font-normal text-xs leading-[14.4px] tracking-[-2%]">
                <span className="w-[42px] h-[14px] top-[50px]">text-sm</span>
                <span className="w-[23px] h-[14px] top-[50px] left-[87px] ">14px</span>
                <span className="w-[25px] h-[14px] top-[50px] left-[137px] ">140%</span>
                <p className="w-[280px] h-[21px] top-[47px] left-[228px] font-medium text-sm leading-[21px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p> 
              </div>
              {/* 3 */}
              <div className="flex justify-between items-center w-[547px] h-[24px] font-normal text-xs leading-[14.4px]">
                <span className="w-[53px] h-[14px] top-[105px]">text-base</span>
                <span className="w-[23px] h-[14px] top-[105px] left-[87px]">16px</span>
                <span className="w-[25px] h-[14px] top-[105px] left-[137px]">140%</span>
                <p className="w-[319px] h-6 top-[100px] left-[228px] font-medium text-base leading-[24px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 4 */}
              <div className="flex justify-between items-center w-[583px] h-[27px] font-normal text-xs leading-[14.4px]">
                <span className="w-[36px] h-[14px] top-[163px] ">text-lg</span>
                <span className="w-[23px] h-[14px] top-[163px] left-[87px]">18px</span>
                <span className="w-[25px] h-[14px] top-[163px] left-[137px]">140%</span>
                <p className="w-[355px] h-[27px] top-[156px] left-[228px] font-medium text-lg leading-[27px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 5 */}
              <div className="flex justify-between items-center w-[627px] h-[30px] font-normal text-xs leading-[14.4px]">
              <span className="w-[36px] h-[14px] top-[222px]">text-lg</span>
                <span className="w-[27px] h-[14px] top-[222px] left-[87px]">20px</span>
                <span className="w-[25px] h-[14px] top-[222px] left-[137px]">140%</span>
                <p className="w-[399px] h-[30px] top-[215px] left-[228px] font-medium text-xl leading-[30px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 6 */}
              <div className="flex justify-between items-center w-[707px] h-[36px] font-normal text-xs leading-[14.4px]">
                <span className="w-[35px] h-[14px] top-[288px] ">text-xl</span>
                <span className="w-[26px] h-[14px] top-[288px] left-[87px]">24px</span>
                <span className="w-[25px] h-[14px] top-[288px] left-[137px]">120%</span>
                <p className="w-[479px] h-[36px] top-[277px] left-[228px] font-medium text-lg leading-[36px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 7 */}
              <div className="flex justify-between items-center w-[866px] h-[48px] font-normal text-xs leading-[14.4px]">
              <span className="w-[35px] h-[14px] top-[356px]">text-xl</span>
                <span className="w-[26px] h-[14px] top-[356px] left-[87px]">32px</span>
                <span className="w-[25px] h-[14px] top-[356px] left-[137px]">140%</span>
                <p className="w-[638px] h-12 top-[356px] left-[228px] font-medium text-[32px] leading-[48px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 8 */}
              <div className="flex justify-between items-center w-[931px] h-[54px] font-normal text-xs leading-[14.4px] ">
              <span className="w-[42px] h-[14px] top-[448px]">text-2xl</span>
                <span className="w-[26px] h-[14px] top-[448px] left-[87px] ">36px</span>
                <span className="w-[25px] h-[14px] top-[448px] left-[137px]">120%</span>
                <p className="w-[703px] h-[54px] top-[425px] left-[228px] font-medium leading-[60px] text-[40px] tracking-[-3%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 9 */}
              <div className="flex justify-between items-center w-[1009px] h-[60px] font-normal text-xs leading-[14.4px]">
              <span className="w-[41px] h-[14px] top-[534px]">text-3xl</span>
                <span className="w-[27px] h-[14px] top-[534px] left-[87px]">40px</span>
                <span className="w-[25px] h-[14px] top-[534px] left-[137px]">120%</span>
                <p className="w-[781px] h-[60px] top-[511px] left-[228px] font-medium text-[40px] leading-[60px] tracking-[-3%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 10 */}
              <div className="flex justify-between items-center w-[1080px] h-[108px] font-normal text-xs leading-[14.4px] ">
              <span className="w-[41px] h-[14px] top-[657px]">text-4xl</span>
                <span className="w-[27px] h-[14px] top-[657px] left-[87px]">72px</span>
                <span className="w-[22px] h-[14px] top-[657px] left-[137px]">110%</span>
                <p className="w-[852px] h-[108px] top-[603px] left-[228px] font-medium text-7xl leading-[108px] tracking-[-3%] text-nowrap">The quick brown fox jumps</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col w-[1174px] h-[805px] gap-[50px] text-[#111111]">
            {/* 3rd box */}
            <div className="w-[187px] h-11 ">
              <h2 className="font-semibold text-[40px] leading-[44px]">Semibold</h2>
            </div>
            {/* 1 */}
            <div className="flex flex-col w-[1091px] h-[711px] gap-8 text-[#111111] ">
              <div className="flex justify-between w-[471px] h-[15px] font-normal text-xs leading-[14.4px] tracking-[-2%]">
                <span className="w-[38px] h-[14px]  ">text-xs</span>
                <span className="w-[23px] h-[14px] left-[87px]">12px</span>
                <span className="w-[26px] h-[14px] left-[137px]">Auto</span>
                <p className="w-[243px] h-[15px] left-[228px] font-semibold text-xs leading-[15.12px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 2 */}
              <div className=" flex justify-between items-center w-[511px] h-[21px]  font-normal text-xs leading-[14.4px] tracking-[-2%]">
                <span className="w-[42px] h-[14px] top-[50px]">text-sm</span>
                <span className="w-[23px] h-[14px] top-[50px] left-[87px] ">14px</span>
                <span className="w-[25px] h-[14px] top-[50px] left-[137px] ">140%</span>
                <p className="w-[283px] h-[21px] top-[47px] left-[228px] font-semibold text-sm leading-[21px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p> 
              </div>
              {/* 3 */}
              <div className="flex justify-between items-center w-[551px] h-[24px] font-normal text-xs leading-[14.4px]">
                <span className="w-[53px] h-[14px] top-[105px]">text-base</span>
                <span className="w-[23px] h-[14px] top-[105px] left-[87px]">16px</span>
                <span className="w-[25px] h-[14px] top-[105px] left-[137px]">140%</span>
                <p className="w-[323px] h-6 top-[100px] left-[228px] font-semibold text-base leading-[24px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 4 */}
              <div className="flex justify-between items-center w-[592px] h-[27px] font-normal text-xs leading-[14.4px]">
                <span className="w-[36px] h-[14px] top-[163px] ">text-lg</span>
                <span className="w-[23px] h-[14px] top-[163px] left-[87px]">18px</span>
                <span className="w-[25px] h-[14px] top-[163px] left-[137px]">140%</span>
                <p className="w-[364px] h-[27px] top-[156px] left-[228px] font-semibold text-lg leading-[27px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 5 */}
              <div className="flex justify-between items-center w-[632px] h-[30px] font-normal text-xs leading-[14.4px]">
              <span className="w-[36px] h-[14px] top-[222px]">text-lg</span>
                <span className="w-[27px] h-[14px] top-[222px] left-[87px]">20px</span>
                <span className="w-[25px] h-[14px] top-[222px] left-[137px]">140%</span>
                <p className="w-[404px] h-[30px] top-[215px] left-[228px] font-semibold text-xl leading-[30px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 6 */}
              <div className="flex justify-between items-center w-[703px] h-[36px] font-normal text-xs leading-[14.4px]">
                <span className="w-[35px] h-[14px] top-[288px] ">text-xl</span>
                <span className="w-[26px] h-[14px] top-[288px] left-[87px]">24px</span>
                <span className="w-[25px] h-[14px] top-[288px] left-[137px]">120%</span>
                <p className="w-[475px] h-[36px] top-[277px] left-[228px] font-semibold text-2xl leading-[36px] tracking-[-3%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 7 */}
              <div className=" flex justify-between items-center w-[861px] h-12 font-normal text-xs leading-[14.4px]">
              <span className="w-[35px] h-[14px] top-[356px]">text-xl</span>
                <span className="w-[26px] h-[14px] top-[356px] left-[87px]">32px</span>
                <span className="w-[25px] h-[14px] top-[356px] left-[137px]">140%</span>
                <p className="w-[633px] h-12 top-[356px] left-[228px] font-semibold text-[32px] leading-[48px] tracking-[-3%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 8 */}
              <div className="flex justify-between items-center w-[940px] h-[54px] font-normal text-xs leading-[14.4px] ">
              <span className="w-[42px] h-[14px] top-[448px]">text-2xl</span>
                <span className="w-[26px] h-[14px] top-[448px] left-[87px] ">36px</span>
                <span className="w-[25px] h-[14px] top-[448px] left-[137px]">120%</span>
                <p className="w-[712px] h-[54px] top-[425px] left-[228px] font-semibold leading-[54px] text-4xl tracking-[-3%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 9 */}
              <div className="flex justify-between items-center w-[1019px] h-[60px] font-normal text-xs leading-[14.4px]">
              <span className="w-[42px] h-[14px] top-[534px]">text-3xl</span>
                <span className="w-[27px] h-[14px] top-[534px] left-[87px]">40px</span>
                <span className="w-[25px] h-[14px] top-[534px] left-[137px]">120%</span>
                <p className="w-[791px] h-[60px] top-[511px] left-[228px] font-semibold text-[40px] leading-[60px] tracking-[-3%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 10 */}
              <div className="flex justify-between items-center w-[1091px] h-[108px] font-normal text-xs leading-[14.4px] ">
              <span className="w-[41px] h-[14px] top-[657px]">text-4xl</span>
                <span className="w-[27px] h-[14px] top-[657px] left-[87px]">72px</span>
                <span className="w-[22px] h-[14px] top-[657px] left-[137px]">110%</span>
                <p className="w-[863px] h-[108px] top-[603px] left-[228px] font-semibold text-7xl leading-[108px] tracking-[-3%] text-nowrap">The quick brown fox jumps</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[1174px] h-[805px] gap-[50px] text-[#111111]">
            {/* 4th box */}
            <div className="w-[91px] h-11">
              <h2 className="font-bold text-[40px] leading-[44px]">Bold</h2>
            </div>
            {/* 1 */}
            <div className="flex flex-col w-[1091px] h-[711px] gap-8 text-[#111111]">
              <div className="flex justify-between w-[473px] h-[15px] font-normal text-xs leading-[14.4px] tracking-[-2%]">
                <span className="w-[38px] h-[14px]  ">text-xs</span>
                <span className="w-[23px] h-[14px] left-[87px]">12px</span>
                <span className="w-[26px] h-[14px] left-[137px]">Auto</span>
                <p className="w-[245px] h-[15px] left-[228px] font-bold text-xs leading-[15.12px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 2 */}
              <div className=" flex justify-between items-center w-[514px] h-[21px]  font-normal text-xs leading-[14.4px] tracking-[-2%]">
                <span className="w-[42px] h-[14px] top-[50px]">text-sm</span>
                <span className="w-[23px] h-[14px] top-[50px] left-[87px] ">14px</span>
                <span className="w-[25px] h-[14px] top-[50px] left-[137px] ">140%</span>
                <p className="w-[286px] h-[21px] top-[47px] left-[228px] font-bold text-sm leading-[21px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p> 
              </div>
              {/* 3 */}
              <div className="flex justify-between items-center w-[555px] h-[24px] font-normal text-xs leading-[14.4px]">
                <span className="w-[53px] h-[14px] top-[105px]">text-base</span>
                <span className="w-[23px] h-[14px] top-[105px] left-[87px]">16px</span>
                <span className="w-[25px] h-[14px] top-[105px] left-[137px]">140%</span>
                <p className="w-[327px] h-6 top-[100px] left-[228px] font-bold text-base leading-[24px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 4 */}
              <div className="flex justify-between items-center w-[588px] h-[27px] font-normal text-xs leading-[14.4px]">
                <span className="w-[36px] h-[14px] top-[163px] ">text-lg</span>
                <span className="w-[23px] h-[14px] top-[163px] left-[87px]">18px</span>
                <span className="w-[25px] h-[14px] top-[163px] left-[137px]">140%</span>
                <p className="w-[360px] h-[27px] top-[156px] left-[228px] font-bold text-lg leading-[27px] tracking-[-3%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 5 */}
              <div className="flex justify-between items-center w-[628px] h-[30px] font-normal text-xs leading-[14.4px]">
              <span className="w-[36px] h-[14px] top-[222px]">text-lg</span>
                <span className="w-[27px] h-[14px] top-[222px] left-[87px]">20px</span>
                <span className="w-[25px] h-[14px] top-[222px] left-[137px]">140%</span>
                <p className="w-[400px] h-[30px] top-[215px] left-[228px] font-bold text-xl leading-[30px] tracking-[-2%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 6 */}
              <div className="flex justify-between items-center w-[708px] h-[36px] font-normal text-xs leading-[14.4px]">
                <span className="w-[35px] h-[14px] top-[288px] ">text-xl</span>
                <span className="w-[26px] h-[14px] top-[288px] left-[87px]">24px</span>
                <span className="w-[25px] h-[14px] top-[288px] left-[137px]">120%</span>
                <p className="w-[480px] h-[36px] top-[277px] left-[228px] font-bold text-2xl leading-[36px] tracking-[-3%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 7 */}
              <div className="flex justify-between items-center w-[868px] h-12 font-normal text-xs leading-[14.4px]">
              <span className="w-[35px] h-[14px] top-[356px]">text-xl</span>
                <span className="w-[26px] h-[14px] top-[356px] left-[87px]">32px</span>
                <span className="w-[25px] h-[14px] top-[356px] left-[137px]">140%</span>
                <p className="w-[640px] h-12 top-[356px] left-[228px] font-bold text-[32px] leading-[48px] tracking-[-3%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 8 */}
              <div className="flex justify-between items-center w-[948px] h-[54px] font-normal text-xs leading-[14.4px] ">
              <span className="w-[42px] h-[14px] top-[448px]">text-2xl</span>
                <span className="w-[26px] h-[14px] top-[448px] left-[87px] ">36px</span>
                <span className="w-[25px] h-[14px] top-[448px] left-[137px]">120%</span>
                <p className="w-[720px] h-[54px] top-[425px] left-[228px] font-bold leading-[54px] text-4xl tracking-[-3%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 9 */}
              <div className="flex justify-between items-center w-[1028px] h-[60px] font-normal text-xs leading-[14.4px]">
              <span className="w-[42px] h-[14px] top-[534px]">text-3xl</span>
                <span className="w-[27px] h-[14px] top-[534px] left-[87px]">40px</span>
                <span className="w-[25px] h-[14px] top-[534px] left-[137px]">120%</span>
                <p className="w-[800px] h-[60px] top-[511px] left-[228px] font-bold text-[40px] leading-[60px] tracking-[-3%] text-nowrap">The quick brown fox jumps over the lazy dog</p>
              </div>
              {/* 10 */}
              <div className="flex justify-between items-center w-[1103px] h-[108px] font-normal text-xs leading-[14.4px] ">
              <span className="w-[41px] h-[14px] top-[657px]">text-4xl</span>
                <span className="w-[27px] h-[14px] top-[657px] left-[87px]">72px</span>
                <span className="w-[22px] h-[14px] top-[657px] left-[137px]">110%</span>
                <p className="w-[875px] h-[108px] top-[603px] left-[228px] font-bold text-7xl leading-[108px] tracking-[-3%] text-nowrap">The quick brown fox jumps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
