import "server-only";

import { getAdminDb } from "./admin";
import { formatUserRole, normalizeUserRole, USER_ROLES } from "./userRoles";

function serializeTimestamp(value) {
  if (!value) {
    return null;
  }

  if (typeof value.toDate === "function") {
    return value.toDate().toISOString();
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  return null;
}

function getSortTime(record) {
  return (
    Date.parse(record.updatedAt || "") ||
    Date.parse(record.createdAt || "") ||
    0
  );
}

function serializeUser(docSnapshot) {
  const data = docSnapshot.data() || {};
  const role = normalizeUserRole(data.role);

  return {
    id: docSnapshot.id,
    uid: data.uid || docSnapshot.id,
    displayName: data.displayName || "",
    email: data.email || "",
    phoneNumber: data.phoneNumber || "",
    zipCode: data.zipCode || "",
    ageRange: data.ageRange || "",
    role,
    roleLabel: formatUserRole(role),
    createdAt: serializeTimestamp(data.createdAt),
    updatedAt: serializeTimestamp(data.updatedAt),
  };
}

export async function listAllUsersSummary({ limit = 250 } = {}) {
  const snapshot = await getAdminDb().collection("users").get();

  return snapshot.docs
    .map(serializeUser)
    .sort((left, right) => getSortTime(right) - getSortTime(left))
    .slice(0, limit);
}

export function buildUserMetrics(users) {
  const adminCount = users.filter((user) => user.role === USER_ROLES.ADMIN).length;
  const clientCount = users.filter((user) => user.role === USER_ROLES.CLIENT).length;

  return {
    totalUsers: users.length,
    adminCount,
    clientCount,
  };
}