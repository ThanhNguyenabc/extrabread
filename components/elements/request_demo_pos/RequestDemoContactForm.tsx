import { submitForDemoPOS } from '@/apis';
import ContactForm from '@/components/ui/contact_form';

import useRequestDemoStore from '@/store/request_demo_store';

import React from 'react';

const RequestDemoContactForm = () => {
  const submitForm = async contact => {
    const states = useRequestDemoStore.getState();

    submitForDemoPOS({
      conversion_funnel: 'Request Demo POS',
      ref_url: window.location.href,
      data: {
        typeBusiness: states.businessType,
        posSystems: states.selectedPOS.join(' - '),
        otherPOS: states.otherPOS,
        contact: {
          ...contact,
          name: `${contact['firstname']} ${contact['lastname']}`,
        },
      },
    });
    useRequestDemoStore.setState(prev => ({
      ...prev,
      isSubmittedForm: true,
    }));
  };

  return <ContactForm onSubmitData={submitForm} showBtnSubmit />;
};

export default RequestDemoContactForm;
