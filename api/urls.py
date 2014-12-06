from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'^$', views.episode_list),
    url(r'^(?P<pk>[0-9]+)/$', views.episode_details),
]