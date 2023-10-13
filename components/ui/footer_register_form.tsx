import { sendEmail, sendEmailToSaleTeam } from '@/apis/send_mail';
import React, { HTMLAttributes, ReactElement } from 'react';
import ContactForm from './contact_form';
import Hero from './hero';
import { useToast } from './use-toast';

interface FooterRegisterFromProps extends HTMLAttributes<HTMLDivElement> {
  heading: ReactElement | string;
  description: ReactElement | string;
  formTitle?: string;
  formSubTilte?: string;
}

const FooterRegisterFrom = React.forwardRef<HTMLDivElement, FooterRegisterFromProps>(
  ({ className, heading, description, formTitle, formSubTilte, ...props }, ref) => {
    const { toast, toasts } = useToast();
    const onSubmitData = async data => {
      await sendEmailToSaleTeam(data);
      toast({
        title: 'Successfull',
        description: 'We have received your registration',
        variant: 'success',
      });
    };

    return (
      <div ref={ref} className=" bg-green-200" {...props}>
        <Hero className="gap-6 md:gap-8 md:flex-row items-center">
          <div className="flex-1 flex flex-col gap-4 lg:gap-6 ">
            <h3 className="heading-xs md:heading-lg text-center md:text-start">{heading}</h3>
            <p className="text-md-semibold text-neutral-700 md:text-lg-semibold lg:max-w-lg">
              {description}
            </p>
          </div>
          <div className="flex-1 flex flex-col bg-white p-4 md:p-8 rounded-2xl gap-8 md:gap-10">
            <div className="flex flex-col gap-1 text-center">
              <h4 className="text-xl-semibold md:heading-md">{formTitle}</h4>
              <p className="text-base text-neutral-700 md:text-lg">{formSubTilte}</p>
            </div>
            <ContactForm onSubmitData={onSubmitData} />
          </div>
        </Hero>
      </div>
    );
  },
);

export default FooterRegisterFrom;
