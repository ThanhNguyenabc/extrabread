import { hookstate } from '@hookstate/core';
interface State {
  footerText?: string;
  sale?: string;
  bonus?: string;
  suggestedBusiness?: (
    | 'Full Service Restaurants'
    | 'Retail Businesses'
    | 'Quick Service Restaurant'
    | 'Small Business'
    | 'Bars & nightclubs'
    | 'Pizzerias'
  )[];
}
export const commonState = hookstate<State>({
  footerText: 'Get your hands on a Free POS system \n today!',
  suggestedBusiness: undefined,
});
