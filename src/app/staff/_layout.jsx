import { usePathname, Redirect } from 'expo-router';

import RouteLoading from '~/components/UI/RouteLoading/RouteLoading';
import StaffLayout from '~/components/layouts/StaffLayout';
import useStaffStore from '~/store/staff';

export default function Layout() {
  const staff = useStaffStore();
  const pathname = usePathname();

  if (!staff._hasHydrated) {
    return <RouteLoading />;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (staff.token) {
    if (pathname.includes('/staff/login')) {
      return <StaffLayout />;
    }

    return <Redirect href="/staff/login" />;
  }

  // This layout can be deferred because it's not the root layout.
  return <StaffLayout />;
}
