import { useState, useEffect } from "react";
import { Animator,batch,Fade,FadeUp, MoveIn, MoveOut} from "react-scroll-motion";
import PortfolioItem from "../../components/portfolioItem/PortfolioItem";
import PortfolioList from "../../components/portfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import "./portfolio.scss";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

const ZoomInScrollOut = batch(Fade(),MoveIn(0,400),MoveOut(0,-400));

  return (
    <div className="portfolio" id="portfolio">
      <h1>PORTFOLIO</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
            key={index}
            item={item}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <Animator animation={ZoomInScrollOut}>
      <div className="container">
        {data.map((d, i) => (
          <PortfolioItem d={d} key={i} active={d.type === selected} />
        ))}
      </div>
      </Animator>
    </div>
  );
};

export default Portfolio;
