import Head from "next/head";

type MetaTagProps = {
  title: string;
  description: string;
};

export default function MetaTag({ title, description }: MetaTagProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}

