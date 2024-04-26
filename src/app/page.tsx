`use client`;
import { CodeBlock } from "@/components/CodeBlock";
import { Layout } from "@/components/Layout";
import { Navbar } from "@/components/Navbar";
import { OperationSelect } from "@/components/OperationSelect";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <CodeBlock />
      <OperationSelect />
    </Layout>
  );
}
