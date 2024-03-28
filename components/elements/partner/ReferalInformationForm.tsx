import { Button } from '@/components/ui/button';
import { CustomFormElement } from '@/components/ui/contact_form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TextArea } from '@/components/ui/textarea';
import { US_STATE_CODE } from '@/constants/us-state-code';
import { IcClose } from '@/ui/img-resource/ImageResources';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

export type ReferalInformation = {
  businessName: string;
  address: string;
  city: string;
  state: string;
  firstName: string;
  lastName: string;
  notes: string;
  phone: string;
};

const fromXSchema = z.object({
  businessName: z.string().min(3, {
    message: 'Business name must not be empty',
  }),

  address: z.string().min(10, {
    message: 'Address must not be empty',
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
  city: z.string().min(3, {
    message: 'City must not be empty',
  }),
  state: z.string().min(3, {
    message: 'State must not be empty',
  }),
  firstName: z.string().min(3, {
    message: 'First name must not be empty',
  }),
  lastName: z.string().min(3, {
    message: 'Last name must not be empty',
  }),
  notes: z.string(),
});

type ReferalFormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  data: ReferalInformation;
  formTitle: string;
  showCloseIcon: boolean;
  onRemoveForm: () => void;
  onSubmitedData: (data?: ReferalInformation) => void;
};

const ReferalInformationForm = forwardRef<CustomFormElement, ReferalFormProps>((props, ref) => {
  const { data, formTitle, showCloseIcon, onRemoveForm, onSubmitedData } = props;
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof fromXSchema>>({
    resolver: zodResolver(fromXSchema),
    defaultValues: {
      businessName: data.businessName,
      address: data.address,
      city: data.city,
      state: data.state,
      lastName: data.lastName,
      firstName: data.firstName,
      phone: data.phone,
      notes: data.notes,
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
        onSubmit={form.handleSubmit(onSubmitedData)}
      >
        <div className="flex flex-row justify-between">
          <p className="text-2xl-semibold">{formTitle}</p>
          {showCloseIcon && (
            <Button type="button" variant={'ghost'} onClick={onRemoveForm}>
              <IcClose className=" text-red-700" />
            </Button>
          )}
        </div>
        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Business name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-4 w-full md:gap-6 md:flex-row">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <h4 className="text-md-semibold">Contact Details</h4>
        <div className="flex flex-col gap-4 w-full md:gap-6 md:flex-row">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
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
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Notes:</FormLabel>
              <FormControl>
                <TextArea
                  {...field}
                  className="min-h-[100px]"
                  placeholder="Please provide any other information here. You can add the businesses Google profile link or website here as well."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
});

export default ReferalInformationForm;
