import logging
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from api.serializer import DBSerializer
from api.server import RenderingServer


class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

@csrf_exempt
def episode_list(request):
    """
    List all episodes, or create a new episode.
    """
    if request.method == 'GET':
        episodes = DBSerializer.get_episodes()
        return JSONResponse(episodes)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = DBSerializer(data=data)
        if serializer.is_valid():
            logging.debug('Creating an episode' + data)
            # serializer.save()
            return JSONResponse(serializer.data, status=201)
        return JSONResponse(serializer.errors, status=400)


@csrf_exempt
def ads(request):
    logging.debug('API ads')
    if request.method == 'GET':
        ads_list = DBSerializer.get_ads()
        return JSONResponse(ads_list)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        logging.debug("ads POST request {0}".format(data))
        episode = data['episode']
        scene = data['scene']
        resource = data['resource']
        ad = data['ad']
        server = RenderingServer()
        server.pair(episode, scene, resource, ad)
        return JSONResponse(DBSerializer.get_ads())



@csrf_exempt
def episode_details(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        snippet = Episode.objects.get(pk=pk)
    except Episode.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = EpisodeSerializer(snippet)
        return JSONResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = EpisodeSerializer(snippet, data=data)
        if serializer.is_valid():
            logging.debug('Creating an episode' + data)
            # serializer.save()
            return JSONResponse(serializer.data)
        return JSONResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        snippet.delete()
        return HttpResponse(status=204)