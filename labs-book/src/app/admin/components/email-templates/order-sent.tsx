import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const OrderSentEmailTemplate: React.FC = () => {
  return (
    <Html>
      <Head />
      <Preview>DAY Book 24 payment details</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={
              "https://github.com/krisaziabor/labs-day-book-24/blob/main/labs-book/public/sent-email.png?raw=true"
            }
            width="400"
            height="400"
            alt="Enjoy your book!"
          />
          <Section>
            <Text style={text}>
              View the book site{" "}
              <Link style={anchor} href="https://books.designatyale.com">
                here.
              </Link>
            </Text>
            <Text style={text}>Your friends at Design at Yale</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default OrderSentEmailTemplate;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const anchor = {
  textDecoration: "underline",
};
