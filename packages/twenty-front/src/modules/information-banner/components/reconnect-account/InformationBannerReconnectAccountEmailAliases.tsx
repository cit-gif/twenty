import { InformationBanner } from '@/information-banner/components/InformationBanner';
import { InformationBannerKeys } from '@/information-banner/enums/InformationBannerKeys.enum';
import { useAccountToReconnect } from '@/information-banner/hooks/useAccountToReconnect';
import { useTriggerGoogleApisOAuth } from '@/settings/accounts/hooks/useTriggerGoogleApisOAuth';
import { IconRefresh } from 'twenty-ui';

export const InformationBannerReconnectAccountEmailAliases = () => {
  const { accountToReconnect } = useAccountToReconnect(
    InformationBannerKeys.ACCOUNTS_TO_RECONNECT_EMAIL_ALIASES,
  );

  const { triggerGoogleApisOAuth } = useTriggerGoogleApisOAuth();

  if (!accountToReconnect) {
    return null;
  }

  return (
    <InformationBanner
      message={`Please reconnect your mailbox ${accountToReconnect?.handle} to update your email aliases:`}
      buttonTitle="Reconnect"
      buttonIcon={IconRefresh}
      buttonOnClick={() => triggerGoogleApisOAuth()}
    />
  );
};
