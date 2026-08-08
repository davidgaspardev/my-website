import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-row flex-wrap items-center justify-center pt-20">
      <div className="max-w-[350px] w-full mx-3">
        <Image
          src="/static/images/svg/logo-panic.svg"
          width={350}
          height={350}
          alt="Panic logo"
        />
      </div>

      <div className="mx-3 my-8 flex flex-col items-start max-w-md">
        <h1 className="font-league-spartan font-bold text-3xl text-green-800">
          404 Not Found
        </h1>
        <h3 className="font-hind-siliguri text-green-600 opacity-70 mt-2">
          Desculpa mas ainda não desenvolvi essa parte...
        </h3>

        <Link
          href="/"
          className="mt-6 self-end px-4 py-2 rounded bg-green-200 text-white uppercase tracking-wide"
        >
          ir para home
        </Link>
      </div>
    </div>
  );
}
