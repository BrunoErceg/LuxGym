type OutlineTextProps = {
  children: React.ReactNode;
};

function OutlineText({ children }: OutlineTextProps) {
  return <span className={`text-outline white`}>{children}</span>;
}

export default OutlineText;
