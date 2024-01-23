import { Form, FormProps } from 'antd';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import styles from './BaseForm.module.scss';

export const BaseForm = ({ children, ...props }: FormProps) => {
  const { t } = useTranslation();
  return (
    <Form
      {...props}
      className={classNames(styles['base-form'], props.className)}
      validateMessages={{ required: t('required_message') }}
    >
      {children as any}
    </Form>
  );
};
