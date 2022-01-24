import Head from "next/head";
import Image from "next/image";
import GradientLayout from "../components/gradientLayout";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <GradientLayout
      color="gray"
      subtitle="profile"
      description="15 public playlists"
      title="Allen Tran"
      image="allen.jpeg"
    >
      ;<div> home page </div>
    </GradientLayout>
  );
};

export default Home;
