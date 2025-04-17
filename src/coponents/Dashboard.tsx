import { Card, CardContent, Typography } from '@mui/material';

interface Props {
  data: any;
}

export default function Dashboard({ data }: Props) {
  if (!data) {
    return <Typography>Waiting for data...</Typography>
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          Coolant Temp: {data.coolantTemp}°\
        </Typography>
        <Typography variant="h6">
          Vibration Level: {data.vibrationLevel}
        </Typography>
        <Typography variant="h6">
          Hydraulic Pressure: {data.hydraulicPressure}
        </Typography>
        <Typography variant="h6">
          System Status: {data.systemStatus}
        </Typography>
        <Typography variant="body2">
          Last updated: {data.timestamp}
        </Typography>
      </CardContent>
    </Card>
  )
}