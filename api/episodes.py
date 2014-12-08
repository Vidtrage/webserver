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
        return get_json_file("DB/{0}/episodes.json".format(user))
