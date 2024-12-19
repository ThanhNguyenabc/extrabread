export const DOMAIN = 'https://bestpos.com';
export const BLOGS_API = process.env.NEXT_PUBLIC_WORDPRESS_HOST;
export const BEST_POS_URL = process.env.BESTPOS_MONGODB_URL;

import { CategoryType } from '@/models/bestpos/category_type';
import {
  IcBarClub,
  IcPizza,
  IcQuickService,
  IcRestaurant,
  IcRetail,
  IcSmallBusiness,
} from '@/ui/img-resource/ExIcon';
import {
  BarNightImg,
  CashDiscountProgramImg,
  CheckServicesImg,
  CloverAppMarketImg,
  CreditCardTerminalImg,
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
import { RouteConfig } from './routes';

export const PHONE = '1-888-410-2188';
export const EMAIL = 'info@bestpos.com';
export const SM_SCREEN = 640;
export const MD_SCREEN = 768;
export const LG_SCREEN = 1024;
export const US_MASK = '(###) ###-####';

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
  Pos_systems = 'pos_systems',
}

export const COMPANY_MENU = [
  { title: 'about_us', href: RouteConfig.AboutUs },
  { title: 'contact_us', href: RouteConfig.Contacts },
  { title: 'FAQ', href: RouteConfig.Faqs },
  { title: 'Blog', href: RouteConfig.Blogs },
  { title: 'Credit Card Processing Calculator', href: RouteConfig.Calculator },
  { title: 'Cash Signing Bonus Calculator', href: RouteConfig.CashBonusCalculator },
  { title: 'Request Demo POS', href: RouteConfig.RequestDemo },
  {
    title: 'funding_form.heading',
    href: RouteConfig.SameDayFunding,
  },
  { title: 'term_condition', href: 'https://blog.bestpos.com/terms-and-conditions/', newTab: true },
  { title: 'Privacy and Policy', href: 'https://blog.bestpos.com/privacy-policy/', newTab: true },
  { title: 'How We Rate', href: 'https://blog.bestpos.com/how-we-rate/', newTab: true },
  {
    title: 'Advertiser Disclosure',
    href: 'https://blog.bestpos.com/advertiser-disclosure/',
    newTab: true,
  },
];

export const SOLUTIONS_MENU = [
  {
    href: RouteConfig.CreditCard,
    title: 'solutions.credit-card.title',
    replaceTitle: 'solutions.credit-card.secondTitle',
    description: 'solutions.credit-card.desc',
    src: CreditCardTerminalImg,
  },
  {
    href: RouteConfig.MobileCard,
    title: 'solutions.mobile-card.title',
    description: 'solutions.mobile-card.desc',
    src: MobileCardReaderImg,
  },
  {
    href: RouteConfig.OnlineProcessing,
    title: 'solutions.online-processing.title',
    description: 'solutions.online-processing.desc',
    src: OnlineProcessingImg,
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
    src: FullServiceRestaurantsImg,
    href: RouteConfig.FullServiceRestaurants,
    icon: IcRestaurant,
    type: CategoryType.full_service,
  },
  {
    title: 'business_categories.retail',
    src: RetailBusinessesImg,
    href: RouteConfig.Retail,
    icon: IcRetail,
    type: CategoryType.retail,
  },
  {
    title: 'business_categories.quick_service',
    src: QuickServiceRestaurantsImg,
    href: RouteConfig.QuickServiceRestaurants,
    icon: IcQuickService,
    type: CategoryType.quick_service,
  },
  {
    title: 'business_categories.small_business',
    src: SmallBusinessImg,
    href: RouteConfig.SmallBusiness,
    icon: IcSmallBusiness,
    type: CategoryType.small_business,
  },
  {
    title: 'business_categories.bar_nightclub',
    src: BarNightImg,
    href: RouteConfig.BarsAndNightClubs,
    icon: IcBarClub,
    type: CategoryType.club,
  },
  {
    title: 'business_categories.pizza',
    src: PizzeriasImg,
    href: RouteConfig.Pizzerias,
    icon: IcPizza,
    type: CategoryType.pizza,
  },
];

export const PRODUCTS_MENU = [
  {
    title: 'product_types.market.title',
    src: CloverAppMarketImg,
    href: RouteConfig.CloverAppMarket,
  },
  {
    title: 'product_types.gift.title',
    src: GiftCardProgramImg,
    href: RouteConfig.GiftCardProgram,
  },
  {
    title: 'product_types.loyalty.title',
    src: LoyaltyRewardsImg,
    href: RouteConfig.CustomerLoyaltyProgramsAndRewards,
  },
  {
    title: 'product_types.cash_discount.title',
    src: CashDiscountProgramImg,
    href: RouteConfig.CashDiscountProgram,
  },
  {
    title: 'product_types.check_service.title',
    src: CheckServicesImg,
    href: RouteConfig.CheckServices,
  },
  {
    title: 'product_types.online_analytics.title',
    src: OnlineReportingImg,
    href: RouteConfig.OnlineAnalytics,
  },
  {
    title: 'product_types.quick_book.title',
    src: QuickBooksPluginImg,
    href: RouteConfig.QuickbooksPlugin,
  },
  {
    title: 'product_types.cash_advance.title',
    src: 'https://res.cloudinary.com/dgrym3yz3/image/upload/v1718773308/extrabread/common/so6uh0almm4o7jwmlijw.png',
    href: RouteConfig.CashAdvance,
  },
  {
    title: 'product_types.invoicing.title',
    src: InvoicingImg,
    href: RouteConfig.Invoicing,
  },
];

export const CreditPercentage = 0.015;

export const YesNoQuestion = ['yes', 'no'];
