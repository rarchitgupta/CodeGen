`use client`;
import { CodeForm } from "@/components/CodeForm";
import { Layout } from "@/components/Layout";
import { Navbar } from "@/components/Navbar";
import { OperationSelect } from "@/components/OperationSelect";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <CodeForm />
    </Layout>
  );
}
