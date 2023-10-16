export const submitForm = async ({
  data,
  conversion_funnel,
  ref_url,
}: {
  data: FormData;
  conversion_funnel: string;
  ref_url: string;
}) => {
  try {
    await fetch('api/submit-form', {
      method: 'POST',
      body: JSON.stringify({
        data,
        conversion_funnel,
        ref_url,
      }),
    });
    return true;
  } catch (error) {}
  return false;
};
