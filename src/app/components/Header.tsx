
import Link from "next/link";

interface HeaderProps {
  font: {
    className: string;
  };
}

export default function Header({ font }: HeaderProps) {
  return (
    <header className={`${font.className} bg-[#CFA6A61C] m-0 p-0`}>
      <ul className="flex justify-end items-center gap-8 py-6 px-16 m-0">
        <li className="text-[#171717] dark:text-[#ededed] text-xl sm:text-2x font-medium">
          <Link href="/work" className="no-underline text-inherit hover:text-[#F98585]">
            Work
          </Link>
        </li>
        <li className="text-[#171717] dark:text-[#ededed] text-xl sm:text-2x font-medium">
          <Link href="/about" className="no-underline text-inherit hover:text-[#F98585]">
            About
          </Link>
        </li>
        <li className="text-[#171717] dark:text-[#ededed] text-xl sm:text-2x font-medium">
          <Link href="/contact" className="no-underline text-inherit hover:text-[#F98585]">
            Contact
          </Link>
        </li>
        <li className="text-[#171717] dark:text-[#ededed] text-xl sm:text-2x font-medium">
          <Link href="/" className="no-underline text-inherit hover:text-[#F98585]">
            Main
          </Link>
        </li>
      </ul>
    </header>
  );
}
