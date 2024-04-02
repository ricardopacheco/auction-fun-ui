import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Slot } from 'expo-router';
import { ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <Slot />
          </ApplicationProvider>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
