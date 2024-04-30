import "next-auth";
import 'next-auth/jwt';

declare module "next-auth" {
  interface User {
    isMaster: boolean;
    uid: string; 
  }

  interface Session {
    isMaster: boolean;
    uid: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    isMaster: boolean;
    uid: string;
  }
}