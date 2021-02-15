    var Ziggy = {
        namedRoutes: {"user.home":{"uri":"home","methods":["GET","HEAD"],"domain":null},"login.attempt":{"uri":"login","methods":["POST"],"domain":null},"user.login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"user.register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"user.create":{"uri":"register","methods":["POST"],"domain":null}},
        baseUrl: 'http://localhost/',
        baseProtocol: 'http',
        baseDomain: 'localhost',
        basePort: false,
        defaultParameters: []
    };

    if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }
