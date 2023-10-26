export const DOMAIN = 'http://extrabread.com';
export const BLOGS_API = 'https://blog.extrabread.com/wp-json/wp/v2/posts';

import CreditCardTerminalImg from 'public/images/Credit Card Terminal.png';
import {
  BarNightImg,
  CashAdvanceImg,
  CashDiscountProgramImg,
  CheckServicesImg,
  CloverAppMarketImg,
  FullServiceRestaurantsImg,
  GiftCardProgramImg,
  InvoicingImg,
  LoyaltyRewardsImg,
  MobileCardReaderImg,
  OnlineProcessingImg,
  OnlineReportingImg,
  PizzeriasImg,
  QuickBooksPluginImg,
  QuickServiceRestaurantsImg,
  RetailBusinessesImg,
  SmallBusinessImg,
} from '~/ui/img-resource/ImageResources';

export const PHONE = '1-800-209-7120';
export const EMAIL = 'info@extrabread.com';

export const US_MASK = '(###) ###-####';

export enum RouteConfig {
  Home = '/',
  GetPricing = '/get-pricing',
  Solution = '/solutions',
  Contacts = '/contacts',
  Faqs = '/faqs',
  Blogs = '/blogs',
  PrivacyPolicy = '/privacy-policy',
  TermsOfService = '/terms-of-service',
  BusinessTypes = '/business',
  Products = '/products',
  Equipment = '/pos-equipments',
  // Business
  FullServiceRestaurants = '/full-service-restaurants',
  Retail = '/retail',
  QuickServiceRestaurants = '/quick-service-restaurants',
  SmallBusiness = '/small-business',
  BarsAndNightClubs = '/bars-and-night-clubs',
  Pizzerias = '/pizzerias',
  // Equipment
  Revel = '/revel',
  CloverFlex = '/clover-flex',
  CloverDuo = '/clover-duo',
  Exatouch = '/exatouch',
  Simphony = '/simphony',
  Brink = '/brink',
  Ovvi = '/ovvi',
  Aldelo = '/aldelo',
  Lightspeed = '/lightspeed',
  Aloha = '/aloha',
  Upserve = '/upserve',
  Toast = '/toast',
  Rpower = '/rpower',
  Union = '/union',
  Touchbistro = '/touchbistro',
  // Products
  CloverAppMarket = '/clover-app-market',
  CashDiscountProgram = '/cash-discount-program',
  GiftCardProgram = '/gift-card-program',
  CustomerLoyaltyProgramsAndRewards = '/customer-loyalty-programs-and-rewards',
  OnlineAnalytics = '/online-analytics',
  CheckServices = '/check-services',
  CashAdvance = '/cash-advance',
  QuickbooksPlugin = '/quickbooks-plugin',
  Invoicing = '/invoicing',
  Partner = '/partner',
  PaymentProcessing = '/payment-processing',
  AboutUs = '/about-us',
  ElevateBusiness = '/elevate-your-business',
}

export type RouteConfigType = `${RouteConfig}`;

export enum Languages {
  US = 'en',
  ES = 'es',
}

export enum NavigationLabel {
  Solutions = 'Solutions',
  Equipments = 'POS Equipments',
  BusinessTypes = 'Business Types',
  Products = 'Products',
  Home = 'Home',
  Company = 'Company',
}

export const COMPANY_MENU = [
  { title: 'Support', href: RouteConfig.Contacts },
  { title: 'FAQ', href: RouteConfig.Faqs },
  { title: 'State Regulations', href: '#' },
  { title: 'Blog', href: RouteConfig.Blogs },
  { title: 'Partner', href: RouteConfig.Partner },
  { title: 'About us', href: RouteConfig.AboutUs },
  { title: 'Elevate Your Business', href: RouteConfig.ElevateBusiness },
] as const;

export const SOLUTIONS_MENU = [
  {
    href: `${RouteConfig.Solution}/payment-processing`,
    title: 'Payment Processing',
    replaceTitle: 'Capital & Funding',
    description: 'In-person payments have never been easier.',
    src: CreditCardTerminalImg.src,
  },
  {
    href: `${RouteConfig.Solution}/credit-card`,
    title: 'Credit Card Terminal',
    replaceTitle: 'Capital & Funding',
    description: 'In-person payments have never been easier.',
    src: CreditCardTerminalImg.src,
  },
  {
    href: `${RouteConfig.Solution}/mobile-card`,
    title: 'Mobile Card Reader',
    description: 'Accept Payments Anywhere ',
    src: MobileCardReaderImg.src,
  },
  {
    href: `${RouteConfig.Solution}/online-processing`,
    title: 'Online Processing',
    description: 'Streamline Your Online Payments ',
    src: OnlineProcessingImg.src,
  },
] as const;

