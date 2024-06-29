import { Button } from '@/components/ui/button';
import ContactForm, { CustomFormElement } from '@/components/ui/contact_form';

import { useDevice } from '@/hooks/useDetectMobile';
import { cn } from '@/lib/utils';
import { Contact } from '@/models/contact.model';
import { IcChevronDown, IcClose, IcLoading } from '@/ui/img-resource/ExIcon';
import { Drawer, MenuProps } from 'antd';
import { useTranslation } from 'next-i18next';
import React, { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';

import { submitForm } from '@/apis';
import { useToast } from '@/components/ui/use-toast';
import { BUSINESS_MENU } from '@/constants';
import { Dropdown } from 'antd';
import clsx from 'clsx';

export type FundingFormHandle = {
  showDialog: () => void;
  closeDialog: () => void;
};

const defaultState = {
  isSubmit: false,
};
const FundingForm = forwardRef<FundingFormHandle>((props, ref) => {
  const [open, setOpen] = useState(false);
  const { isLaptop, isTablet } = useDevice();
  const contactRef = useRef<CustomFormElement>(null);
  const { t } = useTranslation('funding');
  const { t: common } = useTranslation();
  const { toast } = useToast();

  const Credits = t('credits', { returnObjects: true }) as string[] | null;

  const [data, setData] = useState<{
    contact?: Contact;
    creditIndex?: number;
    businessIndex?: number;
    isSubmit: boolean;
  }>(defaultState);

  useImperativeHandle(
    ref,
    () => ({
      showDialog() {
        setOpen(true);
      },
      closeDialog: closeDialog,
    }),
    [],
  );

  const BusinessTypes: MenuProps['items'] = useMemo(() => {
    return BUSINESS_MENU.map((item, index) => {
      return {
        key: common(item.title),
        title: item.title,
        label: (
          <p className="h-full w-full" onClick={() => setData({ ...data, businessIndex: index })}>
            {common(item.title)}
          </p>
        ),
      };
    });
  }, []);

  const closeDialog = () => {
    setOpen(false);
    setData(defaultState);
    contactRef.current?.resetForm();
  };

  const onSubmitForm = async contact => {
    setData({ ...data, contact });

    if (data.businessIndex != undefined && contact && data.creditIndex != undefined) {
      setData({ ...data, isSubmit: true });
      const mailHtmlBody = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>New Business Inquiry</title>
        </head>
        <body>
          <h1>New Business Inquiry</h1>
          <p>Dear Sales Team,</p>
          <p>We have received a new customer from samday funding page. Here are the details:</p>
          <ul>
            <li><strong>Name:</strong>${contact.firstname} ${contact.lastname}</li>
            <li><strong>Email:</strong>${contact.email}</li>
            <li><strong>Phone:</strong>${contact.phone}</li>
            <li><strong>Referral Information: </strong></li>
          </ul>
          <p>Please follow up with the customer as soon as possible.</p>
          <p>Best regards,</p>
          <p>Your Company</p>
        </body>
      </html>`;

      await submitForm({
        conversionFunnel: 'funding',
        refUrl: window.location.href,
        adminHtmlBody: mailHtmlBody,
        sendMailToCustomer: false,
        data: {
          airtable: {
            FirstName: contact.firstname,
            LastName: contact.lastname,
            Phone: contact.phone,
            Email: contact.email,
            'Business Type': BusinessTypes[data.businessIndex]?.key?.toString(),
            'Monthly Credit': Credits?.[data.creditIndex] ?? '',
          },
        },
        contact: {
          email: contact.email,
          phone: contact.phone || '',
          firstname: contact.firstname || '',
          lastname: contact.firstname,
        },
      });
      setData({ ...data, isSubmit: false });

      toast({
        title: 'Same Day Funding',
        description: 'We have received your registration',
        variant: 'success',
      });
    }
  };

  return (
    <Drawer
      contentWrapperStyle={{
        width: (isTablet && 600) || (isLaptop && 768) || '100%',
      }}
      style={{
        zIndex: 1000,
      }}
      open={open}
      onClose={closeDialog}
      closeIcon={null}
      title={null}
    >
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-row items-center gap-6">
          <Button
            variant={'outline'}
            size={'default'}
            className="w-12 h-12 p-3  rounded-3xl"
            onClick={closeDialog}
          >
            <IcClose />
          </Button>
          <h4 className="flex-1 text-center whitespace-pre-line text-xl-semibold md:heading-md">
            {t('form_title')}
          </h4>
        </div>
        <ContactForm onSubmitData={onSubmitForm} ref={contactRef} />

        <div className="flex flex-col gap-4 w-full">
          <h5
            className={clsx(
              'text-sm-semibold',
              data.contact && data.businessIndex == undefined && ' text-red-500',
            )}
          >
            {t('business_types')}
          </h5>
          <Dropdown menu={{ items: BusinessTypes }} placement="bottomLeft" className="w-full" arrow>
            <Button className={cn('md:w-full justify-between group')} variant={'outline'}>
              {data.businessIndex != undefined && data.businessIndex >= 0
                ? BusinessTypes[data.businessIndex]?.key?.toString()
                : t('select_business')}

              <IcChevronDown className="group-hover:rotate-180 active:rotate-180" />
            </Button>
          </Dropdown>
        </div>
        <div className="flex flex-col gap-4">
          <h5
            className={clsx(
              'text-sm-semibold',
              data.contact && data.creditIndex == undefined && 'text-sm-semibold text-red-500',
            )}
          >
            {t('credit_title')}
          </h5>
          <div className=" flex flex-wrap gap-4">
            {Credits?.map((item, index) => (
              <Button
                key={item}
                variant={'outline'}
                className={clsx(
                  'bg-white',
                  data.creditIndex === index && 'bg-green-500 text-white',
                )}
                onClick={() => setData({ ...data, creditIndex: index })}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          size={'default'}
          className="w-[200px] md:w-[200px]"
          disabled = {data.isSubmit}
          onClick={() => {
            contactRef.current?.submitForm();
          }}
        >
          {data.isSubmit && <IcLoading className="text-white" />}
          {common('submit')}
        </Button>
      </div>
    </Drawer>
  );
});

export default FundingForm;
