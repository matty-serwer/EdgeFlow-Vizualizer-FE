import SockJS from 'sockjs-client';
import { Client, IMessage } from '@stomp/stompjs';

const URL = import.meta.env.VITE_WS_URL;

let stompClient: Client | null = null;

export const connectStomp = (onMessage: (data: any) => void) => {
  stompClient = new Client({
    webSocketFactory: () => new SockJS(URL),
    reconnectDelay: 3000,
    onConnect: () => {
      console.log('[WS] Connected');
      stompClient?.subscribe('/topic/data', (message: IMessage) => {
        const payload = JSON.parse(message.body);
        onMessage(payload);
      });
    },
    onStompError: (frame) => {
      console.error('[WS] Broker error:', frame.headers['message']);
    },
    onWebSocketError: (err) => {
      console.error('[WS] Connection error:', err);
    },
  });

  stompClient.activate();
};

export const disconnectStomp = () => {
  if (stompClient?.connected) {
    stompClient.deactivate();
  }
}