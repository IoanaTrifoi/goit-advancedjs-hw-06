/*
  Utilitarul Record<K, T> este metoda standard în TypeScript pentru a asocia descrieri fiecărei valori dintr-un enum.
*/

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};

export {};