export const EQUIPMENTS_MENU = [
  {
    title: 'Revel',
    description: 'Customizable POS system for retail, full & quick-service restaurants',
    href: RouteConfig.Revel,
  },
  {
    title: 'Clover Flex',
    description: 'Versatile, all-in-one terminal for retail & quick service stores.',
    href: RouteConfig.CloverFlex,
  },
  {
    title: 'Clover Duo',
    description: 'Easy-to-use software great for retail and any type of restaurant.',
    href: RouteConfig.CloverDuo,
  },
  {
    title: 'Exatouch',
    description: 'Fast, reliable, and affordable POS system for any sized business.',
    href: RouteConfig.Exatouch,
  },
  {
    title: 'Simphony (Micros)',
    description: 'POS system from Oracle built for restaurant & quick service management.',
    href: RouteConfig.Simphony,
  },
  {
    title: 'Brink (PAR)',
    description: 'Customizable point-of-sale system for full & quick-service restaurants',
    href: RouteConfig.Brink,
  },
  {
    title: 'Ovvi',
    description: 'POS used by restaurants, grocery, convenience & liquor stores.',
    href: RouteConfig.Ovvi,
  },
  {
    title: 'Aldelo',
    description: 'Cloud-based POS system best for small businesses or restaurants.',
    href: RouteConfig.Aldelo,
  },

  {
    title: 'Lightspeed',
    description: 'Cloud-based POS system that is great for retailers of all sizes.',
    href: RouteConfig.Lightspeed,
  },
  {
    title: 'Aloha',
    description: 'Cloud-enabled platform great for any type of restaurants and bars',
    href: RouteConfig.Aloha,
  },
  {
    title: 'Upserve',
    description: 'Great POS that provides you with full restaurant management platform',
    href: RouteConfig.Upserve,
  },
  {
    title: 'Toast',
    description: 'Toast is a easy-to-use software with a sleek station & handheld hardware',
    href: RouteConfig.Toast,
  },
  {
    title: 'Union',
    description: 'Toast is a easy-to-use software with a sleek station & handheld hardware',
    href: RouteConfig.Union,
  },
  {
    title: 'RPower',
    description: 'Toast is a easy-to-use software with a sleek station & handheld hardware',
    href: RouteConfig.Rpower,
  },
  {
    title: 'TouchBistro',
    description: 'Toast is a easy-to-use software with a sleek station & handheld hardware',
    href: RouteConfig.Touchbistro,
  },
] as const;

export const BUSINESS_MENU = [
  {
    title: 'Full Service Restaurants',
    src: FullServiceRestaurantsImg.src,
    href: RouteConfig.FullServiceRestaurants,
  },
  {
    title: 'Retail Businesses',
    src: RetailBusinessesImg.src,
    href: RouteConfig.Retail,
  },
  {
    title: 'Quick Service Restaurant',
    src: QuickServiceRestaurantsImg.src,
    href: RouteConfig.QuickServiceRestaurants,
  },
  {
    title: 'Small Business',
    src: SmallBusinessImg.src,
    href: RouteConfig.SmallBusiness,
  },
  {
    title: 'Bars & nightclubs',
    src: BarNightImg.src,
    href: RouteConfig.BarsAndNightClubs,
  },
  {
    title: 'Pizzerias',
    src: PizzeriasImg.src,
    href: RouteConfig.Pizzerias,
  },
] as const;

export const PRODUCTS_MENU = [
  {
    title: 'Clover App Market',
    src: CloverAppMarketImg.src,
    href: RouteConfig.CloverAppMarket,
  },
  {
    title: 'Gift Card Program',
    src: GiftCardProgramImg.src,
    href: RouteConfig.GiftCardProgram,
  },
  {
    title: 'Loyalty & Rewards',
    src: LoyaltyRewardsImg.src,
    href: RouteConfig.CustomerLoyaltyProgramsAndRewards,
  },
  {
    title: 'Cash Discount Program',
    src: CashDiscountProgramImg.src,
    href: RouteConfig.CashDiscountProgram,
  },
  {
    title: 'Check Services',
    src: CheckServicesImg.src,
    href: RouteConfig.CheckServices,
  },
  {
    title: 'Online Analytics',
    src: OnlineReportingImg.src,
    href: RouteConfig.OnlineAnalytics,
  },
  {
    title: 'QuickBooks Plugin',
    src: QuickBooksPluginImg.src,
    href: RouteConfig.QuickbooksPlugin,
  },
  {
    title: 'Cash Advance',
    src: CashAdvanceImg.src,
    href: RouteConfig.CashAdvance,
  },
  {
    title: 'Invoicing',
    src: InvoicingImg.src,
    href: RouteConfig.Invoicing,
  },
] as const;
