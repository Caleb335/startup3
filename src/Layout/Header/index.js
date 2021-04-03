import React from "react";
import Link from "next/link";
import Button from "../../components/Button";
import styled from "styled-components";

const Hero = styled.section`
  height: 600px;
  background: var(--primary);
  color: var(--secondary);

  .terms {
    font-size: 16px;
    opacity: 0.3;
    text-align: center;
    margin-top: -20px;
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    .terms {
      margin-top: 50px;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    .terms {
      margin-top: 15px;
    }
  }
`;

const Nav = styled.header`
  display: flex;
  padding: 35px 120px;
  display: flex;
  justify-content: space-between;

  .brand {
    font-size: 24px;
    line-height: 34px;
    font-weight: 700;
  }

  nav {
    display: flex;
    text-transform: capitalize;

    & ul li {
      justify-content: space-between;
      font-size: 18px;
      padding: 6px 16px;
      line-height: 28px;
      list-style: none;

      &:hover {
        border-bottom: 1px solid var(--secondary);
        transition: all 0.3s ease-out;
        cursor: pointer;
      }
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding: 24px 20px;

    .brand {
      font-size: 15px;
      padding: 4px 0;
    }

    nav ul li {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    padding: 24px 15px;
    white-space: nowrap;

    .brand {
      font-size: 15px;
      padding: 4px 0;
    }
    nav {
      margin-left: 10px;
    }
    nav ul li {
      font-size: 14px;
      padding: 6px 4px;
    }
  }
`;

const HeroTexts = styled.div`
  width: 770px;
  height: 311.8px;
  margin: 0 auto;

  & .text-containers {
    text-align: center;
    h1 {
      font-size: 72px;
      font-weight: 700px;
      line-height: 82px;
      color: var(--secondary);
    }
    p {
      width: 596px;
      height: 80px;
      padding: 20px 0;
      font-size: 22px;
      line-height: 32px;
      margin: 0 auto;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 100%;
    height: 280px;

    .text-containers {
      & h1 {
        font-size: 80px;
        line-height: 80px;
        padding: 10px 6px;
      }

      & p {
        font-size: 22px;
        width: 100%;
        line-height: 32px;
        padding: 20px 50px;
      }
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    width: 100%;
    height: 280px;

    .text-containers {
      & h1 {
        font-size: 45px;
        line-height: 50px;
      }

      & p {
        font-size: 17px;
        width: 100%;
        line-height: 26px;
        padding: 20px 10px;
      }
    }
  }
`;

const Search = styled.div`
  width: 490px;
  height: 80px;
  margin: 0 auto;

  & input {
    width: 350px;
    height: 50px;
    border-radius: 100px;
    border: 2px solid var(--secondary);
    opacity: 0.4;
    mix-blend-mode: normal;
    background: var(--primary);
    outline: none;
    padding: 0 15px;
    color: var(--secondary);

    &::placeholder {
      line-height: 26px;
      color: var(--secondary);
      opacity: 1;
    }
    &:focus {
      border: 2px solid var(--btn-primary);
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    width: 100%;
    padding: 18px 8px;

    & input {
      width: 100%;
      margin-bottom: 13px;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    // width: 100%;
    padding: 50px 0;
    margin: 0 auto;
  }
`;

const navLinks = [
  {
    name: "subscribe",
    path: "/subscribe",
  },
  {
    name: "features",
    path: "/features",
  },
];

const Header = () => {
  const [input, setInput] = React.useState([
    {
      email: "",
    },
  ]);

  const handleInputChange = (name) => (e) => {
    setInput({
      // spreads the value gooteen from the input and
      // adds it into the new state array.
      ...name,
      [name]: e.target.value,
    });
  };
  return (
    <Hero>
      <Nav>
        <p className="brand">Startup 3</p>
        <nav>
          {navLinks.map((link, index) => {
            return (
              <Link href={link.path} key={index}>
                <ul>
                  <li>{link.name}</li>
                </ul>
              </Link>
            );
          })}
          <Button className="btn-head">
            <Link href="/signup" target="__blank">
              sign up
            </Link>
          </Button>
        </nav>
      </Nav>
      <HeroTexts>
        <div className="text-containers">
          <h1 className="slide-in-left">Let’s make design fast and easy</h1>
          <p className="slide-in-right">
            The most important part of the Startup is the samples. The samples
            form a set of 25 usable pages you can use as is or you can add new
            blocks from UI Kit.
          </p>
        </div>
      </HeroTexts>
      <Search className="fade-in">
        <input
          type="text"
          name="email"
          value={input.email}
          placeholder="Your email"
          onChange={handleInputChange("email")}
        ></input>
        <Button className="btn-search">send</Button>
      </Search>
      <p className="terms">By signing up, you agree to the Terms of Service</p>
    </Hero>
  );
};

export default Header;
