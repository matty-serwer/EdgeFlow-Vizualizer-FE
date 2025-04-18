import { useEffect, useState } from "react";
import { connectStomp, disconnectStomp } from "./utils/stompClient";
import { Container, Typography } from "@mui/material";
import Dashboard from "./components/Dashboard";
import styles from './App.module.css';

export default function App() {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    connectStomp(setData);
    return () => disconnectStomp();
  }, []);

  return (
    <Container maxWidth="md" className={styles.container}>
      <h1 className={styles.gradientBanner}>EdgeFlow</h1>
      <Typography variant="h4" gutterBottom className={styles.dashboard}>
        Latest Broadcast
      </Typography>
      <Dashboard data={data} />
    </Container>
  );
}