import { usePathname, Redirect } from 'expo-router';

import RouteLoading from '~/components/UI/RouteLoading/RouteLoading';
import UserLayout from '~/components/layouts/UserLayout';
import useUserStore from '~/store/user';

export default function Layout() {
  const user = useUserStore();
  const pathname = usePathname();

  if (!user._hasHydrated) {
    return <RouteLoading />;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!user.token) {
    if (pathname.includes('/users/login')) {
      return <UserLayout />;
    }

    return <Redirect href="/users/login" />;
  }

  // This layout can be deferred because it's not the root layout.
  return <UserLayout />;
}
