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
  SaleSystems = '/point-of-sale-systems',
  MobileCard = '/solutions/mobile-card',
  CreditCard = '/solutions/credit-card',
  OnlineProcessing = '/solutions/online-processing',
}

export type RouteConfigType = `${RouteConfig}`;

export enum Languages {
  US = 'en',
  ES = 'es',
}

export enum NavigationLabel {
  Solutions = 'solution',
  Equipments = 'pos_equipments',
  BusinessTypes = 'business_type',
  Products = 'products',
  Home = 'home',
  Company = 'company',
}

export const COMPANY_MENU = [
  { title: 'support', href: RouteConfig.Contacts },
  { title: 'FAQ', href: RouteConfig.Faqs },
  { title: 'state_regulation', href: '#' },
  { title: 'Blog', href: RouteConfig.Blogs },
  { title: 'partner', href: RouteConfig.Partner },
  { title: 'about_us', href: RouteConfig.AboutUs },
  { title: 'point_of_sale_systems', href: RouteConfig.SaleSystems },
];

export const SOLUTIONS_MENU = [
  {
    href: RouteConfig.CreditCard,
    title: 'solutions.credit-card.title',
    replaceTitle: 'solutions.credit-card.secondTitle',
    description: 'solutions.credit-card.desc',
    src: CreditCardTerminalImg.src,
  },
  {
    href: RouteConfig.MobileCard,
    title: 'solutions.mobile-card.title',
    description: 'solutions.mobile-card.desc',
    src: MobileCardReaderImg.src,
  },
  {
    href: RouteConfig.OnlineProcessing,
    title: 'solutions.online-processing.title',
    description: 'solutions.online-processing.desc',
    src: OnlineProcessingImg.src,
  },
];

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
];

export const BUSINESS_MENU = [
  {
    title: 'business_categories.full_service',
    src: FullServiceRestaurantsImg.src,
    href: RouteConfig.FullServiceRestaurants,
  },
  {
    title: 'business_categories.retail',
    src: RetailBusinessesImg.src,
    href: RouteConfig.Retail,
  },
  {
    title: 'business_categories.quick_service',
    src: QuickServiceRestaurantsImg.src,
    href: RouteConfig.QuickServiceRestaurants,
  },
  {
    title: 'business_categories.small_business',
    src: SmallBusinessImg.src,
    href: RouteConfig.SmallBusiness,
  },
  {
    title: 'business_categories.bar_nightclub',
    src: BarNightImg.src,
    href: RouteConfig.BarsAndNightClubs,
  },
  {
    title: 'business_categories.pizza',
    src: PizzeriasImg.src,
    href: RouteConfig.Pizzerias,
  },
];

export const PRODUCTS_MENU = [
  {
    title: 'product_types.market.title',
    src: CloverAppMarketImg.src,
    href: RouteConfig.CloverAppMarket,
  },
  {
    title: 'product_types.gift.title',
    src: GiftCardProgramImg.src,
    href: RouteConfig.GiftCardProgram,
  },
  {
    title: 'product_types.loyalty.title',
    src: LoyaltyRewardsImg.src,
    href: RouteConfig.CustomerLoyaltyProgramsAndRewards,
  },
  {
    title: 'product_types.cash_discount.title',
    src: CashDiscountProgramImg.src,
    href: RouteConfig.CashDiscountProgram,
  },
  {
    title: 'product_types.check_service.title',
    src: CheckServicesImg.src,
    href: RouteConfig.CheckServices,
  },
  {
    title: 'product_types.online_analytics.title',
    src: OnlineReportingImg.src,
    href: RouteConfig.OnlineAnalytics,
  },
  {
    title: 'product_types.quick_book.title',
    src: QuickBooksPluginImg.src,
    href: RouteConfig.QuickbooksPlugin,
  },
  {
    title: 'product_types.cash_advance.title',
    src: CashAdvanceImg.src,
    href: RouteConfig.CashAdvance,
  },
  {
    title: 'product_types.invoicing.title',
    src: InvoicingImg.src,
    href: RouteConfig.Invoicing,
  },
];
