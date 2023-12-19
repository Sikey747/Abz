import { Radio as RadioMui, RadioProps } from '@mui/material/';
import Checked from '../../../assets/Checked.svg?react';
import UnChecked from '../../../assets/unChecked.svg?react';

function Radio({ value }: RadioProps) {
  return (
    <RadioMui
      value={value}
      color="secondary"
      checkedIcon={<Checked />}
      icon={<UnChecked />}
    />
  );
}

export default Radio;
