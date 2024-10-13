import type {FC} from 'react';
import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';

import * as icons from './icons';

import type {IconType} from '@/types/props/icons';

type Props = {
  type: IconType;
} & SvgIconProps;

export const CustomIcon: FC<Props> = ({type, ...rest}) => (
  <SvgIcon
    className="custom-icon"
    component={icons.IconComponent[type]}
    {...rest}
  />
);
