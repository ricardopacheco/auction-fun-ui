import { Stack } from 'expo-router';

function HomeLayout() {
  const screenOptions = { headerShown: false };

  return <Stack screenOptions={screenOptions} />;
}

export default HomeLayout;
