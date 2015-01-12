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

        return get_json_file("DB/{0}/ads.json".format(user))