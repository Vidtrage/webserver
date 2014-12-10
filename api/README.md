Vidtrage API
============

Web API
-------



API to rendering engine
-----------------------

- Get a list of episodes for user
    - request: `/api/user_episodes?user=<userid>`
    - response:
        - Success: `{state: 0, data: [[episodes.json]]}`
        - Failure: `{state: 1, data: <failure reason>}`
- Get a list of ads for the user
    - request: `/api/user_ads?user=<userid>`
    - response: 
        - Success: `{state: 0, data: [[ads.json]]}`
        - Failure: `{state: 1, data: <failure reason>}`
- Pair ad to resource. Will trigger the rendering engine
    - request: `/api/pair?user=<userid>&episode=<epid>&resource=<resourceid>&ad=<adid>`
    - response:
        - Success: *Empty response*
        - Failure: “error reason”
- Cancel pairing of ad and resource. If resource is being rendered, cancel the rendering. If resource was already rendered, it might be worthwhile to keep it, in case the exact same pair will be created again.
    - request: `/api/cancel_pair?user=<userid>&episode=<epid>&resource=<resourceid>&ad=<adid>`
    - response: *No response needed*
- Pair state. The rendering state of a specific pair
    - request: `/api/pair_state?user=<userid>&episode=<epid>&resource=<resourceid>&ad=<adid>`
    - response:
        - `{state: <RENDERING_STATE_ENUM>, percent: <0-100>, data: <in case of error>}`
        - RENDERING_STATE_ENUM:
            - `0` - render ok (percentage should be between 0 and 100)
            - `1` - render error (percentage should be 0, data should contain error message)
