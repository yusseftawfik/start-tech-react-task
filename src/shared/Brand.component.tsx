import { FC } from "react";

type Props = {
  width: number;
  height: number;
};

const Brand: FC<Props> = ({ width, height, ...props }) => (
  <img
    {...props}
    src={`/images/logo.png`}
    alt="premitto"
    width={width}
    height={height}
  />
);

export default Brand;
