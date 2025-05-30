# EdgeFlow Visualizer Frontend

A real-time industrial monitoring dashboard that visualizes sensor data from edge computing devices through WebSocket connections.

## Overview

EdgeFlow Visualizer is a React-based frontend application that displays live industrial sensor data including coolant temperature, vibration levels, hydraulic pressure, and system status. The application connects to a backend service via WebSocket using STOMP protocol for real-time data streaming.

## Features

- **Real-time Data Visualization**: Live updates of industrial sensor metrics
- **WebSocket Integration**: STOMP over SockJS for reliable real-time communication
- **Modern UI**: Material-UI components with custom styling
- **Responsive Design**: Optimized for various screen sizes
- **Auto-reconnection**: Automatic WebSocket reconnection on connection loss

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v7
- **WebSocket**: STOMP.js with SockJS fallback
- **Styling**: CSS Modules with custom properties
- **Development**: ESLint, TypeScript

## Architecture

```
src/
├── components/
│   ├── Dashboard.tsx          # Main data display component
│   ├── Dashboard.module.css   # Dashboard styling
│   ├── SensorCard.tsx         # Individual sensor display (placeholder)
│   └── StatusIndicator.tsx    # Status indicator (placeholder)
├── utils/
│   └── stompClient.ts         # WebSocket connection management
├── assets/                    # Static assets
└── App.tsx                    # Main application component
```

## Data Structure

The application expects real-time data in the following format:

```typescript
{
  coolantTemp: number,        // Temperature in degrees
  vibrationLevel: number,     // Vibration measurement
  hydraulicPressure: number,  // Pressure reading
  systemStatus: string,       // Current system state
  timestamp: string          // Last update timestamp
}
```

## Setup & Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd EdgeFlow-Vizualizer-FE
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env` file in the root directory:
```env
VITE_WS_URL=ws://localhost:8080/ws
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## WebSocket Configuration

The application connects to a WebSocket endpoint that should:

1. Accept STOMP connections over SockJS
2. Publish data to `/topic/data` destination
3. Send JSON payloads matching the expected data structure

### Connection Details

- **Protocol**: STOMP over SockJS
- **Subscription**: `/topic/data`
- **Reconnection**: 3-second delay on connection loss
- **Error Handling**: Console logging for connection and broker errors

## Styling

The application uses CSS Modules with custom CSS properties for theming:

- **Brand Colors**: Teal (#05b8b1) and Navy (#005677)
- **Typography**: Rethink Sans for headers, Raleway for body text
- **Layout**: Material-UI Container with responsive design

## Development

### Adding New Components

1. Create component in `src/components/`
2. Add corresponding CSS module if needed
3. Export from component file
4. Import and use in parent components

### Extending Data Display

To add new sensor types:

1. Update the data interface in `Dashboard.tsx`
2. Add new display elements in the Dashboard component
3. Style with CSS modules

## Production Build

```bash
npm run build
```

Builds the app for production to the `dist` folder with optimized bundles.

## Browser Support

- Modern browsers with ES2015+ support
- WebSocket and SockJS compatibility
- Material-UI browser requirements

## License

See LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

**Note**: This frontend requires a compatible backend service that implements the STOMP WebSocket protocol and publishes data to the expected topic format.