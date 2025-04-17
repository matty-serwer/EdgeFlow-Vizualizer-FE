import { useEffect, useState } from "react";
import { connectStomp, disconnectStomp } from "./utils/stompClient";
import { Container, Typography } from "@mui/material";
// Components
import Dashboard from "./coponents/Dashboard";

export default function App() {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    connectStomp(setData);
    return () => disconnectStomp();
  }, []);

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        EdgeFlow Daashboard
      </Typography>
      <Dashboard data={data} />
    </Container>
  )
}