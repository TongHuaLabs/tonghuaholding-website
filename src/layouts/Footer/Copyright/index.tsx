import React from 'react';
import classNames from 'classnames';
import { useTranslation, Link } from 'gatsby-plugin-react-i18next';

type CopyRightType = {
  className?: string;
};

const CopyRight: React.FC<CopyRightType> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames('flex flex-col space-y-4', className)}>
      <p className="text-sm text-neutral-50">{t('Components.CopyRight')}</p>
      <Link
        className="text-sm font-medium text-neutral-50 hover:underline"
        to="/privacy-policy"
      >
        {t('Components.PrivacyPolicy')}
      </Link>
    </div>
  );
};

export default CopyRight;
