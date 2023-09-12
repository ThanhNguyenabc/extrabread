import { Button } from '@/ui/atoms/button/Button';
import { Flex } from '@/ui/atoms/flex/Flex';
import { Heading } from '@/ui/atoms/heading/Heading';
import { BaseForm } from '@/ui/organisms/base-form/BaseForm';
import { Form, Input, Typography } from 'antd';
import { FC } from 'react';
import styles from './SubscriptionForm.module.scss';

const { Text } = Typography;

type Props = {
  onSubmit: (data: { email: string }) => void;
};

export const SubscriptionForm: FC<Props> = ({ onSubmit }) => {
  const [form] = Form.useForm<{ email: string }>();
  return (
    <section className={styles['subscription']}>
      <Flex direction="column" align="start">
        <Heading level={5}>Join 2,000+ subscribers</Heading>
        <Text className="font-18-16-14 text-grey">
          Stay in the loop with everything you need to know.
        </Text>
      </Flex>

      <Flex direction="column" align="start" gap={6}>
        <BaseForm requiredMark={false} form={form} className="w-full" onFinish={onSubmit}>
          <Flex gap={16} align="start">
            <Form.Item
              className="w-full"
              name="email"
              rules={[{ required: true, type: 'email' }]}
              style={{ marginBottom: 0 }}
            >
              <Input placeholder="Enter your email" size="large" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Subscribe
            </Button>
          </Flex>
        </BaseForm>

        <Text type="secondary" className="font-14-12">
          Stay in the loop with everything you need to know.
        </Text>
      </Flex>
    </section>
  );
};
