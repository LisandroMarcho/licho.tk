import {
  applicationDefault,
  initializeApp,
  getApps,
  cert,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

let app;

if (!getApps().length)
  // app = initializeApp({
  //   credential: applicationDefault(),
  // });

  app = initializeApp({
    credential: cert({
      clientEmail: process.env.CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
      projectId: process.env.FIREBASE_PROJECT_ID,
    }),
  });

export const db = getFirestore(app);
