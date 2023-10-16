import { FC, ReactNode } from "react";

type IProps = {
  children: ReactNode;
  additionalClass?: string;
  wrapperClass?: string;
};

const SectionContainer: FC<IProps> = ({
  children,
  additionalClass,
  wrapperClass,
}) => {
  return (
    <section
      className={`container mx-auto flex w-full items-center justify-center px-6 py-10 md:py-16 ${
        additionalClass ?? ``
      }`}
    >
      <div className={`w-full ${wrapperClass ?? ``}`}>{children}</div>
    </section>
  );
};

export default SectionContainer;
