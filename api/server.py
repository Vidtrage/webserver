import logging
from urllib.request import urlopen
from vidtrage import settings


class RenderingServer(object):

    @staticmethod
    def pair(user, episode, scene, resource, ad):

        logging.debug("RenderingServer.pair: user {0}, episode {1}, scene {2}, resource {3}, ad {4}"
                      .format(user, episode, scene, resource, ad))

        try:
            server_response = urlopen("{0}/pair?user={1}&episode={2}&scene={3}&resource={4}&ad={5}".format(
                settings.RENDERING_ENGINE, user, episode, scene, resource, ad))
        except Exception as ex:
            logging.error("RenderingServer.pair call to server failed:\n{0}"
                          .format(ex))
        else:
            if server_response.status == 200:
                return server_response.read()
            else:
                logging.error("RenderingServer.pair call to server returned error {0}:\n{1}"
                              .format(server_response.status, server_response.read()))

        return ""
