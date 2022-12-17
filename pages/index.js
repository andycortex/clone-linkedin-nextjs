import Head from "next/head";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";

import { Header } from "../components/Header";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import Modal from "../components/Modal";

import { AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import { modalState, modalTypesState } from "../atoms/modalAtom";

export default function Home() {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypesState)
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/home");
    },
  });
  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>LinkedIn - Clone</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header/>
      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          <Sidebar/>
          <Feed/>
        </div>
        <Widgets/>
        <AnimatePresence>
          {modalOpen && (
            <Modal handleClose={() => setModalOpen(false)} type={modalType} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Check if the user is authenticated on the server...
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }
  return {
    props: {
      session,
    }
  }
}