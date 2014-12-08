import logging
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from api.ads import Ads
from api.episodes import Episodes


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
        user = request.GET.get('user')
        episodes = Episodes()
        episodes_list = episodes.get_user_episodes(user)
        return JSONResponse(episodes_list)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = DBSerializer(data=data)
        if serializer.is_valid():
            logging.debug('Creating an episode' + data)
            # serializer.save()
            return JSONResponse(serializer.data, status=201)
        return JSONResponse(serializer.errors, status=400)


@csrf_exempt
def ad_list(request):
    logging.debug('API ads')
    if request.method == 'GET':
        user = request.GET.get('user')
        ads = Ads()
        ads_list = ads.get_user_ads(user)
        return JSONResponse(ads_list)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        logging.debug("ads POST request {0}".format(data))
        user = data['user']
        scene = data['scene']
        resource = data['resource']
        ad = data['ad']

        episodes = Episodes()
        episodes_list = episodes.get_user_episodes(user)

        episodes_list.pair(scene, resource, ad)

        return JSONResponse(Episodes.get_user_episodes(user))



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