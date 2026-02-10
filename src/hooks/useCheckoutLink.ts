import { useMemo } from 'react';
import { buildURLWithUTM } from '../utils/utm';

const CHECKOUT_BASE_URL = 'https://pay.hotmart.com/U104374588O?checkoutMode=10';

export function useCheckoutLink(): string {
  const checkoutUrl = useMemo(() => {
    return buildURLWithUTM(CHECKOUT_BASE_URL);
  }, []);

  return checkoutUrl;
}
