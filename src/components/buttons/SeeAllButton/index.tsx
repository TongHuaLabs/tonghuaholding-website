import React from 'react';
import { PrimaryButton } from '@/components/buttons';
import classNames from 'classnames';
import { useTranslation } from 'gatsby-plugin-react-i18next';

type SeeAllButtonProps = {
  className?: string;
};

const SeeAllButton: React.FC<SeeAllButtonProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <PrimaryButton
      title={t('Components.SeeAllButton.Title')}
      className={classNames('text-sm font-medium', className)}
    />
  );
};

export default SeeAllButton;
