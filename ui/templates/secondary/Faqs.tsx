import { Typography } from 'antd';
import { isEmpty } from 'lodash';
import Image from 'next/image';
import { useState } from 'react';
import { Collapse, Panel } from '~/ui/atoms/collapse/Collapse';
import { Heading, SectionHeading } from '~/ui/atoms/heading/Heading';
import { FQATabs, TabType } from './components/FQATabs/FQATabs';
import styles from './index.module.scss';
const { Text } = Typography;

const GENERAL_ITEMS = [
  {
    header: 'How long does the approval process take?',
    content:
      'The approval process could vary pending all information is received and confirmed. Once all information has been confirmed & reviewed, the approval process could take up to 3 business days.',
  },
  {
    header: 'Do I need a business checking account to obtain a merchant account?',
    content: 'Yes, a business checking account is required to obtain a merchant account.',
  },
  {
    header: 'What is a merchant account?',
    content:
      'A merchant account is a type of bank account that allows businesses to accept credit and debit card payments. Merchant accounts typically come with a monthly fee and a percentage of each transaction that is processed.',
  },
  {
    header: 'What is a payment processor?',
    content:
      'A payment processor is a company that facilitates the transfer of money between a buyer and a seller. Payment processors work with merchant accounts to process credit and debit card payments.',
  },
  {
    header: 'How do I choose the right payment processor for my business?',
    content:
      'There are a number of factors to consider when choosing a payment processor, including:',
    list: [
      'The types of cards you want to accept',
      'The fees charged',
      'The level of customer service',
      'The security features',
    ],
  },
  {
    header: 'What are the different types of payment processing fees?',
    content: 'There are a number of different types of payment processing fees, including:',
    list: [
      'Transaction fees: These are fees that are charged for each transaction that is processed.',
      'Monthly fees: These are fees that are charged for having a merchant account.',
      'Setup fees: These are fees that are charged when you open a merchant account.',
      'Interchange fees: These are fees that are charged by the card associations (Visa, Mastercard, etc.)',
      'Assessment fees: These are fees that are charged by the card brands (American Express, Discover, etc.)',
    ],
  },
  {
    header: 'How can I protect my business from fraud?',
    content:
      'There are a number of things you can do to protect your business from fraud, including:',
    list: [
      'Use a reputable payment processor.',
      'Use a secure payment processing system.',
      'Monitor your transactions for suspicious activity.',
      'Report any suspicious activity to your payment processor immediately.',
    ],
  },
  {
    header: 'What are the benefits of using a point of sale system?',
    content: 'There are a number of benefits to using a point of sale system, including:',
    list: [
      'Increased efficiency: Point of sale systems can help to increase efficiency by automating many of the tasks involved in processing payments.',
      'Improved customer service: Point of sale systems can help to improve customer service by providing a more streamlined and efficient checkout process.',
      'Increased sales: Point of sale systems can help to increase sales by providing businesses with the ability to track inventory, manage promotions, and offer loyalty programs.',
      'Improved data security: Point of sale systems can help to improve data security by providing businesses with the ability to encrypt data and protect it from unauthorized access.',
    ],
  },
  {
    header: 'What are the different types of point of sale systems?',
    content: 'There are a number of different types of point of sale systems, including:',
    list: [
      'Traditional point of sale systems: These are the most common type of point of sale system. They are typically stand-alone devices that are connected to a cash register.',
      'Cloud-based point of sale systems: These systems are hosted in the cloud and can be accessed from any device with an internet connection.',
      'Mobile point of sale systems: These systems are designed to be used on mobile devices, such as smartphones and tablets.',
    ],
  },
  {
    header: 'How do I choose the right point of sale system for my business?',
    content:
      'There are a number of factors to consider when choosing a point of sale system, including:',
    list: [
      'The size of your business: The size of your business will determine the type and size of point of sale system that you need.',
      'The types of payments you want to accept: Some point of sale systems only accept credit cards, while others also accept debit cards, gift cards, and other forms of payment.',
      'The features you need: Some point of sale systems have more features than others. Make sure to choose a system that has the features you need.',
      'Your budget: Point of sale systems can range in price from a few hundred dollars to several thousand dollars. Choose a system that fits your budget.',
    ],
  },
  {
    header: 'How much does a point of sale system cost?',
    content:
      'The cost of a point of sale system can vary depending on the type of system, the features it offers, and the size of your business. Generally speaking, point of sale systems range in price from a few hundred dollars to several thousand dollars.',
  },
  {
    header: 'How do I get started with payment processing and point of sale systems?',
    content:
      'The first step is to choose a payment processor and a point of sale system. Once you have chosen a payment processor and a point of sale system, you will need to set up an account with the payment processor and install the point of sale system. Once your account is set up and the point of sale system is installed, you will be ready to start accepting payments.',
  },
];

