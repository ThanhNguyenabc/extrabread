import { submitForm } from '@/apis';
import { FormData } from '@/models/form_data';
import React, { HTMLAttributes, ReactElement, useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import ContactForm from '../../ui/contact_form';
import Hero from '../../ui/hero';
import { useToast } from '../../ui/use-toast';

interface FooterRegisterFromProps extends HTMLAttributes<HTMLDivElement> {
  heading: ReactElement | string;
  description: ReactElement | string;
  formTitle?: string;
  formSubTilte?: string;
}

const PartnerForm = React.forwardRef<HTMLDivElement, FooterRegisterFromProps>(
  ({ heading, description, formTitle, formSubTilte, ...props }, ref) => {
    const { toast } = useToast();

    const { trigger } = useSWRMutation(
      `api/submit-form`,
      async (
        url,
        {
          arg,
        }: {
          arg: FormData;
        },
      ) => submitForm(arg),
    );

    const [isLoading, setLoading] = useState(false);

    const onSubmitData = async data => {
      trigger({
        contact: data,
        data: {
          airtable: {
            'Full Name': `${data.lastname} ${data.firstname}`,
            'First name': data.firstname,
            'Last name': data.lastname,
            'Created Date': new Date().toDateString(),
            'Phone number': data.phone,
            Email: data.email,
          },
        },
        conversionFunnel: 'partner',
        refUrl: 'window.location.href',
      });
      setLoading(true);
    };

    useEffect(() => {
      if (isLoading) {
        const listenner = setTimeout(() => {
          if (listenner) clearTimeout(listenner);
          toast({
            title: 'Successfull',
            description: 'We have received your registration',
            variant: 'success',
          });
          setLoading(false);
        }, 500);
      }
    }, [isLoading]);

    return (
      <div ref={ref} className="bg-green-200" {...props}>
        <Hero className="gap-6 md:gap-8 md:flex-row items-center">
          <div className="flex-1 flex flex-col gap-4 lg:gap-6 ">
            <h3 className="heading-xs md:heading-lg text-center md:text-start">{heading}</h3>
            <p className="text-md-semibold text-neutral-700 md:text-lg-semibold lg:max-w-lg">
              {description}
            </p>
          </div>
          <div className="flex-1 flex flex-col bg-white p-4 md:p-8 rounded-2xl gap-8 md:gap-10">
            <div className="flex flex-col gap-1 text-center">
              <h4 className="text-xl-semibold md:heading-md md:max-w-xl">{formTitle}</h4>
              <p className="text-base text-neutral-700 md:text-lg">{formSubTilte}</p>
            </div>
            <ContactForm
              onSubmitData={onSubmitData}
              btnSubmitConfig={{
                btnProps: {
                  disabled: isLoading,
                },
                showLoading: isLoading,
              }}
            />
          </div>
        </Hero>
      </div>
    );
  },
);

export default PartnerForm;
