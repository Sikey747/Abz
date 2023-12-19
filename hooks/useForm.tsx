import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Positions } from '../interfaces/interfaces';
import { getPositions, addUsers } from '../src/api/api';
import useStore from '../src/store/store';

function useFormHook() {
  const [disabled, setDisabled] = useState(true);
  const [registered, setRegistered] = useState(true);
  const queryClient = useQueryClient();
  const { serIsFinishForm } = useStore();

  const { data: positions, isLoading } = useQuery<Positions[]>({
    queryKey: ['positions'],
    queryFn: () => {
      return getPositions();
    },
  });

  const mutation = useMutation({
    mutationFn: addUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const formSchema = z.object({
    name: z
      .string()
      .min(2, { message: 'Min 2 symbols' })
      .max(60, { message: 'Min 60 symbols' }),
    email: z
      .string()
      .email({ message: 'Email is required' })
      .regex(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        { message: 'Email is required' }
      ),
    phone: z
      .string()
      .regex(/^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/)
      .transform((val) => val.replace(/[^0-9+]/g, '')),
    position_id: z.number().min(1, { message: 'Required' }),
    photo: z
      .instanceof(File, { message: 'File is Required' })
      .refine((e) => e.size, 'File is Required')
      .refine((e) => e.size < 5242880, 'File is max 50 Mb')
      .refine(async (val) => {
        const file = val;
        if (file.size > 0) {
          const imageParams = new Promise<boolean>((resolve) => {
            const img = new Image();
            img.onload = () => {
              resolve(img.width > 71 && img.height > 71);
            };
            img.src = URL.createObjectURL(file);
          });

          return imageParams;
        }
        return false;
      }, 'Image must be more 70x70 pixels'),
  });

  type ValidationSchema = z.infer<typeof formSchema>;

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({ resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    if (formSchema) {
      serIsFinishForm(true);
      setDisabled(!disabled);
      mutation.mutate(data);
      reset();
      setRegistered(!registered);
    }
  };
  return {
    registered,
    handleSubmit,
    onSubmit,
    control,
    errors,
    isLoading,
    positions,
    disabled,
  };
}

export default useFormHook;
