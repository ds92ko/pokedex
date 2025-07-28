import { BiError } from 'react-icons/bi';

import { noData } from '@/components/common/no-data/index.css';
import { NoDataProps } from '@/components/common/no-data/types';
import { vars } from '@/styles/vars.css';

export default function NoData({ children }: NoDataProps) {
  return (
    <div className={noData}>
      <BiError
        size={50}
        color={vars.colors.primary}
      />
      <p>{children}</p>
    </div>
  );
}
