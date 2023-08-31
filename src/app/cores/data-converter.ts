import { DocumentData, QueryDocumentSnapshot } from "@angular/fire/firestore";

export const dataConverter = {
  toFirestore: (data: any) => {
    return data;
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<DocumentData>, options: any) => {
    const data = snapshot.data(options);
    return { ...data, id: snapshot.id };
  }
};