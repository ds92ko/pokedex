export default async function DetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <div>Detail Page: {id}</div>;
}
