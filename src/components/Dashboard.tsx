import { Card, CardContent, Typography } from '@mui/material';
import styles from './Dashboard.module.css';

interface Props {
  data: any;
}

export default function Dashboard({ data }: Props) {
  if (!data) {
    return <Typography>Waiting for data...</Typography>;
  }

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h6">
          Coolant Temp: <span className={styles.dataValue}>{data.coolantTemp}°</span>
        </Typography>
        <Typography variant="h6">
          Vibration Level: <span className={styles.dataValue}>{data.vibrationLevel}</span>
        </Typography>
        <Typography variant="h6">
          Hydraulic Pressure: <span className={styles.dataValue}>{data.hydraulicPressure}</span>
        </Typography>
        <Typography variant="h6">
          System Status: <span className={styles.dataValue}>{data.systemStatus}</span>
        </Typography>
        <Typography variant="h6">
          Last updated: <span className={styles.dataValue}>{data.timestamp}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}