export const ACC_CONFIGURATION_VALUES = {
    udpPort: {
        minValue: 1,
        maxValue: 65535,
        defaultValue: 9600, // TODO CHECK
    },
    tcpPort: {
        minValue: 1,
        maxValue: 65535,
        defaultValue: 9600, // TODO CHECK
    },
    maxConnections: {
        minValue: 1,
        maxValue: 1000,
        defaultValue: 10,
    },
    lanDiscovery: {
      defaultValue: 1,
    },
    registerToLobby: {
      defaultValue: 1,
    },
    publicIP: {
      defaultValue: undefined,
    },
    configVersion: {
      defaultValue: 1,
    }, 
};
