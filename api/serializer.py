# from rest_framework import serializers
import logging
import glob
import os
import json
from vidtrage.settings import BASE_DIR


class DBSerializer(object):

    logging.basicConfig(level=logging.DEBUG)

    @staticmethod
    def get_episodes():
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


    @staticmethod
    def get_ads():
        try:
            with open("DB/Ayelet/ads.json") as episodes_file:
                ads_json = episodes_file.read()
        except OSError as err:
            logging.error("OS Error. {0}".format(err))
        except IOError as err:
            logging.error("IO Error. {0}".format(err))
        else:
            if ads_json is not None:
                return json.loads(ads_json)
            else:
                return json.load({"error": "no ads"})



# class EpisodeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Episode
#         fields = ('id', 'file_name', 'description')
