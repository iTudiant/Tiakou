import { Icon as RNEIcon, IconProps as RNEIconProps } from "@rneui/themed";
import  React  from 'react';

const Icon = ({ children, ...props }: RNEIconProps) => <RNEIcon {...props} />;

export type IconProps = React.ComponentProps<typeof Icon>;
export default Icon;
