import Image from "next/image";
import styles from "./page.module.css";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-4">
            <Profile />
          </div>
          <div className="col col-8">
            <h1>Porfolio</h1>
          </div>
        </div>
      </div>
    </>
  );
}
