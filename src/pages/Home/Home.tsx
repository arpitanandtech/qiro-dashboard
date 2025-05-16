import Header from "../../shared/Header/Header"
import Activity from "./components/Activity/Activity"
import BoxContainer from "./components/BoxContainer/BoxContainer"
import Hero from "./components/Hero/Hero"
import Transaction from "./components/Transaction/Transaction"

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BoxContainer leftChildren={<Activity />} rightChildren={<Transaction />} />
    </div>
  )
}

export default Home
