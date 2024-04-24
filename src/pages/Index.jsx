// Complete the Index page component for a fence contractor website
import { Box, Flex, Heading, Text, Button, Link, VStack, Input, Textarea, useToast } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate email sending
    toast({
      title: "Email Sent",
      description: "Your message has been sent successfully!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setEmail("");
    setMessage("");
  };

  return (
    <Box>
      <Flex direction="column" align="center" p={5}>
        <Heading as="h1" size="xl" mb={2}>
          FenceCraft Contractors
        </Heading>
        <Text fontSize="lg">Quality Fencing Solutions</Text>
      </Flex>

      <Flex justify="space-around" p={5}>
        <Link href="#services">
          <Button leftIcon={<FaMapMarkedAlt />}>Services</Button>
        </Link>
        <Link href="#about">
          <Button leftIcon={<FaEnvelope />}>About Us</Button>
        </Link>
        <Link href="#contact">
          <Button leftIcon={<FaPhone />}>Contact</Button>
        </Link>
        <Link href="#blog">
          <Button leftIcon={<FaFacebook />}>Blog</Button>
        </Link>
      </Flex>

      <VStack spacing={8} p={5} id="services">
        <Heading as="h2" size="lg">
          Our Services
        </Heading>
        <Text>Fence Installation</Text>
        <Text>Fence Repair</Text>
        <Text>Custom Fencing Solutions</Text>
      </VStack>

      <Box p={5} id="about">
        <Heading as="h2" size="lg">
          About Us
        </Heading>
        <Text>We are a team of experienced fence contractors dedicated to providing high-quality, durable fencing solutions tailored to your needs.</Text>
      </Box>

      <Box p={5} id="contact">
        <Heading as="h2" size="lg">
          Contact Us
        </Heading>
        <VStack as="form" onSubmit={handleSubmit} spacing={4}>
          <Input placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button type="submit" leftIcon={<FaEnvelope />}>
            Send Message
          </Button>
        </VStack>
      </Box>

      <Box p={5} id="blog">
        <Heading as="h2" size="lg">
          Latest From Our Blog
        </Heading>
        <Text>Check back soon for updates!</Text>
      </Box>

      <Flex justify="center" p={5}>
        <Link href="https://facebook.com" isExternal>
          <FaFacebook />
        </Link>
        <Link href="https://twitter.com" isExternal ml={2}>
          <FaTwitter />
        </Link>
        <Link href="https://instagram.com" isExternal ml={2}>
          <FaInstagram />
        </Link>
      </Flex>
    </Box>
  );
};

export default Index;
