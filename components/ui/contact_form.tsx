import { zodResolver } from '@hookform/resolvers/zod';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { US_STATE_CODE } from '@/constants/us-state-code';
import { Contact } from '@/models/contact.model';
import { IcLoading } from '@/ui/img-resource/ImageResources';
import { Button, ButtonProps } from './button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './form';
import { Input } from './input';

interface ContactFormProps {
  btnSubmitConfig?: {
    title?: string;
    btnProps?: ButtonProps;
    showLoading?: boolean;
  };
  showBtnSubmit?: boolean;
  onSubmitData: (data?: Contact) => void;
}

const formSchema = z.object({
  firstname: z.string().min(3, {
    message: 'First name must be not empty',
  }),

  lastname: z.string().min(3, {
    message: 'Last name must be not empty',
  }),
  phone: z
    .string()
    .min(10)
    .max(14)
    .refine(
      value => {
        const areaCode = Number(value.substring(1, 4));
        if (US_STATE_CODE.includes(areaCode)) return true;
        return false;
      },
      {
        message: 'Invalid us area code',
      },
    ),
  email: z.string().email('This is not a valid email.'),
});

export type CustomFormElement = {
  resetForm: () => void;
  submitForm: () => void;
};

const ContactForm = forwardRef<
  CustomFormElement,
  React.FormHTMLAttributes<HTMLFormElement> & ContactFormProps
>((props, ref) => {
  const { btnSubmitConfig, showBtnSubmit, onSubmitData } = props;
  const { btnProps, title, showLoading = false } = btnSubmitConfig || {};

  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastname: '',
      firstname: '',
      phone: '',
      email: '',
    },
  });

  const { setValue, getValues, reset } = form;

  useImperativeHandle(
    ref,
    () => ({
      resetForm() {
        reset();
      },
      submitForm() {
        formRef?.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      },
    }),
    [],
  );

  const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    const phoneNumber = value.replace(/[^\d]/g, '');

    if (getValues('phone').length > value.length) {
      setValue('phone', value);
      return;
    }
    if (phoneNumber.length > 10) return;
    if (phoneNumber.length < 3) value = `(${phoneNumber}`;
    else if (phoneNumber.length == 3) value = `(${phoneNumber}) `;
    else if (phoneNumber.length > 6)
      value = `(${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(
        3,
        6,
      )}-${phoneNumber.substring(6, phoneNumber.length)}`;

    setValue('phone', value);
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        className="flex flex-col gap-4 md:gap-6 w-full"
        onSubmit={form.handleSubmit(onSubmitData)}
      >
        <div className="flex flex-col gap-4 w-full md:gap-6 md:flex-row">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder="(555) 000-0000"
                  type="tel"
                  {...field}
                  onChange={onChangePhone}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {showBtnSubmit && (
          <Button
            type="submit"
            className="w-[200px] md:w-[200px] mt-4 md:mt-6 self-center gap-2"
            {...btnProps}
          >
            {showLoading && <IcLoading className="text-white" />}
            {title || 'Submit'}
          </Button>
        )}
      </form>
    </Form>
  );
});

export default ContactForm;
