import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.display24',
  appName: 'ionic',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
