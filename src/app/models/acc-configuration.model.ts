export interface AccConfiguration {
  udpPort: number;
  tcpPort: number;
  maxConnections: number;
  lanDiscovery: 0 | 1;
  registerToLobby: 0 | 1;
  publicIP?: string;
  configVersion: number;
}
