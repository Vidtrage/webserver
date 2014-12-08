import logging
import json


def get_json_file(file_path):
    try:
        with open(file_path) as json_file:
            read_file = json_file.read()
    except OSError as err:
        logging.error("OS Error. {0}".format(err))
    except IOError as err:
        logging.error("IO Error. {0}".format(err))
    else:
        if read_file is not None:
            try:
                return json.loads(read_file)
            except Exception as e:  # TODO: find more specific exceptions
                logging.error("failed to load json file. {0}".format(e))
                return json.load({})