const CASH_DISCOUNT_ITEMS = [
  {
    header: `What is a cash discount program (also known as 'Zero Processing Fees")?`,
    content: `A cash discount program is when a merchant raises prices slightly to cover credit card processing fees and offers a discount to customers who pay with cash. This is legal as long as it's properly disclosed and implemented, and can be a way for merchants to save on fees.`,
  },
  {
    header: `What do I need to get started with Breadme?`,
    content: 'All you simply need is a merchant application and your processing statements',
  },
  {
    header: `What will my receipt look like?`,
    content: '',
    img: '/images/receipt-01.png',
  },
  {
    header: `Is Cash Discount Legal? `,
    content: `Yes, cash discount programs are legal in the United States as long as they are properly disclosed and implemented. Merchants are allowed to raise prices to cover the cost of credit card processing fees and offer a discount to customers who pay with cash. However, it's important to ensure that the program is properly disclosed to customers and that the discount is applied before taxes. Additionally, some states may have specific regulations around cash discount programs, so it's important to check local laws and regulations.`,
  },
  {
    header: `What if I don't like the Cash Discount Program?`,
    content:
      'At Breadme, we have a 100% satisfaction guarantee. If for any reason you want to stop using Cash Discount Program, we will immediately switch you back to the traditional pricing.',
  },
  {
    header: `Is this the same as surcharge?`,
    content:
      'No, it is not! A surcharge is a fee added to a credit card transaction to cover the credit card processing costs. With cash discount, a discount is applied to the total amount when a customer pays with cash.',
  },
  {
    header: `What do I need to enroll into Cash Discount Program?`,
    content: `All you simply need is a merchant application and your processing statements`,
  },
  {
    header: `How does a cash discount program work?`,
    content: `The merchant raises their prices slightly to cover the cost of credit card processing fees but offers a discount to customers who pay with cash, so they can pay the lower price.`,
  },
  {
    header: `Are there any specific regulations around cash discount programs?`,
    content: `Some states may have specific regulations around cash discount programs, so it's important to check local laws and regulations.`,
  },
  {
    header: `Can merchants charge a fee for credit card transactions instead of offering a cash discount?`,
    content: `Merchants can choose to charge a fee for credit card transactions instead of offering a cash discount, but this is considered a surcharge and may be subject to different regulations and laws.`,
  },
];

const CAPITAL_ITEMS = [
  {
    header: `How soon will I receive my cash signing bonus?`,
    content:
      'You will receive your cash signing bonus 3 - 5 business days after the contract has been finalized and signed by both parties.',
  },
  {
    header: `Why do you provide a cash signing bonus?`,
    content: `Our focus is on sharing bread with our customers. We don't need everything for ourselves to be satisfied, so we are pleased to offer additional support to our clients through a cash signing bonus, which will be given after all terms have been agreed upon and signed.`,
  },
  {
    header: `How to qualify for a cash signing bonus?`,
    content: `We require 3 months of processing statements to review .  Given your business meets a certain threshold in total processing volume, we'll be able to offer a cash signing bonus on top of the guaranteed amount.`,
  },
];

export const Faqs = () => {
  const [activeTab, setActiveTab] = useState<`${TabType}`>('General');
  return (
    <main className={styles['faqs']}>
      <div className={styles['faqs_heading']}>
        <SectionHeading
          centered
          centerSp
          level={2}
          heading={
            <>
              Frequently asked <br />
              questions
            </>
          }
          subHeading={
            <Text className="font-18 text-grey">
              Got questions? We’re ready to help you find the answer.
            </Text>
          }
        />
      </div>
      <div className={styles['faqs_segment']}>
        <FQATabs defaultValue={activeTab} onChange={setActiveTab} />
      </div>

      <div className={styles['faqs_inner']}>
        {activeTab === 'General' && (
          <div>
            <Heading level={5} className="mb-24">
              General FAQ
            </Heading>
            <Collapse>
              {GENERAL_ITEMS.map((item, idx) => (
                <Panel header={item.header} key={`${idx}`}>
                  {!isEmpty(item.content) && item.content}
                  {!isEmpty(item.list) && (
                    <ul style={{ marginTop: 8 }}>
                      {item.list?.map((text, idx) => (
                        <li style={{ lineHeight: 1.6 }} key={idx}>
                          {text}
                        </li>
                      ))}
                    </ul>
                  )}
                </Panel>
              ))}
            </Collapse>
          </div>
        )}

        {activeTab === 'Cash Discount' && (
          <div>
            <Heading level={5} className="mb-24">
              Cash Discount FAQ
            </Heading>
            <Collapse>
              {CASH_DISCOUNT_ITEMS.map((item, idx) => (
                <Panel header={item.header} key={`${idx}`}>
                  {!isEmpty(item.content) && item.content}
                  {!isEmpty(item.img) && (
                    <Image
                      alt=""
                      width={740}
                      height={1036}
                      quality={100}
                      className={styles['faqs_content-img']}
                      src={item.img as any}
                    />
                  )}
                </Panel>
              ))}
            </Collapse>
          </div>
        )}

        {activeTab === 'Capital' && (
          <div>
            <Heading level={5} className="mb-24">
              Capital FAQ
            </Heading>
            <Collapse>
              {CAPITAL_ITEMS.map((item, idx) => (
                <Panel header={item.header} key={`${idx}`}>
                  {item.content}
                </Panel>
              ))}
            </Collapse>
          </div>
        )}
      </div>
    </main>
  );
};
