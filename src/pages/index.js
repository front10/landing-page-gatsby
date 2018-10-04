//core
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
//front10 components
import "@front10/landing-page-book/dist/components/Hero/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Team/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Footer/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Social/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Image/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Header/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Container/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Section/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Video/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Column/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Row/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Code/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Features/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Copyright/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/GithubButton/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/BuiltWith/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Gif/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Backers/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Donation/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Link/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Navbar/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Button/style.legacy_browsers.css";
//theme for code
import "codemirror/theme/oceanic-next.css";
import "../app.css";

import React from "react";

import Hero from "@front10/landing-page-book/dist/components/Hero";
import Team from "@front10/landing-page-book/dist/components/Team";
import Footer from "@front10/landing-page-book/dist/components/Footer";
import Social from "@front10/landing-page-book/dist/components/Social";
import Image from "@front10/landing-page-book/dist/components/Image";
import Header from "@front10/landing-page-book/dist/components/Header";
import Container from "@front10/landing-page-book/dist/components/Container";
import Section from "@front10/landing-page-book/dist/components/Section";
import Video from "@front10/landing-page-book/dist/components/Video";
import Column from "@front10/landing-page-book/dist/components/Column";
import Row from "@front10/landing-page-book/dist/components/Row";
import Code from "@front10/landing-page-book/dist/components/Code";
import Features from "@front10/landing-page-book/dist/components/Features";
import Copyright from "@front10/landing-page-book/dist/components/Copyright";
import GithubButton from "@front10/landing-page-book/dist/components/GithubButton";
import BuiltWith from "@front10/landing-page-book/dist/components/BuiltWith";
import Gif from "@front10/landing-page-book/dist/components/Gif";
import Backers from "@front10/landing-page-book/dist/components/Backers";
import Donation from "@front10/landing-page-book/dist/components/Donation";
import Link from "@front10/landing-page-book/dist/components/Link";
import Analytics from "@front10/landing-page-book/dist/components/Analytics";

import Helmet from "react-helmet";

import AnimatedHero from "../hero.jsx";

import team from "../data/team.json";
import features from "../data/features.json";
import particles from "../data/particles.json";
import build from "../data/build.json";
import backers from "../data/backers.json";
import { navBarCode, importThemes } from "../data/code";

import logo from "../favicon.png";

