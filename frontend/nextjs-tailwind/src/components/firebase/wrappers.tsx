import { connectAuthEmulator, getAuth } from '@firebase/auth';
import {
  connectFirestoreEmulator,
  Firestore,
  FirestoreSettings,
  getFirestore,
} from '@firebase/firestore';
import {
  useFirebaseApp,
  AuthProvider,
  FirestoreProvider,
  FirebaseAppProvider,
} from 'reactfire';
import { config, emulation } from '@/config/firebase';
interface FirestoreExt extends Firestore {
  _settings: FirestoreSettings;
}

export const FirebaseProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <FirebaseAppProvider firebaseConfig={config}>
      {children}
    </FirebaseAppProvider>
  );
};

export const FirebaseAuthProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  if (emulation.authEmulatorHost && !auth.emulatorConfig) {
    connectAuthEmulator(auth, emulation.authEmulatorHost);
  }
  return <AuthProvider sdk={auth}>{children}</AuthProvider>;
};

export const FirebaseFirestoreProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const app = useFirebaseApp();
  const firestore = getFirestore(app) as FirestoreExt;
  if (
    emulation.firestoreEmulatorHost &&
    firestore?._settings?.host != emulation.firestoreEmulatorHost
  ) {
    const { urn, port } = hostSplitter(emulation.firestoreEmulatorHost);
    if (urn && port) {
      connectFirestoreEmulator(firestore, urn, port);
    }
  }
  return <FirestoreProvider sdk={firestore}>{children}</FirestoreProvider>;
};

const hostSplitter = (host: string) => {
  const split = host.split(':');
  let urn = '';
  let port = 0;
  if (split && split.length == 2) {
    urn = split[0];
    port = parseInt(split[1]);
    if (isNaN(port)) {
      port = 0;
    }
  }
  return { urn, port };
};
