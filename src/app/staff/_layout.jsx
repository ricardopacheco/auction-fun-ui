import { Text } from '@ui-kitten/components';
import { usePathname, Redirect, Stack } from 'expo-router';

import useStaffStore from '~/store/staff';

export default function Layout() {
  const staff = useStaffStore();
  const pathname = usePathname();

  if (!staff._hasHydrated) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!staff.token) {
    if (pathname.includes('/staff/login')) {
      return <Stack />;
    }

    return <Redirect href="/staff/login" />;
  }

  // This layout can be deferred because it's not the root layout.
  return <Stack />;
}
