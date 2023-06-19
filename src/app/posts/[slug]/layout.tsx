import "@/styles/prism.css";
import Script from "next/script";

export default function PostPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
      <Script type="text/javascript" src="/static/js/prism.js" />
    </section>
  );
}
