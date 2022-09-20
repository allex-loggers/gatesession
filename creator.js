function createGateSessionLogger (execlib, Base) {
  'use strict';

  var lib = execlib.lib;

  var actionfilter = {
    op: 'in',
    field: 'type',
    value: ['created', 'destroyed']
  };

  function GateSessionLogger (conf) {
    Base.call(this, conf);
  }
  lib.inherit(GateSessionLogger, Base);

  GateSessionLogger.prototype.makeUpConfiguration = function (conf) {
    conf.source = conf.source || {};
    conf.source.modulename = "allex:gatesessions:logsource";
    conf.flattener = conf.flattener || {
      "session.session": "sessionid",
      "type": "action",
      "session.user.state.name": "username",
      "session.signalRchannel.remoteAddress": "ip"
    };
    this.imposeFilterDescriptor(conf, actionfilter);
    return Base.prototype.makeUpConfiguration.call(this, conf);
  };

  return GateSessionLogger;
}
module.exports = createGateSessionLogger;