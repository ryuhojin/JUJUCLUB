interface Props {
  children: React.ReactNode;
}
const StockLayout = ({ children }: Props) => {
  return <div className="33">123{children}</div>;
};
export default StockLayout;
