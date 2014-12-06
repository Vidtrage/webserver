import logging


class RenderingServer(object):
    _connection = None

    logging.basicConfig(level=logging.DEBUG)

    def pair(self, episode, scene, resource, ad):
        if self._connection is None:
            self.connect()

        logging.debug("RenderingServer.pair: episode {0}, scene {1}, resource {2}, ad {3}"
                      .format(episode, scene, resource, ad))

    def connect(self):
        logging.debug("RenderingServer.connect")