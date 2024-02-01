import Image from "next/image";
import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <div className="w-full h-24 flex flex-col md:flex-row md:justify-between items-center justify-center max-w-[1000px] px-4 m-auto">
      <div className="m-1">
        <p className="text-sm text-green-800 opacity-80">
          © 2022 David Gaspar. All rights reserved.
        </p>
      </div>

      <div className="flex flex-row gap-1 m-1">
        <Link
          style={{ padding: 8 }}
          href="https://twitter.com/davidgaspardev"
          target="_blank"
        >
          <Image
            width={24}
            height={24}
            src={"/static/images/svg/icon-share-twitter.svg"}
            alt="Twitter logo"
          />
        </Link>

        <Link
          style={{ padding: 8 }}
          href="https://exercism.org/profiles/davidgaspardev"
          target="_blank"
        >
          <Image
            width={24}
            height={24}
            src={"/static/images/svg/icon-share-exercism.svg"}
            alt="Exercism logo"
          />
        </Link>

        <Link
          style={{ padding: 8 }}
          href="https://github.com/davidgaspardev"
          target="_blank"
        >
          <Image
            width={24}
            height={24}
            src={"/static/images/svg/icon-share-github.svg"}
            alt="Github logo"
          />
        </Link>
      </div>
    </div>
  );
}
