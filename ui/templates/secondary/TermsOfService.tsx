import { Space, Typography } from 'antd';
import Head from 'next/head';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Heading, SectionHeading } from '~/ui/atoms/heading/Heading';
import styles from './index.module.scss';

const { Text } = Typography;

export const TermsOfService = () => {
  return (
    <div className={styles['terms-of-service']}>
      <Head>
        <title>Terms Of Service</title>
      </Head>
      <BreadCard>
        <SectionHeading centered centerSp level={2} heading="Terms of service" />

        <div className={styles['terms-of-service_inner']}>
          <Flex direction="column" gap={16}>
            <Text>
              Welcome to ExtraBread.com. These Terms of Service (“Terms”) are a legal agreement
              between you and ExtraBread.com (hereinafter “we”, “us”, or “our”) regarding your use
              of our website (the “Site”) and any services offered through the Site.
            </Text>
            <Text>
              By accessing or using the Site or any of our services, you agree to be bound by these
              Terms. If you do not agree to these Terms, please do not use the Site or our services.
            </Text>
          </Flex>

          <div>
            <Heading size="sm" className="mb-8 block">
              1. Use of the Site
            </Heading>
            <Text>
              You may use the Site only for lawful purposes and in accordance with these Terms. You
              agree not to use the Site:
            </Text>

            <Text>
              In any way that violates any applicable federal, state, local or international law or
              regulation.
            </Text>
            <Text>
              To transmit, or procure the sending of, any advertising or promotional material,
              including any “junk mail”, “chain letter” or “spam” or any other similar solicitation.
            </Text>
            <Text>
              To impersonate or attempt to impersonate ExtraBread.com, an ExtraBread.com employee,
              another user or any other person or entity.
            </Text>
            <Text>
              To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of
              the Site, or which, as determined by us, may harm ExtraBread.com or users of the Site.
            </Text>
          </div>

          <div>
            <Heading size="sm" className="mb-8 block">
              2. Intellectual Property
            </Heading>
            <Space direction="vertical" size={16}>
              <Text>
                The Site and its entire contents, features, and functionality (including but not
                limited to all information, software, text, displays, images, video, and audio, and
                the design, selection, and arrangement thereof), are owned by ExtraBread.com, its
                licensors, or other providers of such material and are protected by United States
                and international copyright, trademark, patent, trade secret, and other intellectual
                property or proprietary rights laws.
              </Text>
              <Text>
                These Terms permit you to use the Site for your personal, non-commercial use only.
                You must not reproduce, distribute, modify, create derivative works of, publicly
                display, publicly perform, republish, download, store or transmit any of the
                material on our Site, except as follows:
              </Text>
              <Text>
                Your computer may temporarily store copies of such materials in RAM incidental to
                your accessing and viewing those materials. You may store files that are
                automatically cached by your Web browser for display enhancement purposes.
              </Text>
              <Text>
                You may print or download one copy of a reasonable number of pages of the Site for
                your own personal, non-commercial use and not for further reproduction, publication,
                or distribution.
              </Text>
              <Text>
                If we provide desktop, mobile, or other applications for download, you may download
                a single copy to your computer or mobile device solely for your own personal,
                non-commercial use, provided you agree to be bound by our end user license agreement
                for such applications.
              </Text>
              <Text>
                If you print, copy, modify, download or otherwise use or provide any other person
                with access to any part of the Site in breach of the Terms, your right to use the
                Site will stop immediately and you must, at our option, return or destroy any copies
                of the materials you have made.
              </Text>
            </Space>
          </div>

          <div>
            <Heading size="sm" className="mb-8 block">
              3. User Contributions
            </Heading>
            <Space direction="vertical" size={16}>
              <Text>
                The Site may contain message boards, chat rooms, personal web pages or profiles,
                forums, bulletin boards and other interactive features (collectively, “Interactive
                Services”) that allow users to post, submit, publish, display or transmit to other
                users or other persons (hereinafter, “post”) content or materials (collectively,
                “User Contributions”) on or through the Site.
              </Text>
              <Text>
                All User Contributions must comply with these Terms, and any additional terms and
                conditions posted on the Site. User Contributions must not:
              </Text>
              <Text>
                Be libelous or defamatory, obscene, pornographic, abusive, or offensive, or contain
                any material that is illegal.
              </Text>
              <Text>
                Infringe any patent, trademark, trade secret, copyright, or other intellectual
                property or other rights of any other person.
              </Text>
              <Text>Violate the legal rights</Text>
            </Space>
          </div>
        </div>
      </BreadCard>
    </div>
  );
};
