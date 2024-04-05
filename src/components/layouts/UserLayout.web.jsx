import { Stack } from 'expo-router';

// eslint-disable-next-line react/prop-types
function UserLayout({ children }) {
  const screenOptions = { headerShown: false };

  return (
    <div id="UserLayout">
      <Stack screenOptions={screenOptions} />
      {children}
    </div>
  );
}

export default UserLayout;
