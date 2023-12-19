import './Textarea.scss';
import {
  Button,
  FormControl,
  FormControlProps,
  BaseTextFieldProps,
  FormHelperText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { ChangeEvent, memo } from 'react';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface TextAreaProps extends FormControlProps {
  value?: string;
  helperText?: string;
  placeholder?: string;
}

const Textarea = memo(function Textarea({
  children,
  placeholder,
  className,
  value,
  helperText = '',
  error = false,
  onChange,
  ...restProps
}: TextAreaProps) {
  const handlerFile = (e: any) => {
    if (onChange) {
      onChange(e.target.files[0]);
    }
  };
  return (
    <FormControl error className="text-area">
      <div className="text-area__wrapper">
        <Button
          disableRipple
          className={`text-area__button ${error ? 'Mui-error' : ''}`}
          component="label"
          variant="contained"
          aria-label="button"
        >
          {children}
          <VisuallyHiddenInput
            onChange={(e) => handlerFile(e)}
            type="file"
            accept="image/jpg, image/jpeg"
          />
        </Button>
        <TextField
          placeholder={placeholder}
          disabled
          value={value}
          className={`input text-area_input ${error ? 'Mui-error' : ''}`}
          id="outlined-multiline-flexible"
          label=""
          multiline
        />
      </div>
      <FormHelperText>{error ? helperText : ''}</FormHelperText>
    </FormControl>
  );
});

export default Textarea;
