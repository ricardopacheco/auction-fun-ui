import { Stack } from 'expo-router';

function UserLayout() {
  const screenOptions = { headerShown: false };

  return <Stack screenOptions={screenOptions} />;
}

export default UserLayout;
