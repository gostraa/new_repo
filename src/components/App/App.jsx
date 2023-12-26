import { useTranslation } from "react-i18next";
import Hero from "components/Hero/Hero.jsx";
import Header from "components/Header/Header.jsx";

import Manikure from "components/Manicure/Manikure.jsx";
import { NailShapes } from "components/NailShapes/NailShapes";
import Diploms from "components/Diploms/Diploms";
import Reviews from "components/Reviews/Reviews";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Hero t={t} />
      <Manikure t={t} />
      <NailShapes t={t} />
      <Diploms t={t} />
      <Reviews t={t} />
    </>
  );
}

export default App;
