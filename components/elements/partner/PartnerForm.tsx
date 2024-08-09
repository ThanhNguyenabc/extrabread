import { submitForm } from '@/apis';
import PartnerFooterForm from '@/components/elements/partner/PartnerFooterForm';
import { FormData } from '@/models/form_data';
import { Modal } from 'antd';
import Link from 'next/link';
import React, { HTMLAttributes, ReactElement, useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import Hero from '../../ui/hero';
interface FooterRegisterFromProps extends HTMLAttributes<HTMLDivElement> {
  heading: ReactElement | string;
  description: ReactElement | string;
  formTitle?: string;
  formSubTilte?: string;
}

const PartnerForm = React.forwardRef<HTMLDivElement, FooterRegisterFromProps>(
  ({ heading, description, formTitle, formSubTilte, ...props }, ref) => {
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

    const [status, setStatus] = useState<{ state: 'success' | 'loading' | 'initial' }>({
      state: 'initial',
    });

    const onClose = () => {
      setStatus({ state: 'initial' });
    };

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
            Profession: data.profession,
            'Meeting Time': `${data.date} ${data.time}`,
            Email: data.email,
          },
        },
        conversionFunnel: 'partner',
        refUrl: 'window.location.href',
      });
      setStatus({ state: 'loading' });
    };

    useEffect(() => {
      if (status.state === 'loading') {
        const listenner = setTimeout(() => {
          if (listenner) clearTimeout(listenner);
          setStatus({ state: 'success' });
        }, 500);
      }
    }, [status.state]);

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
            <PartnerFooterForm
              onSubmitData={onSubmitData}
              showLoading={status.state == 'loading'}
            />
          </div>
        </Hero>
        <Modal
          title="Success"
          open={status.state == 'success'}
          centered
          footer={null}
          width={'auto'}
          onCancel={onClose}
        >
          <p>
            {`We've received your info. Our team will follow up shortly to confirm details and next steps.`}
          </p>
          <br></br>
          <Link
            href={'https://youtu.be/Oswyy-8DNoI'}
            className="underline text-green-500"
            target="_blank"
          >
            {`Here's a short video to tell you more about the program.`}
          </Link>
        </Modal>
      </div>
    );
  },
);

export default PartnerForm;
