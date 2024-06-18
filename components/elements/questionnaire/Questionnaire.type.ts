import { DrawerProps } from 'antd';

export type QuestionnaireProps = {
  showDialog: () => void;
  closeDialog: () => void;
} & DrawerProps;
