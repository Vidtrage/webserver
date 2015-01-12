import logging
from api.serializer import get_json_file


class Episodes(object):
    user_episodes = {}

    def get_user_episodes(self, user):
        """
        Get the list of episodes for the user
        :param user: The user name used to store the episodes
        :return: A list of episodes
        """
        logging.debug("Get episodes for user {0}", user)

        if user not in self.user_episodes:
            self.user_episodes[user] = Episodes._load_user_episodes(user)

        return self.user_episodes[user]

    @staticmethod
    def _load_user_episodes(user):
        # return [
        #     {'name': 'myep1', 'source': 'http://techslides.com/demos/sample-videos/small.webm'},
        #     {'name': 'myep2', 'source': 'http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4'},
        #     {'name': 'myep3', 'source': 'http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/test7.mp4'},
        #     {'name': 'myep4', 'source': 'http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/MediaCoder/MediaCoder_test2_1m10s_XVID_VBR_131kbps_480x320_25fps_AACLCv4_VBR_32kbps_Stereo_24000Hz.mp4'}
        # ]

        return get_json_file("DB/{0}/episodes.json".format(user))
