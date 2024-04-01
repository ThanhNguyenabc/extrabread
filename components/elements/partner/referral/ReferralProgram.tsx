import { submitForm } from '@/apis';
import ReferalInformationForm, {
  ReferalInformation,
} from '@/components/elements/partner/ReferalInformationForm';
import ReferralProgramHeader from '@/components/elements/partner/referral/ReferralProgramHeader';
import { Button } from '@/components/ui/button';
import ContactForm, { CustomFormElement } from '@/components/ui/contact_form';
import { useToast } from '@/components/ui/use-toast';
import { Contact } from '@/models/contact.model';
import { IcLoading, IcPlus } from '@/ui/img-resource/ImageResources';
import React, { useEffect, useRef, useState } from 'react';

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

const ReferralProgram = ({
  isOpenForm,
  showHeaderCloseButton = true,
  onCloseBtnClick,
  onSubmitSuccess,
}: {
  isOpenForm?: boolean;
  showHeaderCloseButton?: boolean;
  onCloseBtnClick?: () => void;
  onSubmitSuccess?: () => void;
}) => {
  const { toast } = useToast();
  const [isLoading, setLoading] = useState(false);
  const formRefs = useRef<CustomFormElement[]>([]);

  const formData = useRef<{
    contact: Contact;
    referBusinesses: ReferalInformation[];
  } | null>(initialFormData);

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

  const resetData = () => {
    formData.current = initialFormData;
    formRefs.current?.forEach(item => item.resetForm());
    setLoading(false);
    setBusinessList(initialBusinessFrom);
  };

  useEffect(() => {
    if (!isOpenForm) {
      resetData();
    }
  }, [isOpenForm]);

  const sendFormData = async () => {
    if (
      !formData.current ||
      !formData.current.contact ||
      formData.current.referBusinesses.length != businessFormList.length
    )
      return;
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
    toast({
      title: 'Referral Program',
      description: 'We have received your registration',
      variant: 'success',
    });
    onSubmitSuccess && onSubmitSuccess();
  };

  const onRemoveForm = () => {
    if (businessFormList.length <= 1) return;
    businessFormList.pop();
    formData.current?.referBusinesses.pop();
    setBusinessList([...businessFormList]);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <ReferralProgramHeader onClose={onCloseBtnClick} showCloseBtn={showHeaderCloseButton} />

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
  );
};

export default ReferralProgram;
