# from rest_framework import serializers
import logging
import glob
import os
import json
from vidtrage.settings import BASE_DIR


class EpisodeSerializer(object):

    logging.basicConfig(level=logging.DEBUG)

    @staticmethod
    def get_episodes():
        logging.debug("BASE_DIR: {0}".format(BASE_DIR))
        episode = None
        try:
            with open("DB/Ayelet/episodes.json") as episodes_file:
                episode = episodes_file.read()
        except OSError as err:
            logging.error("OS Error. {0}".format(err))
        except IOError as err:
            logging.error("IO Error. {0}".format(err))
        else:
            if episode is not None:
                return json.loads(episode)
            else:
                return json.load({"error": "no episode"})



# class EpisodeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Episode
#         fields = ('id', 'file_name', 'description')
