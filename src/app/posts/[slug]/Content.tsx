"use client";

type ContentProps = {
  html: string;
};

export default function Content(props: ContentProps) {
  const { html } = props;
  return <div className="blog-style" dangerouslySetInnerHTML={{ __html: html }} />;
}
