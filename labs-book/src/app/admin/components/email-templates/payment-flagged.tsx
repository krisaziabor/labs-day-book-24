import {
    Body,
    Button,
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
  
  interface DayActionRequiredEmailProps {
    userFirstname?: string;
    flaggingDescription?: string;
  }
  


  export const ActionRequiredEmailTemplate: React.FC<Readonly<DayActionRequiredEmailProps>> = ({
    userFirstname,
    flaggingDescription,
  }: DayActionRequiredEmailProps) => {
    return (
      <Html>
        <Head />
        <Preview>DAY Book 24 payment details</Preview>
        <Body style={main}>
          <Container style={container}>
            <Img
              src={"https://github.com/krisaziabor/labs-day-book-24/blob/main/labs-book/public/day-studios.jpg?raw=true"}
              width="123"
              height="73"
              alt="DAY Logo"
            />
            <Section>
              <Text style={text}>Hi {userFirstname},</Text>
              <Text style={text}>
                We were checking the payment details you provided when you pre-ordered the book and noticed that{" "} {flaggingDescription}.
              </Text>
              <Button style={button} href="mailto:hello@designatyale.com?subject=Resolved payment details issue">
                Reach out to us
              </Button>
              <Text style={text}>
                Whenever you fix the issue, let us know and we will verify your payment & send you a copy of the book.
              </Text>
              <Text style={text}>
                Thank you for being a part of the DAY family! View the book site {" "}
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
  
  export default ActionRequiredEmailTemplate;
  
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
  
  const button = {
    backgroundColor: "#000000",
    borderRadius: "4px",
    color: "#fff",
    fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
    fontSize: "15px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "210px",
    padding: "14px 7px",
  };
  
  const anchor = {
    textDecoration: "underline",
  };
  