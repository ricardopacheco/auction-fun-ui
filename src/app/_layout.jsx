import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { Slot } from 'expo-router';
import { ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text category="h1">HOME</Text>
              <Slot />
            </Layout>
          </ApplicationProvider>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
