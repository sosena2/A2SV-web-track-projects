import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    data: {
      accessToken: string;
    };
  }

  interface Session {
    user: {
      data: {
        accessToken: string;
      };
      name?: string;
      email?: string;
      image?: string;
    };
  }
}
