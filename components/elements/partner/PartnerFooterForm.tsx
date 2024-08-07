import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { US_STATE_CODE } from '@/constants/us-state-code';
import { Contact } from '@/models/contact.model';
import { IcLoading } from '@/ui/img-resource/ExIcon';
import { zodResolver } from '@hookform/resolvers/zod';
import { DatePicker } from 'antd';
import { Dayjs } from 'dayjs';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

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
  city: z.string().min(3, 'Please input your city'),
  state: z.string().min(3, 'Please input your state'),
  email: z.string().email('This is not a valid email.'),
  profession: z.string().min(3, 'Current profession must not be empty'),
  date: z.string().min(3, 'Please select date'),
  time: z.string().min(3, 'Please select time'),
  haveRelationship: z.string().optional(),
});

const defaultTime = ['9 AM', '10 AM', '11 AM', '12 PM'];
const PartnerFooterForm = ({
  showLoading,
  onSubmitData,
}: {
  onSubmitData: (data?: Contact) => void;
  showLoading?: boolean;
}) => {
  const { t } = useTranslation('common');
  const { t: partner } = useTranslation('partner');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastname: '',
      firstname: '',
      phone: '',
      email: '',
      date: '',
      profession: '',
      city: '',
      state: '',
      haveRelationship: 'no',
      time: defaultTime[0],
    },
  });
  const { setValue, getValues } = form;
  const isHaveRelationship = form.watch('haveRelationship') == 'yes';

  const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    if (getValues('phone').length > value.length) {
      setValue('phone', value);
      return;
    }
    const phoneNumber = value.replace(/[^\d]/g, '');
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

  const disableDate = (date: Dayjs) => {
    const day = date.get('day');
    return isHaveRelationship ? day == 0 || day == 6 : day == 0;
  };
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 md:gap-6 w-full"
        onSubmit={form.handleSubmit(onSubmitData)}
      >
        <div className="flex flex-col gap-4 w-full md:gap-6 md:flex-row">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="flex-1 ">
                <FormLabel>{t('first_name')}</FormLabel>
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
                <FormLabel>{t('last_name')}</FormLabel>
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
              <FormLabel>{t('phone')}</FormLabel>
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
        <div className="flex flex-col gap-4 w-full md:gap-6 md:flex-row">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1 ">
                <FormLabel>{t('city')}</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>{t('state')}</FormLabel>
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('email')}</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="profession"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{partner('current_profession')}</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="haveRelationship"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>{`Do you have existing relationships with business owners?`}</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="flex h-10 w-full rounded-md border-2 border-neutral-300 bg-white px-3 py-2 text-base 
          file:border-0 file:text-sm file:font-medium 
          placeholder:text-slate-500 
          focus-visible:outline-none focus:border-blue-500"
                >
                  {['no', 'yes'].map(item => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-3">
          <FormLabel className=" whitespace-pre-wrap">
            {isHaveRelationship
              ? 'Schedule a time with our account manager to learn more about the program'
              : partner('txt_desc')}
          </FormLabel>
          <div className="flex flex-col gap-4 lg:flex-row">
            <FormField
              control={form.control}
              name="date"
              render={() => (
                <FormItem>
                  <FormControl className=" flex flex-col">
                    <DatePicker
                      name="date"
                      disabledDate={disableDate}
                      className="p-[6px]"
                      onChange={date => {
                        if (!date) setValue('date', '');
                        else setValue('date', date.format('YYYY-MM-DD'));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <select
                      {...field}
                      className="flex h-10 w-full rounded-md border-2 border-neutral-300 bg-white px-3 py-2 text-base 
          file:border-0 file:text-sm file:font-medium 
          placeholder:text-slate-500 
          focus-visible:outline-none focus:border-blue-500"
                    >
                      {defaultTime.map(time => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit" className="w-[200px] md:w-[200px] mt-4 md:mt-6 self-center gap-2">
          {showLoading && <IcLoading className="text-white" />}
          {t('submit')}
        </Button>
      </form>
    </Form>
  );
};

export default PartnerFooterForm;
