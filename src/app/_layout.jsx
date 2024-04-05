import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import HomeLayout from '~/components/layouts/HomeLayout';

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <StatusBar translucent animated barStyle="dark-content" backgroundColor="transparent" />

            <HomeLayout>
              <Slot />
            </HomeLayout>
          </ApplicationProvider>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
