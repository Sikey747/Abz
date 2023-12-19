import './Form.scss';
import { Controller } from 'react-hook-form';
import Typography from '../ui/Typography/Typography';
import Textarea from '../ui/Textarea/Textarea';
import Input from '../ui/Input/Input';
import RadioButtonsGroup from '../ui/RadioButtonsGroup/RadioButtonsGroup';
import Button from '../ui/Button/Button';
import SuccessReg from '../../assets/success-image.svg?react';
import Container from '../ui/Container/Container';
import Preloader from '../ui/Preloader/Preloader';
import useForm from '../../../hooks/useForm';

function Form() {
  const {
    registered,
    handleSubmit,
    onSubmit,
    control,
    errors,
    isLoading,
    positions,
    disabled,
  } = useForm();
  return registered ? (
    <section>
      <Container>
        <div className="form">
          <Typography variant="h1" component="h1">
            Working with POST request
          </Typography>
          <form className="form__inner" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="name"
              defaultValue=""
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Input
                  placeholder="Your name"
                  onBlur={onBlur}
                  inputRef={ref}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              defaultValue=""
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Input
                  value={value}
                  placeholder="Email"
                  onChange={onChange}
                  onBlur={onBlur}
                  inputRef={ref}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="phone"
              defaultValue=""
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Input
                  value={value}
                  placeholder="Phone"
                  onChange={onChange}
                  onBlur={onBlur}
                  type="phone"
                  mask
                  inputRef={ref}
                  error={!!errors.phone}
                  helperText="+38 (XXX) XXX - XX - XX"
                />
              )}
            />
            {isLoading && (
              <Container className="container__preloader">
                <Preloader />
              </Container>
            )}
            {!isLoading && (
              <div className="form__radio">
                <Typography variant="body1" component="p">
                  Select your position
                </Typography>
                <Controller
                  control={control}
                  name="position_id"
                  defaultValue={positions && positions[0].id}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <RadioButtonsGroup
                      data={positions!}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      // error={!!errors.position_id}
                      // helperText={errors.position_id?.message}
                    />
                  )}
                />
              </div>
            )}

            <Controller
              control={control}
              name="photo"
              defaultValue={new File([], '')}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Textarea
                  value={value.name}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Upload your photo"
                  error={!!errors.photo}
                  helperText={errors.photo?.message}
                >
                  Upload
                </Textarea>
              )}
            />

            <Button disabled={!disabled} type="submit">
              Sign up
            </Button>
          </form>
        </div>
      </Container>
    </section>
  ) : (
    <section>
      <Container className="success-reg">
        <Typography variant="h1" component="h1">
          User successfully registered
        </Typography>
        <SuccessReg />
      </Container>
    </section>
  );
}

export default Form;
