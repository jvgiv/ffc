import "server-only";

import admin from "firebase-admin";

export class FirebaseAdminConfigurationError extends Error {
  constructor(message, missing = []) {
    super(message);
    this.name = "FirebaseAdminConfigurationError";
    this.missing = missing;
  }
}

function normalizePrivateKey(value) {
  if (!value) {
    return "";
  }

  return value.replace(/\\n/g, "\n").trim();
}

function getRequiredEnv(name) {
  const value = process.env[name]?.trim();

  if (!value) {
    return "";
  }

  return value;
}

function buildServiceAccountCredentialOptions() {
  const projectId = getRequiredEnv("FIREBASE_PROJECT_ID");
  const clientEmail = getRequiredEnv("FIREBASE_CLIENT_EMAIL");
  const privateKey = normalizePrivateKey(getRequiredEnv("FIREBASE_PRIVATE_KEY"));
  const missing = [];

  if (!projectId) {
    missing.push("FIREBASE_PROJECT_ID");
  }

  if (!clientEmail) {
    missing.push("FIREBASE_CLIENT_EMAIL");
  }

  if (!privateKey) {
    missing.push("FIREBASE_PRIVATE_KEY");
  }

  if (missing.length) {
    throw new FirebaseAdminConfigurationError(
      `Firebase Admin credentials are missing required environment variables: ${missing.join(
        ", "
      )}. Add them to your server environment, and store FIREBASE_PRIVATE_KEY with escaped newlines in Vercel if needed.`,
      missing
    );
  }

  return {
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
    projectId,
  };
}

export function getFirebaseAdminStatus() {
  try {
    buildServiceAccountCredentialOptions();

    return {
      ready: true,
    };
  } catch (error) {
    if (error instanceof FirebaseAdminConfigurationError) {
      return {
        ready: false,
        missing: error.missing,
        message: error.message,
      };
    }

    throw error;
  }
}

export function getFirebaseAdminApp() {
  if (!admin.apps.length) {
    admin.initializeApp(buildServiceAccountCredentialOptions());
  }

  return admin.app();
}

export function getAdminDb() {
  return admin.firestore(getFirebaseAdminApp());
}

export function getAdminAuth() {
  return admin.auth(getFirebaseAdminApp());
}

export const FieldValue = admin.firestore.FieldValue;
