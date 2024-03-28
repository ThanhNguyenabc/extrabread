import { submitForm } from '@/apis';
import ReferalInformationForm, {
  ReferalInformation,
} from '@/components/elements/partner/ReferalInformationForm';
import { Button } from '@/components/ui/button';
import ContactForm, { CustomFormElement } from '@/components/ui/contact_form';
import { useDevice } from '@/hooks/useDetectMobile';
import { Contact } from '@/models/contact.model';
import { IcClose, IcLoading, IcPlus } from '@/ui/img-resource/ImageResources';
import { Drawer } from 'antd';
import { useTranslation } from 'next-i18next';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

export type ReferalProgramType = {
  showDialog: () => void;
  closeDialog: () => void;
};

const initialBusinessFrom = [
  {
    businessName: '',
    address: '',
    city: '',
    state: '',
    firstName: '',
    lastName: '',
    notes: '',
    phone: '',
  },
];

const initialFormData = {
  contact: {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
  },
  referBusinesses: [],
};

const ReferalProgramModal = forwardRef<
  ReferalProgramType,
  React.HtmlHTMLAttributes<HTMLDivElement>
>((_, ref) => {
  const { t } = useTranslation('common');
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const { isLaptop, isTablet } = useDevice();

  useImperativeHandle(
    ref,
    () => ({
      showDialog() {
        setOpen(true);
      },
      closeDialog,
    }),
    [],
  );

  const formRefs = useRef<CustomFormElement[]>([]);

  const formData = useRef<{
    contact: Contact;
    referBusinesses: ReferalInformation[];
  } | null>(initialFormData);

  const closeDialog = () => {
    formData.current = initialFormData;
    formRefs.current?.forEach(item => item.resetForm());
    setLoading(false);
    setBusinessList(initialBusinessFrom);
    setOpen(false);
  };

  const [businessFormList, setBusinessList] = useState<ReferalInformation[]>(initialBusinessFrom);

  const onAddBusinessInfo = () => {
    setBusinessList([
      ...businessFormList,
      {
        businessName: '',
        address: '',
        city: '',
        state: '',
        firstName: '',
        lastName: '',
        notes: '',
        phone: '',
      },
    ]);
  };

  const onRemoveForm = () => {
    if (businessFormList.length <= 1) return;
    businessFormList.pop();
    formData.current?.referBusinesses.pop();
    setBusinessList([...businessFormList]);
  };

  const sendFormData = async () => {
    if (!formData.current) return;
    setLoading(true);
    const { contact, referBusinesses } = formData.current;
    const mailHtmlBody = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>New Business Inquiry</title>
      </head>
      <body>
        <h1>New Business Inquiry</h1>
        <p>Dear Sales Team,</p>
        <p>We have received a new referral information. Here are the details:</p>
        <ul>
          <li><strong>Referrer Information:</strong></li>
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
      conversionFunnel: 'referral',
      refUrl: window.location.href,
      adminHtmlBody: mailHtmlBody,
      sendMailToCustomer: false,
      data: {
        airtable: {
          'First Name': contact.firstname,
          'Last Name': contact.lastname,
          Phone: contact.phone,
          Email: contact.email,
          'Referral Information': referBusinesses
            .map(
              (item, index) => `
            Business ${index + 1}
            Name: ${item.firstName} ${item.lastName}
            Address: ${item.address}
            Phone: ${item.phone}
            City: ${item.city}
            State: ${item.state}
            Note: ${item.notes}
          `,
            )
            .toString(),
        },
      },
      contact: {
        email: contact.email,
        phone: contact.phone || '',
        firstname: contact.firstname || '',
        lastname: contact.firstname,
      },
    });

    setLoading(false);
  };

  return (
    <Drawer
      contentWrapperStyle={{
        width: (isTablet && 600) || (isLaptop && 768) || '100%',
      }}
      open={open}
      onClose={closeDialog}
      closeIcon={null}
      title={
        <div className="flex flex-row gap-4 sm:gap-6">
          <Button
            variant={'outline'}
            size={'default'}
            className="w-12 h-12 p-3  rounded-3xl"
            onClick={closeDialog}
          >
            <IcClose />
          </Button>
          <div className="flex-1 flex flex-col text-center gap-2">
            <h4 className="text-xl-semibold md:heading-md">{t('referal_program.heading')}</h4>
            <p className="text-neutral-700 font-normal text-sm"> {t('referal_program.desc')}</p>
          </div>
        </div>
      }
    >
      <div className="flex flex-col gap-4 md:gap-6">
        <h4 className="heading-xs">Referrer’s Information</h4>
        <ContactForm
          onSubmitData={data => {
            formData.current && data && (formData.current.contact = data);
          }}
          showBtnSubmit={false}
          ref={ref => {
            ref && formRefs.current?.push(ref);
          }}
        />
        <h4 className="heading-xs">Referral Information</h4>
        {businessFormList?.map((item, index) => (
          <ReferalInformationForm
            ref={ref => {
              ref && formRefs.current?.push(ref);
            }}
            key={`Business ${index + 1}`}
            formTitle={`Business ${index + 1}`}
            showCloseIcon={index > 0}
            onRemoveForm={onRemoveForm}
            data={item}
            onSubmitedData={data => {
              if (formData.current && data) {
                if (!formData.current.referBusinesses[index])
                  formData.current.referBusinesses.push(data);
                else formData.current.referBusinesses[index] = data;
              }
            }}
          />
        ))}
        <div className=" bg-neutral-300 h-[1px]" />
        <p className=" text-neutral-600">If you have any additional business...</p>
        <Button variant={'outline'} className=" gap-2 md:w-full" onClick={onAddBusinessInfo}>
          <IcPlus />
          <p className="text-md-semibold">Add Business</p>
        </Button>

        <Button
          type="button"
          className="w-[200px] text-base md:w-[200px] mt-4 md:mt-6 gap-2"
          onClick={() => {
            formRefs.current?.forEach(item => {
              item.submitForm();
            });

            setTimeout(sendFormData, 0);
          }}
        >
          {isLoading && <IcLoading className="text-white" />}
          {'Submit'}
        </Button>
      </div>
    </Drawer>
  );
});

export default ReferalProgramModal;
