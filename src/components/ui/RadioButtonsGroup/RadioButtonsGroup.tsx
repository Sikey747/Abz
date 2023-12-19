import { RadioGroup, RadioGroupProps } from '@mui/material/';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '../RadioButton/RadioButton';
import './RadioButtonsGroup.scss';
import { Positions } from '../../../../interfaces/interfaces';

interface RadioButtonsGroupProps extends RadioGroupProps {
  data: Positions[];
  error?: boolean;
  defaultValue?: number;
}

function RadioButtonsGroup({
  data,
  value,
  defaultValue = data[0].id,
  className,
  error,
  onChange,
}: RadioButtonsGroupProps) {
  return (
    <FormControl error className={`radioButtonsGroup ${className}`}>
      <RadioGroup
        defaultValue={defaultValue}
        value={value}
        name="radio-buttons-group"
        onChange={(e, selected) => onChange && onChange(e, selected)}
      >
        {data.map((el) => {
          return (
            <FormControlLabel
              key={el.name}
              value={el.id}
              label={el.name}
              control={<Radio />}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonsGroup;