export default () => (
  <div className="App">
    <Helmet defaultTitle={`Landing Page Book`}>
      <link rel="shortcut icon" href={logo} />
      <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,Symbol" />
    </Helmet>
    <Analytics idTracking="UA-44521541-9" />
    <Hero opacity={1} overlayColor="#212529" particlesParams={particles}>
      <Container>
        <Image
          src="images/logo/front10.png"
          rounded
          width="160"
          alt="Front10 logo"
          className="main-logo"
        />
        <Header className="main-header">Landing Page Book</Header>
        <Header className="main-subheader">React components to build!</Header>
        <div className="mt-5">
          <Link
            className="btn btn-primary btn-started"
            href="https://front10.com/landing-page-book"
            target="_blank"
          >
            Explore
          </Link>
          <GithubButton
            btnType="star"
            btnText="Stars"
            username="front10"
            repository="landing-page-book"
          />
        </div>
        <AnimatedHero />
      </Container>
    </Hero>
    <Section gray>
      <Container className="text-center">
        <Image
          className="gif-toolbar"
          src="images/demo/top-bar.svg"
          alt="Code tool bar"
        />
        <Gif autoplay image="images/demo/code.gif" />
      </Container>
    </Section>
    <Section
      subTitle="Landing page book is a scalable choice for developers"
      title="FEATURES"
    >
      <Container>
        <Features
          features={features}
          imageCircle={false}
          showBorder={false}
          showSubtitle={true}
        />
      </Container>
      <Container className="text-center">
        <Link
          className="btn btn-primary btn-started"
          href="https://front10.com/landing-page-book"
          target="_blank"
        >
          Explore
        </Link>
      </Container>
    </Section>
    <Section
      subTitle="One Look Is Worth A Thousand Words"
      title="TAKE A SNEAK PEEK"
      gray
    >
      <Container>
        <Video source="https://youtu.be/dCrLwWdju68" />
      </Container>
      <Container className="text-center mt-5">
        <Link
          className="btn btn-primary btn-started"
          href="https://front10.com/landing-page-book"
          target="_blank"
        >
          Explore
        </Link>
      </Container>
    </Section>
    <Section subTitle="Very fast and easy to use" title="OUR CODE">
      <Container>
        <Row>
          <Column className="col col-md-12">
            <div className="text-center">
              <p>Let's import the HERO component</p>
            </div>
            <Code
              readOnly
              theme="oceanic-next"
              languageCode="jsx"
              code={importThemes}
              showheader={false}
              showfooter={false}
              lineNumbers={true}
            />
          </Column>
        </Row>
        <Row>
          <Column className="col col-md-6 mt-5 code-secondary">
            <div className="text-center">
              <p>An example used to create a beautiful Hero component</p>
            </div>
            <Code
              readOnly
              theme="oceanic-next"
              languageCode="jsx"
              code={navBarCode}
              showheader={false}
              showfooter={false}
              lineNumbers={true}
            />
          </Column>
          <Column className="col col-md-6 mt-5">
            <div className="text-center">
              <p>It's that easy to have a beautiful Hero</p>
            </div>
            <div className="mt-3">
              <Hero
                backgroundColor="#212529"
                header="Front10"
                minHeight="350px"
                subHeader="Rewriting the world with React"
                image="images/hero/map-image.png"
                particlesParams={{
                  particles: {
                    shape: {
                      type: "star",
                      stroke: {
                        width: 1,
                        color: "#fff"
                      }
                    },
                    line_linked: {
                      enable: false
                    }
                  }
                }}
              />
            </div>
          </Column>
        </Row>
      </Container>
      <Container className="text-center mt-5">
        <Link
          className="btn btn-primary btn-started"
          href="https://front10.com/landing-page-book"
          target="_blank"
        >
          Explore
        </Link>
      </Container>
    </Section>
    <Section
      title="THEMING"
      subTitle=" Change the appearance of the components using standard CSS variables"
      gray
    >
      <Container>
        <Row>
          <Column>
            <Gif autoplay image="images/demo/themes.gif" />
          </Column>
        </Row>
      </Container>
      <Container className="text-center mt-5">
        <Link
          className="btn btn-primary btn-started"
          href="https://front10.com/landing-page-book"
          target="_blank"
        >
          Explore
        </Link>
      </Container>
    </Section>
    <Section subTitle="Used tecnologies and frameworks" title="BUILD WITH">
      <Container className="text-center BuildWith">
        <BuiltWith gray companies={build} />
      </Container>
    </Section>
    <Section subTitle="These are our members" title="TEAM" gray>
      <Container>
        <Team
          showBorder={false}
          members={team}
          socials={["linkedin", "twitter"]}
        />
      </Container>
      <Container className="text-center">
        <Link
          className="btn btn-primary btn-started"
          href="https://front10.com/landing-page-book"
          target="_blank"
        >
          Explore
        </Link>
      </Container>
    </Section>
    <Section subTitle="We are happy to help ;)" title="FEEDBACK AND SUPPORT">
      <Container className="text-center BuildWith">
        <Image
          src="images/support/maintenance.svg"
          alt="Maintenance"
          width="100"
          className="ml-3 mr-3"
        />
        <Image
          src="images/support/happy.svg"
          alt="Maintenance"
          width="100"
          className="ml-3 mr-3"
        />
        <p className="mt-3">
          To report any issues or feedback please{" "}
          <Link
            href="https://github.com/front10/landing-page-book/issues"
            target="_blank"
          >
            click here
          </Link>
          .
        </p>
      </Container>
    </Section>
    <Section subTitle="Who donates us" title="BACKERS" gray>
      <Container className="text-center">
        <Backers backers={backers} />
      </Container>
    </Section>
    <Footer>
      <Row>
        <Column className="col-sm-12 col-md">
          <Copyright showAllRightText={false} text="Front10, LLC" />
        </Column>
        <Column className="col-sm-12 col-md mt-3 mt-md-0">
          <span>With ♥ by </span>
          <Link href="https://front10.com/" target="_blank">
            <Image
              alt="Front 10 logo"
              src="https://front10.com/img/logos/logo-main.png"
              width="100"
            />
          </Link>
        </Column>
        <Column className="col-sm-12 col-md mt-3 mt-md-0">
          <Social type="twitter" url="https://twitter.com/front10hello" />
          <Social
            type="linkedin"
            url="https://www.linkedin.com/company/front10/"
          />
        </Column>
      </Row>
    </Footer>
  </div>
);
