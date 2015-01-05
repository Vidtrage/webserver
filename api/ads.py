import logging
from api.serializer import get_json_file


class Ads(object):
    ads_list = {}

    def get_user_ads(self, user):
        """
        Get the list of ads for the user
        :param user: The user name used to store the ads
        :return: A list of ads
        """

        logging.debug("Get episodes for user {0}".format(user))

        if user not in self.ads_list:
            self.ads_list[user] = Ads._load_user_ads(user)

        return self.ads_list[user]

    @staticmethod
    def _load_user_ads(user):
        return [
            {'name': 'myad1', 'source': 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'},
            {'name': 'myad2', 'source': 'http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/QuickTime/QuickTime_test7_4m3s_MPEG4SP_CBR_96kbps_352x288_30fps_AAC-LCv4_CBR_320kbps_Stereo_48000Hz.mp4'},
            {'name': 'myad3', 'source': 'http://download.wavetlan.com/SVV/Media/HTTP/BlackBerry.mp4'},
            {'name': 'myad4', 'source': 'http://download.openbricks.org/sample/H264/h264_sintel_trailer-1080p.mp4'}
        ]


        #return get_json_file("DB/{0}/ads.json".format(user))