"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";

import { client } from "@/lib/apollo";

type Props = { children: React.ReactNode };

export default function Providers({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
