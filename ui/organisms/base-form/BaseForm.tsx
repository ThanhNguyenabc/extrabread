import { Form, FormProps } from 'antd';
import classNames from 'classnames';
import styles from './BaseForm.module.scss';

export const BaseForm = ({ children, ...props }: FormProps) => {
  return (
    <Form
      {...props}
      className={classNames(styles['base-form'], props.className)}
      validateMessages={{ required: 'This field is required!' }}
    >
      {children as any}
    </Form>
  );
};
