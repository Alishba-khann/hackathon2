import Link from "next/link";
export default function Nav() {
  return (
    <div>
      <div className="flex justify-center w-[1440px] h-[51px] bg-[#111111] bg-opacity-[50%] ">
        <ul className="flex flex-row justify-between items-center w-[1000px] h-[51px] text-[#000000] py-8 px-14">
          <li>
            <Link
              href="/"
              className="text-lg font-bold hover:font-extrabold "
            >
              Typography
            </Link>
          </li>
          <li>
            <Link
              href="/content"
              className="text-lg font-bold hover:font-extrabold "
            >
              Content
            </Link>
          </li>
          <li>
            <Link
              href="/cards"
              className="text-lg font-bold hover:font-extrabold "
            >
              Cards
            </Link>
          </li>
          <li>
            <Link
              href="/button"
              className="text-lg font-bold hover:font-extrabold "
            >
              Button
            </Link>
          </li>
          <li>
            <Link
              href="/color-style"
              className="text-lg font-bold hover:font-extrabold "
            >
              Color Style
            </Link>
          </li>
          <li>
            <Link
              href="/icon/general"
              className="text-lg font-bold hover:font-extrabold "
            >
              Icon/General
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
