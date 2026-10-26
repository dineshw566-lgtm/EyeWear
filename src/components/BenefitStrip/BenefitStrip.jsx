import { Gift, Coins, CreditCard, Zap } from "lucide-react"
import { Link } from "react-router"
import "./BenefitStrip.css"

export default function BenefitStrip() {
  const benefits = [
    {
      id: "discount",
      icon: <Gift className="benefit-icon" strokeWidth={1.8} />,
      title: "10% OFF",
      subtitle: "For New User",
      link: "/catalogue?offer=newuser",
    },
    {
      id: "neucoins",
      icon: <Coins className="benefit-icon" strokeWidth={1.8} />,
      title: "Earn NeuCoins",
      subtitle: "On eligible Purchase",
      link: "/about",
    },
    {
      id: "emi",
      icon: <CreditCard className="benefit-icon" strokeWidth={1.8} />,
      title: "No Cost EMI",
      subtitle: "Option",
      link: "/about",
    },
    {
      id: "snapmint",
      icon: <Zap className="benefit-icon" strokeWidth={1.8} />,
      title: "Snapmint",
      subtitle: "Buy Now Pay Later",
      link: "/about",
    },
  ]

  return (
    <section
      className="benefit-strip-section"
      aria-label="Customer exclusive benefits"
    >
      <div className="benefit-strip-container">
        {/* Center Benefits List */}
        <div className="benefit-strip-items">
          {benefits.map((item) => (
            <Link key={item.id} to={item.link} className="benefit-item">
              <div className="benefit-icon-box">{item.icon}</div>
              <div className="benefit-text-box">
                <span className="benefit-title">{item.title}</span>
                <span className="benefit-subtitle">{item.subtitle}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
