from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'^episodes$', views.episode_list),
    url(r'^ads$', views.ads),
]