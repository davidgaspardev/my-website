import { ReactNode } from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";

type LayoutProps = {
  className?: string;
  paddingToAppBar?: boolean;
  children: ReactNode;
};

export default function Layout(props: LayoutProps): JSX.Element {
  const { children, className, paddingToAppBar } = props;

  return (
    <main
      className={`w-full bg-[#f1fbfa] min-h-screen ${className || ""}${
        paddingToAppBar ? " pt-[65px]" : ""
      }`.trim()}
    >
      <AppBar />
      {children}
      <Footer />
    </main>
  );
}
