/* ------------------------------------ import ----------------------------------- */
import TextField, { TextFieldProps } from '@mui/material/TextField';
import './input.scss';
import MaskedInput from 'react-text-mask';
import { memo } from 'react';
import { defVar } from '../../../../var';
/* ------------------------------------ type ----------------------------------- */
interface InputProps extends Omit<TextFieldProps, 'value' | 'onChange'> {
  mask?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    ochre: true;
  }
}
/* ------------------------------------ style ----------------------------------- */
const style = {
  color: defVar.ochre.dark,
  '& .MuiFilledInput-root': {
    backgroundColor: 'ochre.light',
  },
};
/* ------------------------------------ component ----------------------------------- */
const Input = memo(function Input({
  /* ------------------------------------ props ----------------------------------- */
  helperText,
  label,
  className,
  error = false,
  name,
  id,
  value,
  inputRef,
  onChange,
  placeholder,
  mask,
  ...restProps
}: InputProps) {
  /* ------------------------------------ state ----------------------------------- */
  const props: TextFieldProps = {
    className: `input ${className}`,
    ...restProps,
  };
  /* ------------------------------------ html ----------------------------------- */
  return mask ? (
    <MaskedInput
      mask={[
        '+',
        '3',
        '8',
        ' ',
        '(',
        /[0-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ]}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      render={(ref, prop) => (
        <TextField
          inputRef={ref}
          className={`input ${className}`}
          helperText={helperText}
          error={error}
          // value={value}
          {...prop}
        />
      )}
    />
  ) : (
    <TextField
      error={error}
      placeholder={placeholder}
      helperText={helperText}
      value={value}
      onChange={onChange}
      {...props}
      // variant="filled"
      sx={style}
    />
  );
});

export default Input;
