export default function JsonLd({ data }: { data: string }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}