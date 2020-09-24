const defaultSettings = {
    clientId: `mqtt-board-${Math.random().toString(16).substr(2, 8)}`,
    wsOptions: {
      objectMode: false,
      perMessageDeflate: true
    },
    host: 'ws://218.156.90.183',
    keepalive: 420,
    protocolVersion: 5,
    resubscribe: false,
    clean: true,
    username: 'ral',
    password: 'ral',
    properties: {
      sessionExpiryInterval: undefined,
      receiveMaximum: undefined,
      maximumPacketSize: undefined,
      topicAliasMaximum: undefined,
      requestResponseInformation: false,
      requestProblemInformation: false,
      userProperties: undefined,
      authenticationMethod: undefined,
      authenticationData: undefined
    },
    will: {
      topic: undefined,
      payload: undefined,
      qos: 0,
      retain: false,
      properties: {
        willDelayInterval: undefined,
        payloadFormatIndicator: false,
        messageExpiryInterval: undefined,
        contentType: undefined,
        responseTopic: undefined,
        correlationData: undefined,
        userProperties: undefined
      }
    }
  },
  defaultSubscriber = {
    topic: '#',
    mode: 0,
    treeField: '',
    highlight: true,
    options: {
      qos: 0,
      nl: false,
      rap: false,
      rh: 0,
      properties: {
        subscriptionIdentifier: undefined,
        userProperties: undefined
      }
    },
    unsubscribeProperties: {
      userProperties: undefined
    }
  },
  defaultPublisher = {
    topic: 'my/topic',
    payload: '{"hello": "world"}',
    options: {
      qos: 0,
      retain: false,
      dup: false,
      properties: {
        payloadFormatIndicator: undefined,
        messageExpiryInterval: undefined,
        topicAlias: undefined,
        responseTopic: undefined,
        correlationData: undefined,
        userProperties: undefined,
        contentType: undefined
      }
    }
  }
export {
  defaultSettings,
  defaultSubscriber,
  defaultPublisher
}
