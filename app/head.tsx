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
      <title>JUJU - 당신을 위한 주식정보 서비스</title>
    </>
  );
};

export default Head;
