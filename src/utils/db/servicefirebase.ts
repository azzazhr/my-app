import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  addDoc,
  where,
  updateDoc,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcryptjs";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

// reusable: ambil user berdasarkan email
export async function getUserByEmail(email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data.length > 0 ? data[0] : null;
}

// reusable: tambah user baru
export async function createUser(userData: any) {
  return await addDoc(collection(db, "users"), userData);
}

// reusable: update user berdasarkan id
export async function updateUser(id: string, userData: any) {
  return await updateDoc(doc(db, "users", id), userData);
}

// tetap dipakai oleh NextAuth credential login
export async function signIn(email: string) {
  return await getUserByEmail(email);
}

// register credential
export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
  },
  callback: Function
) {
  try {
    const existingUser = await getUserByEmail(userData.email);

    if (existingUser) {
      callback({
        status: "error",
        message: "User already exists",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    await createUser({
      ...userData,
      password: hashedPassword,
      role: userData.role || "member",
    });

    callback({
      status: "success",
      message: "User registered successfully",
    });
  } catch (error: any) {
    callback({
      status: "error",
      message: error.message,
    });
  }
}

// reusable untuk OAuth provider (Google, GitHub, dll)
export async function signInWithOAuth(userData: any, callback: Function) {
  try {
    const existingUser: any = await getUserByEmail(userData.email);

    if (existingUser) {
      const updatedData = {
        ...userData,
        role: existingUser.role,
      };

      await updateUser(existingUser.id, updatedData);

      callback({
        status: true,
        message: "User logged in successfully",
        data: updatedData,
      });
    } else {
      const newUser = {
        ...userData,
        role: userData.role || "member",
      };

      await createUser(newUser);

      callback({
        status: true,
        message: "User registered successfully",
        data: newUser,
      });
    }
  } catch (error: any) {
    callback({
      status: false,
      message: error.message,
    });
  }
}