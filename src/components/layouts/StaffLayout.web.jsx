import { Stack } from 'expo-router';

// eslint-disable-next-line react/prop-types
function StaffLayout({ children }) {
  const screenOptions = { headerShown: false };

  return (
    <div id="StaffLayout">
      <Stack screenOptions={screenOptions} />
      {children}
    </div>
  );
}

export default StaffLayout;
