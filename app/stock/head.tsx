import Meta from "components/core/Meta";

interface Props {
  params?: {
    slug: string;
  };
}

const Head = ({ params }: Props) => {
  return (
    <>
      <Meta />
      <title></title>
    </>
  );
};

export default Head;
