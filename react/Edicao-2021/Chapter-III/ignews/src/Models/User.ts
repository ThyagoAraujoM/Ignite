import { dbAdmin } from "../services/firebaseAdmin";

type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  provider: string;
  updatedAt: Date;
  stripe_customer_id?: string;
};

export async function createUser(userData: User) {
  const userRef = dbAdmin.collection("users").doc(userData.id);
  await userRef.set(userData, { merge: true });
}

export async function getUserByEmail(userEmail: string): Promise<User | null> {
  const snapshot = await dbAdmin
    .collection("users")
    .where("email", "==", userEmail)
    .get();

  if (snapshot.empty) {
    return null;
  }

  const userDoc = snapshot.docs[0];
  return {
    id: userDoc.id,
    ...(userDoc.data() as Omit<User, "id">),
  };
}

export async function getSubscriptionByUserEmail(userEmail: string): Promise<any> {
  const snapshot = await dbAdmin
    .collection("users")
    .where("email", "==", userEmail)
    .get();

  if (snapshot.empty) {
    return null;
  }

  const userDoc = snapshot.docs[0];
  const userId = userDoc.id;
  
  const subSnapshot = await dbAdmin
    .collection("subscription")
    .where("userId", "==", userId)
    .where("status", "==", "active")
    .limit(1)
    .get();

  if (subSnapshot.empty) {
    return null;
  }

  return subSnapshot.docs[0].data();
}

export async function getUserByCustomerId(customerId: string): Promise<any> {
  const snapshot = await dbAdmin
    .collection("users")
    .where("stripe_customer_id", "==", customerId)
    .get();

  if (snapshot.empty) {
    return null;
  }

  const userDoc = snapshot.docs[0];
  return {
    id: userDoc.id,
    ...userDoc.data(),
  };
}

export async function updateUser(userId: string, data: any) {
  await dbAdmin.collection("users").doc(userId).set(data, { merge: true });
}
