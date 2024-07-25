import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";
import {Button, Container, Stack} from "react-bootstrap"

export default function Home() {
  return (
    <Container className="py-4 h-100 d-flex flex-column justify-content-center align-items-center">
    <h1>Welcome to Superate</h1>
    <Stack direction="horizontal" gap={2}>
    <Button variant="primary">
      <Link href="/verification" className={`link-underline-none ${styles.verifyLink}`}>Go to Verifications</Link>
    </Button>
    {/* <Button variant="outline-primary">
      <Link href="/verification" className="text-no-underline">Go to Verifications</Link>
    </Button> */}
    </Stack>
    </Container>
  );
}
